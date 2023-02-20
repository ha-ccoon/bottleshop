import React from "react";
import "./Categories.css";
import main from "./main/main.png";
import Red1 from "./main/red1.png";
import Red2 from "./main/red2.png";
import Champ1 from "./main/champ1.png";
import White1 from "./main/white1.png";
import White2 from "./main/white2.png";

const Categories = () => {
  return (
    <>
      <div>
        <div className="main_img">
          <img src={main} alt=" " />
        </div>
        <div className="main_container">
          <div>
            <img src={Red1} alt="" />
            <p>BODEGA GARZON 'BALASTO'</p>
            <p>200,000원</p>
          </div>
          <div>
            <img src={Red2} alt="" />
            <p>FRIAS LADY OF DEAD</p>
            <p>119,000원</p>
          </div>
          <div>
            <img src={Champ1} alt="" />
            <p>BANROCK STATION MOSCATO</p>
            <p>13,000원</p>
          </div>
          <div>
            <img src={White1} alt="" />
            <p>DOMAINE MICHELOT MEURSAULT 1ER CHARMES</p>
            <p>290,000원</p>
          </div>
          <div>
            <img src={White2} alt="" />
            <p>ANT MOORE SIGNATURE SERIES SAUVIGNON BLANC</p>
            <p>35,000원</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
