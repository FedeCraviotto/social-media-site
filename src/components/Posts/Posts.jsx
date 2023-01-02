import './posts.scss';
import Post from './Post/Post';

function Posts(){

    const samplePosts = [
        {
            postId: 1,
            userId: 1,
            userName: 'Fede Craviotto',
            avatar: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            image: 'https://images.unsplash.com/photo-1672643195976-225a511ce2c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            description: 'Nos llena de orgullo y satisfacción anunciar que nuestro último trabajo HOGAR se encuentra disponible al módico precio de 10 euros en el Bar Sanatorio y a cambio te ponen una caña pagada por tí. Ea.'
        },
        {
            postId: 2,
            userId: 2,
            userName: 'Johnny Vargas',
            avatar: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            image: 'https://images.unsplash.com/photo-1672659382440-5a030f208eca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            description: 'Mismo sitio y distintos momentos. Conciertos en la antigua Sala Goya y en La Mecánica. Diseño de Alberto Bizarro.'
        },
        {
            postId: 3,
            userId: 3,
            userName: 'Nacho Vargas',
            avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            image: 'https://images.unsplash.com/photo-1672651158855-f225fe553b0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            description: 'El próximo sábado 12 de Noviembre, a las 12 de la mañana os espero en el Museo de Jaén  en el cierre del "Ciclo A Solas", que une música y colecciones.'
        },
        {
            postId: 4,
            userId: 2,
            userName: 'Los Pollos Hermanos',
            avatar: 'https://images.pexels.com/photos/1769279/pexels-photo-1769279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            image: 'https://images.unsplash.com/photo-1672659878782-5862ce1d70d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=709&q=80',
            description: null,
        },
    ]
    return(
        <div className='posts'>
            {samplePosts.map((post,index) => {
                return <Post post={post} key={post.userName + post.postId + index}/>
            })}
        </div>
    )
}
export default Posts;