import { Link, useNavigate } from 'react-router-dom';
import './register.scss';
import { useState } from 'react';
import axios from 'axios';

function Register(){

  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    name: "",
    password: "",
  });

  const [err, setErr] = useState(null);

  function handleChange(e) {
    setInputs((previousInputs) => ({
      ...previousInputs,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleClick(e) {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/auth/register",inputs);
      navigate('/login');
    } catch (error) {
        setErr(error.response.data.code);
    }
  };

  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Bienvenido!</h1>
          <p>
            Descripcion de la pagina Descripcion de la paginaDescripcion de la
            paginaDescripcion de la pagina
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form action="POST">
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
            {err && err}
            <Link to="/register">
              <button onClick={handleClick}>Register</button>
            </Link>
          </form>
          <span>Do you have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Register;