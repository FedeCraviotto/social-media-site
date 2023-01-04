import Posts from '../../components/Posts/Posts';
import Stories from '../../components/Stories/Stories';
import Thoughts from '../../components/Thoughts/Thoughts';
import './home.scss'
function Home(){
    return(
        <div className='home'>
            <Stories />
            <Thoughts />
            <Posts />
        </div>
    )
};
export default Home;