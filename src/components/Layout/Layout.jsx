import { Outlet } from 'react-router-dom';
import './layout.scss'
import Navbar from '../Navbar/Navbar';
import LeftBar from '../Leftbar/LeftBar';
import RightBar from '../Rightbar/RightBar';
function Layout(){
    return(
        <div>
            <Navbar />
            <div className='layout'>
                <LeftBar />
                <div className='outlet'>
                <Outlet /> {/*Parte central dinamica. Seteado en children*/}
                </div>
                <RightBar />
            </div>
        </div>
    )
};
export default Layout;