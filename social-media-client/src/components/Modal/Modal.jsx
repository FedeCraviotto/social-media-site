import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { makeRequest } from "../../axios";
import "./modal.scss";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { AuthContext } from "../../context/authContext";

function Modal({ setOpenModal, user }) {
  
  const { setCurrentUser} = useContext(AuthContext);
  
  async function uploadImage(file) {
    try {
      const formData = new FormData();
      formData.append("image", file);
      const res = await makeRequest.post("/upload", formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }

  const [cover, setCover] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const [fields, setFields] = useState({
    email: user.email,
    // password: user.password,
    name: user.name,
    city: user.city,
    website: user.website,
  });

  function handleChange(e) {
    setFields((previousFields) => ({
      ...previousFields,
      [e.target.name]: e.target.value,
    }));
  }

  const queryClient = useQueryClient();

  const mutation = useMutation(
    (userInfo) => {
      return makeRequest.put("users", userInfo);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["users"]);
      },
    }
  );

  async function handleSubmit(e) {
    e.preventDefault();
    let coverURL;
    let avatarURL;

    coverURL = cover ? await uploadImage(cover) : user.cover;
    avatarURL = avatar ? await uploadImage(avatar) : user.avatar;

    mutation.mutate({ ...fields, cover: coverURL, avatar: avatarURL });
    let userUpdated = {...user, ...fields, cover: coverURL, avatar: avatarURL};
    // localStorage.setItem('user', JSON.stringify(userUpdated));
    setCurrentUser(userUpdated);
    setOpenModal(false);
    setCover(null);
    setAvatar(null);
  }

  return (
    <div className="modal">
        <div className="wrapper">
          <h1>Update Your Profile</h1>
          <form>
            <div className="files">
              <label htmlFor="cover">
                <span>Cover Picture</span>
                <div className="imgContainer">
                  <img
                    src={
                      cover
                        ? URL.createObjectURL(cover)
                        : process.env.REACT_APP_URL_FOR_ROOT + user.cover
                    }
                    alt=""
                  />
                  <CloudUploadIcon className="icon" />
                </div>
              </label>
              <input
                type="file"
                id="cover"
                name="cover"
                style={{ display: "none" }}
                onChange={(e) => setCover(e.target.files[0])}
              />
              <label htmlFor="avatar">
                <span>Avatar</span>
                <div className="imgContainer">
                  <img
                    src={
                        avatar
                        ? URL.createObjectURL(avatar)
                        : process.env.REACT_APP_URL_FOR_ROOT + user.avatar
                    }
                    alt=""
                  />
                  <CloudUploadIcon className="icon" />
                </div>
              </label>
              <input
                type="file"
                id="avatar"
                name="avatar"
                style={{ display: "none" }}
                onChange={(e) => setAvatar(e.target.files[0])}
              />
            </div>
            <label>Email</label>
            <input
              type="text"
              value={fields.email}
              name="email"
              onChange={handleChange}
            />
            {/* <label>Password</label>
            <input
              type="text"
              value={fields.password}
              name="password"
              onChange={handleChange}
            /> */}
            <label>Name</label>
            <input
              type="text"
              value={fields.name}
              name="name"
              onChange={handleChange}
            />
            <label>Country / City</label>
            <input
              type="text"
              name="city"
              value={fields.city}
              onChange={handleChange}
            />
            <label>Website</label>
            <input
              type="text"
              name="website"
              value={fields.website}
              onChange={handleChange}
            />
            <button onClick={handleSubmit}>Update</button>
          </form>
          <button className="close" onClick={() => setOpenModal(false)}>
            close
          </button>
        </div>
    </div>
  );
}
export default Modal;
