import {Outlet} from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import LeftBar from '../Leftbar/LeftBar';
import RightBar from '../Rightbar/RightBar';
function Layout(){
    return(
        <div>
        <Navbar />
        <div style={{display:'flex'}}>
            <LeftBar />
            <Outlet /> {/*Parte central dinamica. Seteado en children*/}
            <RightBar />
        </div>
        </div>
    )
}
export default Layout