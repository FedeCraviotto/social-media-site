import './posts.scss';
import Post from './Post/Post';

import { useQuery } from '@tanstack/react-query'
import {makeRequest} from '../../axios.js';

function Posts({userId}){
    
    const { isLoading, error, data } = useQuery(['posts'], () =>
        makeRequest.get('/posts?userId=' + userId)
        .then(res => {
            return res.data
        })
    );

    if (isLoading) return 'Loading...'
    if (error) return 'An error has occurred: ' + error.message
    return(
        <div className='posts'>
            {
            data.map((post) => {
                return <Post post={post} key={post.postId}/>
                })
            }
        </div>
    )
}
export default Posts;