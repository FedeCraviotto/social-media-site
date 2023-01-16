import './profile.scss';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import Posts from '../../components/Posts/Posts';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import { useLocation } from 'react-router-dom';
import { makeRequest } from '../../axios';
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import Modal from '../../components/Modal/Modal';
import { useState } from 'react';


function Profile(){

  const [openModal, setOpenModal] = useState(false);

    const userId = parseInt(useLocation().pathname.split('/')[2]);

    const {currentUser} = useContext(AuthContext);

    const { isLoading, error, data } = useQuery(['users'], () =>
        makeRequest.get('/users/find/' + userId)
        .then(res => {
            return res.data
        })
    );

    const { isLoading : followIsLoading, error : followError, data : followData } = useQuery(['follow'], () =>
        makeRequest.get('/follows/?followedUserId=' + userId)
        .then(res => {
            return res.data
        })
    );

    const queryClient = useQueryClient();

    const mutation = useMutation(
      (following) => {
        if (following)
          return makeRequest.delete("follows/delete?userId=" + userId);
        return makeRequest.post("follows/add", { userId });
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(["follow"]);
        },
      }
    );

    
    async function handleFollow(){
        mutation.mutate(followData.includes(currentUser.id));
    }
    
    return (
      <div className="profile">
        {isLoading ? (
          "Loading..."
        ) : error ? (
          "Something went wrong: " + error
        ) : (
          <>
            <div className="images">
              <img
                src={process.env.REACT_APP_URL_FOR_ROOT + data.cover}
                alt="coverImg"
                className="coverImg"
              />
              <img
                src={process.env.REACT_APP_URL_FOR_ROOT + data.avatar}
                alt="profileImg"
                className="profileImg"
              />
            </div>
            <div className="profileContainer">
              <div className="profileInfo">
                <div className="left">
                  <a
                    href="http://facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FacebookIcon className="muIcon" />
                  </a>
                  <a
                    href="http://instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <InstagramIcon className="muIcon" />
                  </a>
                  <a
                    href="http://twitter.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <TwitterIcon className="muIcon" />
                  </a>
                  <a
                    href="http://linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <LinkedInIcon className="muIcon" />
                  </a>
                </div>
                <div className="center">
                  <span>{data.name}</span>
                  <div className="info">
                    <div className="item">
                      <LocationOnOutlinedIcon />
                      <span>{data.city}</span>
                    </div>
                    <div className="item">
                      <LanguageOutlinedIcon />
                      <span>{data.website}</span>
                    </div>
                  </div>
                  {followIsLoading ? (
                    "Loading"
                  ) : followError ? (
                    "Something went wrong: " + followError
                  ) : userId === currentUser.id ? (
                    <button onClick={() => setOpenModal(true)}>Update</button>
                  ) : (
                    <button onClick={handleFollow}>
                      {followData.includes(currentUser.id)
                        ? "Following"
                        : "Follow"}
                    </button>
                  )}
                </div>
                <div className="right">
                  <EmailOutlinedIcon />
                  <MoreVertOutlinedIcon />
                </div>
              </div>
              <Posts userId={userId} />
            </div>
          </>
        )}
        {openModal && <Modal setOpenModal={setOpenModal} user={data}/>}
      </div>
    );
};
export default Profile;