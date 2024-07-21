import React from 'react'
import './moments.css'
import { useNavigate } from 'react-router-dom'

const Moments = () => {
  const navigate = useNavigate();
  const handleClick=()=>{
    return navigate('/us')
  }
  return (
    <div>
      <h2>
        These are for you to look at yourself and realise how it is important to
        keep smiling...
      </h2>
      <div className="smiles">
        <img src="./s1.jpg" className="s1" />
        <img src="./s2.jpg" className="s1" />
        <img src="./s3.jpg" className="s1" />
        <img src="./s4.jpg" className="s1" />
        {/* <img src="./s5.jpg" className="s1" /> */}
        <img src="./s6.jpg" className="s1" />
      </div>
      <button className="n" onClick={handleClick}>
        Next
      </button>
    </div>
  );
}

export default Moments