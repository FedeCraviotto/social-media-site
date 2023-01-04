import "./thoughts.scss";
import UploadImage from '../../assets/images/thoughts/upload-image.png';
import AddPlace from '../../assets/images/thoughts/add-place.png';
import TagFriends from '../../assets/images/thoughts/tag-friends.png';
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Thoughts = () => {

  const {currentUser} = useContext(AuthContext)
  return (
    <div className="thoughts">
      <div className="container">
        <div className="top">
          <img
            src={currentUser.avatar}
            alt=""
          />
          <input type="text" placeholder={`What's on your mind ${currentUser.name}?`} />
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <input type="file" id="file" style={{display:"none"}} />
            <label htmlFor="file">
              <div className="item">
                <img src={UploadImage} alt="Upload" />
                <span>Add Image</span>
              </div>
            </label>
            <div className="item">
              <img src={AddPlace} alt="Add a place" />
              <span>Add Place</span>
            </div>
            <div className="item">
              <img src={TagFriends} alt="Tag friends" />
              <span>Tag Friends</span>
            </div>
          </div>
          <div className="right">
            <button>Share</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thoughts;