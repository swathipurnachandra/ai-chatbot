import { Link } from 'react-router-dom';
import '../App.css';

const Home = () => {
    return (
        <div className="home-container">
            <h1 className="home-title">Welcome to the AI Chatbot</h1>
            <p className="home-description">Talk to our AI chatbot and get instant answers!</p>
            <Link to="/login" className="home-link">Login to start chatting</Link>
        </div>
    );
}

export default Home;