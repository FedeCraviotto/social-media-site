import './post.scss';
import DragIndicatorOutlinedIcon from '@mui/icons-material/DragIndicatorOutlined';
import { Link } from 'react-router-dom';
import EmptyLikeButton from '../../../assets/images/users/posts/EmptyLikeButton.png';
import RedLikeButton from '../../../assets/images/users/posts/RedLikeButton.png';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import Comments from '../../Comments/Comments';
import { useState, useContext} from 'react';
import moment from 'moment';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { makeRequest } from '../../../axios';
import { AuthContext } from '../../../context/authContext';

function Post({post}){

    const [commentOpen, setCommentOpen] = useState(false);
    const [postMenu, setPostMenu] = useState(false);
    const {currentUser} = useContext(AuthContext)

    const queryClient = useQueryClient();
 
    const { isLoading : likeIsLoading, error : likeError, data : likeData } = useQuery(['likes', post.postId], () =>
        makeRequest.get('/likes?postId=' + post.postId)
        .then(res => {
            return res.data
        })
    );

    const mutation = useMutation((liked) => {
        if(liked) return makeRequest.delete('likes/delete?postId=' + post.postId);
        return makeRequest.post('likes/add', {postId : post.postId});
    },
    {
        onSuccess : () => {
            queryClient.invalidateQueries(['likes'])
        }
    }
    );

    const deletPostMutation = useMutation((postId) => {
        
        return makeRequest.delete('posts/' + postId);
    },
    {
        onSuccess : () => {
            queryClient.invalidateQueries(['posts'])
        }
    }
    );

    function handlePostDelete() {
        deletPostMutation.mutate(post.postId)
    }

    
    async function handleLike(){
        mutation.mutate(likeData.includes(currentUser.id));
    }
    if (likeIsLoading) return 'Loading...'
    if (likeError) return 'An error has occurred: ' + likeError.message
    
    return (
      <div className="post">
        <div className="container">
          <div className="user">
            <div className="userInfo">
              <img
                src={post.avatar?.includes('http', 0)? post.avatar : process.env.REACT_APP_URL_FOR_ROOT + post.avatar}
                alt={post.userName}
              />
              <div className="details">
                <Link to={`/profile/${post.userId}`}>
                  <span className="name">{post.userName}</span>
                </Link>
                <span className="date">{moment(post.createdAt).fromNow()}</span>
              </div>
            </div>
            <DragIndicatorOutlinedIcon onClick={() => setPostMenu(!postMenu)} />
            {postMenu && post.userId === currentUser.id && (
              <button onClick={handlePostDelete}>Delete</button>
            )}
          </div>

          <div className="content">
            <p>{post.description}</p>
            <img
              src={post.image?.includes('http', 0)? post.image : process.env.REACT_APP_URL_FOR_ROOT + post.image}
              alt={post.userName}
            />
          </div>

          <div className="interactions">
            <div className="item">
              {likeData.includes(currentUser.id) ? (
                <img
                  src={RedLikeButton}
                  alt="Clicked Like Button"
                  onClick={handleLike}
                />
              ) : (
                <img
                  src={EmptyLikeButton}
                  alt="Like Button"
                  onClick={handleLike}
                />
              )}
              {likeData.length} Likes
            </div>
            <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
              <ChatOutlinedIcon />
              75 Comments
            </div>
            <div className="item">
              <ShareOutlinedIcon />
              Share
            </div>
          </div>

          {commentOpen && <Comments postId={post.postId} commentOpen={commentOpen}/>}
        </div>
      </div>
    );
}
export default Post;