import { Link, useNavigate } from 'react-router-dom';
import './login.scss';
import { useContext, useState} from 'react';

import { AuthContext } from '../../context/authContext';
function Login(){

    const navigate = useNavigate()
    
    const [inputs, setInputs] = useState({
        username: "",
        password: ""
      });
    
      const [err, setErr] = useState(null);
    
      function handleChange(e) {
        setInputs((previousInputs) => ({
          ...previousInputs,
          [e.target.name]: e.target.value,
        }));
      }

    const {login} = useContext(AuthContext);

    async function handleLogin(e){
        e.preventDefault();
        try {
            await login(inputs);
            navigate('/');

        } catch (err) {
            setErr(err.response.data);
        }
    }

    return(
        <div className='login'>
            <div className="card">
                <div className="left">
                    <h1>B!</h1>
                    <p>Bienvenido a Badumba. La red social que nos une a todos.</p>
                    <span>Not registered yet?</span>
                    <Link to='/register'>
                        <button>Register</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>Login</h1>
                    <form action="POST">
                        <input type="text" placeholder='username' name='username' onChange={handleChange}/>
                        <input type="password" placeholder='password' name='password' onChange={handleChange}/>
                        {err && err}
                        <Link to='/login'>
                            <button onClick={handleLogin}>Login</button>
                        </Link>
                    </form>
                    <span>Not registered yet?</span>
                    <Link to='/register'>
                        <button>Register</button>
                    </Link>
                </div>
            </div>
        </div>
    )
};
export default Login;