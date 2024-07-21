import React from "react";
import "./random.css";
import { useNavigate } from "react-router-dom";

const Random = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    return navigate("/wishes/sum");
  };
  return (
    <div>
      <p className="p">Smile....... 😅</p>
      <div className="photo">
        <img src="./a.jpg" className="f1" />
        <img src="./ankesh.jpg" className="f1" />
        <img src="./coa.jpg" className="f1" />
        <img src="./canteen.jpg" className="f1" />
        <img src="./f1.jpg" className="f1" />
        <img src="./f2.jpg" className="f1" />
        <img src="./fre.jpg" className="f1" />
        <img src="./googlemeet.jpg" className="f1" />
        <img src="./kk.jpg" className="f1" />
        <img src="./kkkk.jpg" className="f1" />
        <img src="./mmmm.jpg" className="f1" />
        <img src="./moments.jpg" className="f1" />
        <img src="./moments2.jpg" className="f1" />
        <img src="./moments3.jpg" className="f1" />
        <img src="./nidhi.jpg" className="f1" />
        <img src="./n1.jpg" className="f1" />
        <img src="./ny.jpg" className="f1" />
        <img src="./p.jpg" className="f1" />
        <img src="./bd.jpg" className="f1" />
        <img src="./bd1.jpg" className="f1" />
        <img src="./bd2.jpg" className="f1" />
        <img src="./bd3.jpg" className="f1" />
        <img src="./r.jpg" className="f1" />
        <img src="./r1.jpg" className="f1" />
        <img src="./result.jpg" className="f1" />
        <img src="./sc.jpg" className="f1" />
        <img src="./ummedd.jpg" className="f1" />
        <img src="./room.jpg" className="f1" />
        <img src="./vns.jpg" className="f1" />
        <img src="./vns1.jpg" className="f1" />
        <img src="./vns2.jpg" className="f1" />
        <img src="./vns3.jpg" className="f1" />

      </div>
      <p>
        I dont know what you are thinking right now but I am sure U must be liking this and also thinking about the CSS properties I should use to make it user-friendly but neither i had this much time nor this much css practice so just adjust with that....💝
      </p>
      <p>
        Okay lets Summarize
        <button onClick={handleClick} className="c"> Click </button>
      </p>
    </div>
  );
};

export default Random;
