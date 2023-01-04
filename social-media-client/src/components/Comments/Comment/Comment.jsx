function Comment({comment}){
    return(
        <div className="comment">
            <img src={comment.avatar} alt={comment.userName + 'avatar'} />
            <div className="info">
                <span>{comment.userName}</span>
                <p>{comment.description}</p>
            </div>
            <span className='date' >1 day ago</span>
        </div>
    )
}
export default Comment;