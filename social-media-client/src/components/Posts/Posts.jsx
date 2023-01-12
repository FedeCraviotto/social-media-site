import './posts.scss';
import Post from './Post/Post';

import { useQuery } from '@tanstack/react-query'
import {makeRequest} from '../../axios.js';

function Posts(){

    const { isLoading, error, data } = useQuery(['posts'], () =>
    makeRequest.get('/posts')
    .then(res => {
        return res.data
    })
    );

    console.log(data);

    return(
        <div className='posts'>
            {error ? 'Something went wrong' :
            (isLoading ? 
            'Loading': 
            data.map((post,index) => {
                return <Post post={post} key={post.userName + post.postId + index}/>
            }))}
        </div>
    )
}
export default Posts;