import './post.scss';
import DragIndicatorOutlinedIcon from '@mui/icons-material/DragIndicatorOutlined';
import { Link } from 'react-router-dom';
import EmptyLikeButton from '../../../assets/images/users/posts/EmptyLikeButton.png';
import RedLikeButton from '../../../assets/images/users/posts/RedLikeButton.png';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import Comments from '../../Comments/Comments';
import { useState } from 'react';
// import { useContext } from 'react';
// import { AuthContext } from '../../../context/authContext';

function Post({post}){

    const [commentOpen, setCommentOpen] = useState(false);

    // ToDo Temporary
    const liked = false;
    return(
        <div className='post'>
            <div className="container">

                <div className="user">
                    <div className="userInfo">
                        <img src={post.avatar} alt={post.userName} />
                        <div className="details">
                            <Link to={`/profile/${post.postId}`}>
                                <span className='name' >{post.userName}</span>
                            </Link>
                            <span className='date'>37 minutes ago</span>
                        </div>
                    </div>
                    <DragIndicatorOutlinedIcon />
                </div>
                
                <div className="content">
                    <p>{post.description}</p>
                    <img src={post.image} alt={post.userName} />
                </div>

                <div className="interactions">
                    <div className="item">
                        {liked ?
                        <img src={RedLikeButton} alt="Clicked Like Button" /> : <img src={EmptyLikeButton} alt="Like Button" />
                        }
                        450 Likes
                    </div>
                    <div className="item" onClick={()=>setCommentOpen(!commentOpen)}>
                        <ChatOutlinedIcon />
                        75 Comments
                    </div>
                    <div className="item">
                        <ShareOutlinedIcon />
                        Share
                    </div>
                </div>
                
                {commentOpen && <Comments />}

            </div>
        </div>
    )
}
export default Post;