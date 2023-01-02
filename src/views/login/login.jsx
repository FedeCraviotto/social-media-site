import { Link } from 'react-router-dom';
import './login.scss';
import { useContext } from 'react';

import { AuthContext } from '../../context/authContext';
function Login(){
    const {login} = useContext(AuthContext);
    function handleLogin(){
        login();
    }

    return(
        <div className='login'>
            <div className="card">
                <div className="left">
                    <h1>Bienvenido!</h1>
                    <p>Descripcion de la pagina Descripcion de la paginaDescripcion de la paginaDescripcion de la pagina</p>
                    <span>Not registered yet?</span>
                    <Link to='/register'>
                        <button>Register</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>Login</h1>
                    <form action="POST">
                        <input type="text" placeholder='username' />
                        <input type="password" placeholder='password'/>
                        <Link to='/login'>
                            <button onClick={handleLogin}>Login</button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    )
};
export default Login;