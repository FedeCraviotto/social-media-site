import './navbar.scss';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/HouseOutlined';
import DarkModeIcon from '@mui/icons-material/Brightness6Outlined';
import AppIcon from '@mui/icons-material/AppsOutlined';
import NotificationIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MailIcon from '@mui/icons-material/MailOutlined';
import UserIcon from '@mui/icons-material/PersonOutlined';
import SearchIcon from '@mui/icons-material/SearchOutlined';
import sampleImage from '../../assets/images/users/images/guitarrist-playing.jpg';
function Navbar(){
    return(
        <div className='navbar'>
            <div className="left">
                <Link to='/'>
                    <span>Home Page</span>
                </Link>
                <HomeIcon />
                <DarkModeIcon />
                <AppIcon />
                <div className="search">
                    <SearchIcon />
                    <input type="text" placeholder='search'/>
                </div>
            </div>
            <div className="right">
                <UserIcon />
                <MailIcon />
                <NotificationIcon />
                <div className="user">
                    <img src={sampleImage} alt="Sample Guitarrist" />
                    <span>User name</span>
                </div>
            </div>
        </div>
    )
};
export default Navbar;