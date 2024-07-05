import React from "react";
import "./guestlove.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function GuestsLove() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
  };

  const data = [
    {
      image:
        "https://cf2.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o=",
      hotelName: "Aparthotel Stare Miasto",
      hotelPlace: "Old Town, Poland, Kraków",
      rating: "8.9 Excellent",
      price: 1,
    },
    {
      image:
        "https://cf2.bstatic.com/xdata/images/hotel/square600/29466558.webp?k=7f9cf4736f69b30c20fa7a751bb8711fa195bc9ff6092d5412d52daf6cada17f&o=",
      hotelName: "Aparthotel Stare Miasto",
      hotelPlace: "Old Town, Poland, Kraków",
      rating: "8.9 Excellent",
      price: 10,
    },
    {
      image:
        "https://cf2.bstatic.com/xdata/images/hotel/square600/352170812.webp?k=4ff5e29f3ad72c2c9f7170f60a043f01a158f26b38c55e9676439c18f3804179&o=",
      hotelName: "Aparthotel Stare Miasto",
      hotelPlace: "Old Town, Poland, Kraków",
      rating: "8.9 Excellent",
      price: 100,
    },
    {
      image:
        "https://cf2.bstatic.com/xdata/images/hotel/square600/564164054.webp?k=4af0c1162a89e574f3e72972e984c3919aa6689556d25be78861a947237df255&o=",
      hotelName: "Aparthotel Stare Miasto",
      hotelPlace: "Old Town, Poland, Kraków",
      rating: "8.9 Excellent",
      price: 1000,
    },
    {
      image:
        "https://cf2.bstatic.com/xdata/images/hotel/square600/87429281.webp?k=6ba4f0190557519bcfef96a626037f73bef992019e568abde2a3d5b892bf7577&o=",
      hotelName: "Aparthotel Stare Miasto",
      hotelPlace: "Old Town, Poland, Kraków",
      rating: "8.9 Excellent",
      price: 1000,
    },
    {
      image:
        "https://cf2.bstatic.com/xdata/images/hotel/square600/95058973.webp?k=c4092495705eab3fad626e8e1a43b1daf7c623e4ea41daf26a201b4417a71709&o=",
      hotelName: "Aparthotel Stare Miasto",
      hotelPlace: "Old Town, Poland, Kraków",
      rating: "8.9 Excellent",
      price: 1000,
    },
  ];

  return (
    <div className="guestsLove">
      <div className="guestsLoveContainer full-width">
        <div className="guestsLoveHeader">Guests Love</div>
        <Slider {...settings}>
          {data.map((item, index) => (
            <div key={index} className="guestsLoveBodyItem">
              <Card style={{ width: "14rem" }}>
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                  <Card.Title>{item.hotelName}</Card.Title>
                  <Card.Text className="light-color">{item.hotelPlace}</Card.Text>
                  <Card.Text className="light-color">({item.rating}) </Card.Text>
                  <Card.Text className="fw-bold"> Price - ${item.price} </Card.Text>
                  {/* <Button variant="primary">view</Button> */}
                </Card.Body>
              </Card>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default GuestsLove;
