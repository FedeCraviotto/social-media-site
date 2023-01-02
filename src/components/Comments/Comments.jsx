import './comments.scss';
import Comment from './Comment/Comment';
import { useContext } from 'react';
import {AuthContext} from '../../context/authContext';

function Comments(){
    const {currentUser} = useContext(AuthContext);
    const sampleComments = [
        {
            commentId: 1,
            userId: 1,
            userName: 'Fede Craviotto',
            avatar: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            description: 'Tranquilos que van a tener laburo seguro XD'
        },
        {
            commentId: 2,
            userId: 2,
            userName: 'Johnny Vargas',
            avatar: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            description: 'LMAO'
        },
        {
            commentId: 3,
            userId: 3,
            userName: 'Nacho Vargas',
            avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            description: '"Nosotros no somos tanto del front"... LMAO'
        },
        {
            commentId: 4,
            userId: 2,
            userName: 'Los Pollos Hermanos',
            avatar: 'https://images.pexels.com/photos/1769279/pexels-photo-1769279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            description: 'ASHDKJASHDAS',
        },
        {
            commentId: 5,
            userId: 2,
            userName: 'Los Pollos Hermanos',
            avatar: 'https://images.pexels.com/photos/1769279/pexels-photo-1769279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            description: 'COPIUM',
        },
    ]
    return(
        <div className="comments">
            <div className="write">
                <img src={currentUser.avatar} alt={currentUser.name} />
                <input type="text" placeholder='Write a comment...' />
                <button>Send</button>
            </div>
            {sampleComments.map((comment, index) =>
                <Comment key={comment.userName + comment.commentId + index} comment={comment}/>
            )}
        </div>
    )
}
export default Comments;