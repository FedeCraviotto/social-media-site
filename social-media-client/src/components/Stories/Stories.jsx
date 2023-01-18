import { useContext } from 'react';
import './stories.scss';
import {AuthContext} from '../../context/authContext';
function Stories(){

    const {currentUser} = useContext(AuthContext);
    const sampleStories = [
        {
            id: 1,
            name: 'Fede Craviotto',
            avatar: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            id: 2,
            name: 'Johnny Vargas',
            avatar: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            id: 3,
            name: 'Nacho Vargas',
            avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            id: 4,
            name: 'Los Pollos Hermanos',
            avatar: 'https://images.pexels.com/photos/1769279/pexels-photo-1769279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
    ]
    return (
      <div className="stories">
        <div className="story">
          <img
            src={
              currentUser.avatar?.includes("http", 0)
                ? currentUser.avatar
                : process.env.REACT_APP_URL_FOR_ROOT + currentUser.avatar
            }
            alt={currentUser.name}
          />
          <span>{currentUser.name}</span>
          <button>+</button>
        </div>
        {sampleStories.map((story, index) => (
          <div className="story" key={story.name + index}>
            {/* <img src={story.avatar?.includes('http', 0)? story.avatar : process.env.REACT_APP_URL_FOR_ROOT+ story.avatar} alt={story.name}/> */}
            <img src={story.avatar} alt={story.name} />
            <span>{story.name}</span>
          </div>
        ))}
      </div>
    );
};
export default Stories;