import moment from 'moment';

function Comment({comment}){

    return(
        <div className="comment">
            <img src={comment.avatar?.includes('http', 0)? comment.avatar : process.env.REACT_APP_URL_FOR_ROOT+ comment.avatar} alt={comment.userName + 'avatar'} />
            <div className="info">
                <span>{comment.userName}</span>
                <p>{comment.description}</p>
            </div>
            <span className='date'> {moment(comment.createdAt).fromNow()}</span>
        </div>
    )
}
export default Comment;