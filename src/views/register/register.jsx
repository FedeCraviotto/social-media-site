import './register.scss';
function Register(){
    return(
        <div className='register'>
        <div className="card">
            <div className="left">
                <h1>Bienvenido!</h1>
                <p>Descripcion de la pagina Descripcion de la paginaDescripcion de la paginaDescripcion de la pagina</p>
                <span>Do you have an account?</span>
                <button>Login</button>
            </div>
            <div className="right">
                <h1>Register</h1>
                <form action="POST">
                    <input type="text" placeholder='Name'/>
                    <input type="email" placeholder='Email'/>
                    <input type="text" placeholder='Username' />
                    <input type="password" placeholder='Password'/>
                    <button>Register</button>
                </form>
            </div>
        </div>
    </div>
    )
};
export default Register;