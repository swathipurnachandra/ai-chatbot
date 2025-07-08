import { useNavigate } from "react-router-dom";
import '../App.css';


const Login = () => {
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();

        navigate("/chat");
    };
    return (
        <div className="login-container">
            <h2 className="login-title">Login</h2>
            <form className="login-form" onSubmit={handleLogin}>
                <input className="login-input" type="email" placeholder="Email" required />
                <input className="login-input" type="password" placeholder="Password" required />
                <button className="login-button" type="submit">Login</button>
            </form>
            <a className="login-link" href="#forgot-password">Forgot password?</a>
        </div>
    );
}

export default Login;