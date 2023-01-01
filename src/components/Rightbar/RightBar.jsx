import './rightBar.scss';
import userPhoto from '../../assets/images/users/images/guitarrist-playing.jpg';
function RightBar(){
    return(
        <div className='rightBar'>
            <div className="container">
                <div className="item">
                    <span>Suggestions</span>
                    <div className="user">
                        <div className="userInfo">
                            <img src={userPhoto} alt="UserPhoto" />
                            <span>Suggested user1</span>
                        </div>
                        <div className="buttons">
                            <button>follow</button>
                            <button>dismiss</button>
                        </div>
                    </div>    
                
                    <div className="user">
                        <div className="userInfo">
                            <img src={userPhoto} alt="UserPhoto" />
                            <span>Suggested user2</span>
                        </div>
                        <div className="buttons">
                            <button>follow</button>
                            <button>dismiss</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default RightBar;