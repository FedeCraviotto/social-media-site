import './profile.scss';

//Dummy imgs for testing without user being set
// import backgroundImg from '../../assets/images/profile/digital-background.jpg';
// import fishAvatar from '../../assets/images/users/avatars/fish.png';

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

function Profile(){

    const {currentUser} = useContext(AuthContext);
    return(
        <div className='profile'>
            <div className="images">
                <img src={currentUser.cover} alt="coverImg" className='coverImg'/>
                <img src={currentUser.avatar} alt="profileImg" className='profileImg'/>
            </div>
            <div className="profileContainer">
                <div className="profileInfo">
                    <div className="left">
                        <a href="http://facebook.com/" target="_blank" rel="noreferrer">
                            <FacebookIcon className='muIcon'/>
                        </a>
                        <a href="http://instagram.com/" target="_blank" rel="noreferrer">
                            <InstagramIcon className='muIcon'/>
                        </a>
                        <a href="http://twitter.com/" target="_blank" rel="noreferrer">
                            <TwitterIcon className='muIcon'/>
                        </a>
                        <a href="http://linkedin.com/" target="_blank" rel="noreferrer">
                            <LinkedInIcon className='muIcon'/>
                        </a>
                    </div>
                    <div className="center">
                        <span>Fede Craviotto</span>
                        <div className="info">
                            <div className="item">
                                <LocationOnOutlinedIcon />
                                <span>Arg</span>
                            </div>
                            <div className="item">
                                <LanguageOutlinedIcon />
                                <span>github/FedeCraviotto</span>
                            </div>
                        </div>
                        <button>Follow</button>
                    </div>
                    <div className="right">
                        <EmailOutlinedIcon />
                        <MoreVertOutlinedIcon />
                    </div>
                </div>
                <Posts />
            </div>
        </div>
    )
};
export default Profile;