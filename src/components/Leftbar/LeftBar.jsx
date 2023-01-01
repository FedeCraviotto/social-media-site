import './leftBar.scss';
import UserIcon from '../../assets/images/users/images/guitarrist-playing.jpg';
import FriendsIcon from '../../assets/images/panels/Friends-icon.png';
import CoursesIcon from '../../assets/images/panels/Courses-icon.png';
import EventsIcon from '../../assets/images/panels/Events-icon.png';
import FundraiserIcon from '../../assets/images/panels/Fundraiser-icon.png';
import GalleryIcon from '../../assets/images/panels/Gallery-icon.png';
import GamingIcon from '../../assets/images/panels/Gaming-icon.png';
import GroupsIcon from '../../assets/images/panels/Groups-icon.png';
import MarketplaceIcon from '../../assets/images/panels/Marketplace-icon.png';
import MemoriesIcon from '../../assets/images/panels/Memories-icon.png';
import MessagesIcon from '../../assets/images/panels/Messages-icon.png';
import TutorialsIcon from '../../assets/images/panels/Tutorials-icon.png';
import VideosIcon from '../../assets/images/panels/Videos-icon.png';
import WatchIcon from '../../assets/images/panels/Watch-icon.png';


function LeftBar(){
    return(
        <div className='leftBar'>
            <div className="container">
                <div className="menu">
                    <div className="user">
                        <img src={UserIcon} alt="Sample User" />
                        <span>Fede Craviotto</span>
                    </div>
                    <div className="item">
                        <img src={FriendsIcon} alt="Friends" />
                        <span>Friends</span>
                    </div>
                    <div className="item">
                        <img src={GroupsIcon} alt="Groups" />
                        <span>Groups</span>
                    </div>
                    <div className="item">
                        <img src={MarketplaceIcon} alt="Friends" />
                        <span>Marketplace</span>
                    </div>
                    <div className="item">
                        <img src={WatchIcon} alt="Friends" />
                        <span>Watch</span>
                    </div>
                    <div className="item">
                        <img src={MemoriesIcon} alt="Friends" />
                        <span>Memories</span>
                    </div>
                </div>
                <hr />
                <div className="menu">
                    <span>Your shortcuts</span>
                    <div className="item">
                        <img src={EventsIcon} alt="Events" />
                        <span>Events</span>
                    </div>
                    <div className="item">
                        <img src={GamingIcon} alt="Gaming" />
                        <span>Gaming</span>
                    </div>
                    <div className="item">
                        <img src={GalleryIcon} alt="Gallery" />
                        <span>Gallery</span>
                    </div>
                    <div className="item">
                        <img src={VideosIcon} alt="Videos" />
                        <span>Videos</span>
                    </div>
                    <div className="item">
                        <img src={MessagesIcon} alt="Messages" />
                        <span>Messages</span>
                    </div>
                </div>
                <hr />
                <div className="menu">
                    <span>Others</span>
                    <div className="item">
                        <img src={FundraiserIcon} alt="Fundraiser" />
                        <span>Fundraiser</span>
                    </div>
                    <div className="item">
                        <img src={TutorialsIcon} alt="Tutorials" />
                        <span>Tutorials</span>
                    </div>
                    <div className="item">
                        <img src={CoursesIcon} alt="Courses" />
                        <span>Courses</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LeftBar;