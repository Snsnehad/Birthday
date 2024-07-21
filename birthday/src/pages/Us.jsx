import React from "react";
import "./us.css";
import { useNavigate } from "react-router-dom";

const Us = () => {
  const navigate = useNavigate();
  const handleClick=()=>{
    return navigate('/random')
  }
  return (
    <div>
      <p className="p">This page if for Our Friendship...</p>
      <div className="photo">
        <img src="./fav1.jpg" className="f1" />
        <img src="./fav2.jpg" className="f1" />
        <img src="./we.jpg" className="f1" />
        <img src="./we3.jpg" className="f1" />
        <img src="./wee.jpg" className="f1" />
        <img src="./sai.jpg" className="f1" />
        <img src="./IMG_20240308_202447.jpg" className="f1" />
        <img src="./IMG_20240323_130827_443.webp" className="f1" />
        <img src="./IMG_20240531_082229_855.webp" className="f1" />
        <img src="./IMG20220529124750.jpg" className="f1" />
        <img src="./IMG20231219163531.jpg" className="f1" />
        <img src="./IMG20240607185917.jpg" className="f1" />
      </div>
      <p>
        There were a lot of photos but to make it brief I think its enough for
        now...💝
      </p>
      <p>
        Well! I am adding few more random photos which holds a lot of memories.....
        <button onClick={handleClick} className="cl"> Click </button>
      </p>
    </div>
  );
};

export default Us;
