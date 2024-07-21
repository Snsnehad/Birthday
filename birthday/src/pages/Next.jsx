import React from 'react';
import '../next.css'
import { useNavigate } from 'react-router-dom';
const Next = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/moments");
  };

  return (
    <div className="nbg">
      <div className="con">
        <div className="birthday-box">
          <h1>Happy Birthday!</h1>
          <p>
            Wishing you a day filled with love and joy! And not only day but I
            wish you own all over the years coming in the next.
            <br />
            We had a great time with each other in past years and I know we both
            will not forget it doesnt matter we remember it or not.👻
            <br/>
            Lets take a glimpse of the moments 
            ........<button className='moments' onClick={handleNavigate}>Chale!...</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Next;
