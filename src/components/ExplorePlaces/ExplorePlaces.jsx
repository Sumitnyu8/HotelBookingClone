import React from "react";
import "./exploreplaces.css";
import Card from "react-bootstrap/Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import 'bootstrap/dist/css/bootstrap.min.css';

function ExplorePlaces() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
  };

  const data = [
    {
      image:
        "https://q-xx.bstatic.com/xdata/images/city/170x136/684639.jpg?k=726bd03cf3c5281ee8dd476a879a5421ca6bd30c1a6086bc53bf625145e47176&o=",
      cityName: "Vrindavan",
      distance: "20km from noida",
    },
    {
      image:
        "https://r-xx.bstatic.com/xdata/images/city/170x136/684940.jpg?k=f8eb21b5c72289407585cef7ff7cfc99798ac9238398d7b27c6929ad6c54f78a&o=",
      cityName: "Varansi",
      distance: "20km from noida",
    },
    {
      image:
        "https://q-xx.bstatic.com/xdata/images/city/170x136/684683.jpg?k=698b609dd05f38097716054efd8aa7f0af75bee3a241e411e72d8710cc80e020&o=",
      cityName: "Lucknow",
      distance: "20km from noida",
    },
    {
      image:
        "https://q-xx.bstatic.com/xdata/images/region/170x136/49646.jpg?k=b7f38878b9164ee38e0b99c4d4646dbea76b7bf4add8464b1aa75e4c9d0efc6e&o=",
      cityName: "Goa",
      distance: "20km from noida",
    },
    {
      image:
        "https://q-xx.bstatic.com/xdata/images/city/170x136/684683.jpg?k=698b609dd05f38097716054efd8aa7f0af75bee3a241e411e72d8710cc80e020&o=",
      cityName: "Agra",
      distance: "20km from noida",
    },
    {
      image:
        "https://q-xx.bstatic.com/xdata/images/city/170x136/971346.jpg?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o=",
      cityName: "Lahore",
      distance: "20km from noida",
    },
    {
      image:
        "https://q-xx.bstatic.com/xdata/images/city/170x136/917307.jpg?k=beb06c8fe17023fae447ec403f57d21f0f4b18bd1ef1bbc2956b90d6ed404ac9&o=",
      cityName: "Indore",
      distance: "20km from noida",
    },
    {
      image:
        "https://r-xx.bstatic.com/xdata/images/city/170x136/684938.jpg?k=9d07ff707ce59768769b5e9a5381a4c705d921209dafd8fd0e2f1a6acdf0c68a&o=",
      cityName: "Udaipur",
      distance: "20km from noida",
    },
    {
      image:
        "https://q-xx.bstatic.com/xdata/images/region/170x136/68606.jpg?k=4b43b9128b79beaab4ca2e8c038ddf5709b0b90608afbca222cfbe08fabda7d2&o=",
      cityName: "Goa",
      distance: "20km from noida",
    },
    {
      image:
        "https://q-xx.bstatic.com/xdata/images/city/170x136/684765.jpg?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o=",
      cityName: "New delhi",
      distance: "20km from noida",
    },
  ];
  return (
    <div className="guestsLove">
      <div className="guestsLoveContainer full-width">
        <div className="guestsLoveHeader">Explore India</div>
        <Slider {...settings}>
          {data.map((item, index) => (
            <div key={index} className="guestsLoveBodyItem randi">
              <Card style={{ width: "11rem" }}>
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                  <Card.Title>{item.cityName}</Card.Title>
                  <Card.Text className="light-color">
                    {item.distance}
                  </Card.Text>
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

export default ExplorePlaces;
