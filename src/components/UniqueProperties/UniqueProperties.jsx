import React from 'react'
import "./uniqueproperties.css";
import Card from "react-bootstrap/Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function UniqueProperties() {

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
            "https://cf2.bstatic.com/xdata/images/hotel/square600/154543781.webp?k=847c6d1ffe92003d2d7c9cf7043c6acda1c550e6f0c7c981370a6303f12a10cf&o=",
          hotelName: "Sino",
          hotelPlace: "Australia, Gembrook",
          rating: "8.9 Excellent",
          price: 1,
        },
        {
          image:
            "https://cf2.bstatic.com/xdata/images/hotel/square600/131500906.webp?k=b6f638eadb7c9632498a9e9a15440987a22489684b8825b0cb235bd3c79f07de&o=",
          hotelName: "Sitare ",
          hotelPlace: "Poland, Kiszkowo",
          rating: "8.9 Excellent",
          price: 10,
        },
        {
          image:
            "https://cf2.bstatic.com/xdata/images/hotel/square600/131056675.webp?k=b270059e6cb5f68d7d5e114a7db1dba9c0664f79ce1b6962912950ed002a5dc8&o=",
          hotelName: "Neu man",
          hotelPlace: "Canada, Stanstead-Est",
          rating: "8.9 Excellent",
          price: 100,
        },
        {
          image:
            "https://cf2.bstatic.com/xdata/images/hotel/square600/126764303.webp?k=46a8a949ef420510834df06d0d88e293fbaae80cd1e17883cb78c1bba3eb0366&o=",
          hotelName: "Apex club",
          hotelPlace: "Italy, Santorso",
          rating: "8.9 Excellent",
          price: 1000,
        },
        {
          image:
            "https://cf2.bstatic.com/xdata/images/hotel/square600/106548982.webp?k=6464bb1807bbc9f4f9c408328c8df98bdfb5a885f7fc51712fcefc417b8472f7&o=",
          hotelName: "Full flex house",
          hotelPlace: "Canada, Saint-Gabriel-de-Valcartier ",
          rating: "8.9 Excellent",
          price: 1000,
        },
        {
          image:
            "https://cf2.bstatic.com/xdata/images/hotel/square600/479171979.webp?k=6aa0b340dde4ed4bca1529589fcaf49f377803cd81205541c52a921837aa7bc4&o=",
          hotelName: "Carinya Park",
          hotelPlace: "Spain, Yaiza",
          rating: "8.9 Excellent",
          price: 1000,
        },
      ];

  return (
    <div className="guestsLove">
      <div className="guestsLoveContainer full-width">
        <div className="guestsLoveHeader">Unique Properties</div>
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
  )
}

export default UniqueProperties