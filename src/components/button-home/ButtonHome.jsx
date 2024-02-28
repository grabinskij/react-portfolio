import { useNavigate } from 'react-router-dom';


const ButtonHome = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    };

    return (
        <button onClick={handleClick} className="btn">Go to Home</button>
    );
}

export default ButtonHome;