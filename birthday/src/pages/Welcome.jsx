import '../App.css'
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();
  const handleClick = ()=>{
    navigate('/next');
  }
  return (
    <div className="wBg">
      <div className="container">
        <h1 className="wel">WELCOME🤩</h1>
      </div>
      <h4 className="mes">
        Are You Ready Madam🥱
        <button className="b" onClick={handleClick}>
          Next
        </button>
      </h4>
    </div>
  );
}

export default Welcome