import './login.scss'
function Login(){
    return(
        <div className='login'>
            <div className="card">
                <div className="left">
                    <h1>Bienvenido!</h1>
                    <p>Descripcion de la pagina Descripcion de la paginaDescripcion de la paginaDescripcion de la pagina</p>
                    <span>Not registered yet?</span>
                    <button>Register</button>
                </div>
                <div className="right">
                    <h1>Login</h1>
                    <form action="POST">
                        <input type="text" placeholder='username' />
                        <input type="password" placeholder='password'/>
                        <button>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
};
export default Login;