import "./thoughts.scss";
import UploadImage from '../../assets/images/thoughts/upload-image.png';
import AddPlace from '../../assets/images/thoughts/add-place.png';
import TagFriends from '../../assets/images/thoughts/tag-friends.png';
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../../axios";

const Thoughts = () => {

  const {currentUser} = useContext(AuthContext)

  const [imageToUpload, setImageToUpload] = useState(null);
  const [description, setDescription] = useState('');

  async function uploadImage(){
    try {
      const formData = new FormData();
      formData.append('image', imageToUpload);
      const res = await makeRequest.post('/upload', formData);
      return res.data
    } catch (err) {
      console.log(err)
    }
  }

  const queryClient = useQueryClient();

  const mutation = useMutation(newPost=> {
    return makeRequest.post('posts/add', newPost)
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries(['posts'])
    }
  })

  async function handleClick(e){
    
    e.preventDefault();
    let imageFieldForDB = '';
    if(imageToUpload) imageFieldForDB = await uploadImage(); 
    mutation.mutate({description, image : imageFieldForDB});
    setDescription('');
    setImageToUpload(null);

  }
  return (
    <div className="thoughts">
      <div className="container">
        <div className="top">
          <div className="left">
            <img
              src={currentUser.avatar}
              alt=""
            />
            <input type="text" placeholder={`What's on your mind ${currentUser.name}?`} onChange={(e)=>setDescription(e.target.value)} value={description} />
          </div>

          <div className="right">
            {imageToUpload && <img className="fileImage" alt="" src={URL.createObjectURL(imageToUpload)} /> }
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <input type="file" id="image" style={{display:"none"}} onChange={(e)=>setImageToUpload(e.target.files[0])} name='image'/>
            <label htmlFor="image">
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
            <button onClick={handleClick} >Share</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thoughts;