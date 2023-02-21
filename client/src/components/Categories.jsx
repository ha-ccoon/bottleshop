import React from "react";
import "./Categories.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import main from "./main/main.png";
import Red1 from "./main/red1.png";
import White2 from "./main/white2.png";
import Champ1 from "./main/champ1.png";
import Cheeses1 from "./main/Parmesan.png";
import Cheeses2 from "./main/Ricotta1.png";
import Main_about1 from "./main/main_about_01.png";
import Main_about2 from "./main/main_about_02.png";
import Main_about3 from "./main/main_about_03.png";

const Categories = () => {
  return (
    <>
      <div>
        <div className="main_img">
          <img src={main} alt="mainImage" />
        </div>
        <div className="BestItem">
          <p className="best_text">Best Item</p>
          <div className="best_image">
            <div className="Red1">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={Red1} />
                <Card.Body>
                  <Card.Title>BODEGA GARZON 'BALASTO'</Card.Title>
                  <Card.Text>200,000원</Card.Text>
                  <Button>장바구니에 담기</Button>
                  <Button>구매하기</Button>
                </Card.Body>
              </Card>
            </div>
            <div className="White2">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={White2} />
                <Card.Body>
                  <Card.Title>FRIAS LADY OF DEAD</Card.Title>
                  <Card.Text>35,000원</Card.Text>
                  <Button>장바구니에 담기</Button>
                  <Button>구매하기</Button>
                </Card.Body>
              </Card>
            </div>
            <div className="Champ1">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={Champ1} />
                <Card.Body>
                  <Card.Title>BANROCK STATION MOSCATO</Card.Title>
                  <Card.Text>13,000원</Card.Text>
                  <Button>장바구니에 담기</Button>
                  <Button>구매하기</Button>
                </Card.Body>
              </Card>
            </div>
            <div className="Cheeses1">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={Cheeses1} />
                <Card.Body>
                  <Card.Title>Parmesan Cheeses</Card.Title>
                  <Card.Text>58,000원</Card.Text>
                  <Button>장바구니에 담기</Button>
                  <Button>구매하기</Button>
                </Card.Body>
              </Card>
            </div>
            <div className="Cheeses2">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={Cheeses2} />
                <Card.Body>
                  <Card.Title>Ricotta Cheeses</Card.Title>
                  <Card.Text>18,000원</Card.Text>
                  <Button>장바구니에 담기</Button>
                  <Button>구매하기</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
        <div className="Main_about">
          <div className="about_1">
            <div>
              <img src={Main_about1} alt="about1" />
            </div>
            <div>
              <p>
                저희 Bottle Shop은 세계의 다양한 와인들을 <br />
                준비하여 여러분께 판매하고 있습니다.
              </p>
            </div>
          </div>
          <hr />
          <div className="about_2">
            <div>
              <p>
                저희 Bottle Shop은 합리적인 가격으로 <br />
                여러분께서 더 많은 와인을 접하시도록 <br />
                제공하고 있습니다.
              </p>
            </div>
            <div>
              <img src={Main_about2} alt="about2" />
            </div>
          </div>
          <hr />
          <div className="about_3">
            <div>
              <img src={Main_about3} alt="about3" />
            </div>
            <div>
              <p>
                당일주문 당일출고를 원칙으로 <br />
                빠른시간안에 상품을 받아보실 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
