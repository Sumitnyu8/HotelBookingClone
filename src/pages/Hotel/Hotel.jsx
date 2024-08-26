import React from "react";
import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/Header/Header";
import hotel1 from "../../assets/hotel1.jpg"
import hotel2 from "../../assets/hotel2.jpg"
import hotel3 from "../../assets/hotel3.jpg"
import hotel4 from "../../assets/hotel4.jpg"
import hotel5 from "../../assets/hotel5.jpg"
import hotel6 from "../../assets/hotel6.jpg"
import Footer from "../../components/Footer/Footer";

function Hotel() {
  return (
    <>
      <Navbar />
      <Header type="list" />
      <div className="hotel_container w-100 d-flex justify-content-center mt-5">
        <div className="hotel full-width">
          <div className="hotel-header">
            <div className="hotel_title d-flex justify-content-between">
              <h3 className="fw-bold">Hotel</h3>
              <button className="book-btn px-5">Book now</button>
            </div>
            <div className="hotel_location d-flex align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-geo-alt"
                viewBox="0 0 16 16"
              >
                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
              </svg>
              <p className="h-location-name ms-2 mb-2">Elton St 125 New york</p>
            </div>
            <div className="hotel-distance">
              <p className="h-distance mb-2 text-primary">
                Excellent location - 650m from center
              </p>
            </div>
            <div className="hotel-extra-detail">
              <p className="h-extra-detail text-success">
                Book a stay over $114 at this property and get a free airport
                taxi
              </p>
            </div>
          </div>
          <div className="hotel-images w-100 d-flex justify-content-center">
            <div className="hotel-image-content full-width d-flex flex-wrap">
              <div className="image-item col-4">
                <img src={hotel1} alt="hotel1" className="w-100 p-1"/>
              </div>
              <div className="image-item col-4">
                <img src={hotel2} alt="hotel2" className="w-100 p-1"/>
              </div>
              <div className="image-item col-4">
                <img src={hotel3} alt="hotel3" className="w-100 p-1"/>
              </div>
              <div className="image-item col-4">
                <img src={hotel4} alt="hotel4" className="w-100 p-1"/>
              </div>
              <div className="image-item col-4">
                <img src={hotel5} alt="hotel5" className="w-100 p-1"/>
              </div>
              <div className="image-item col-4">
                <img src={hotel6} alt="hotel6" className="w-100 p-1"/>
              </div>
            </div>
          </div>
          <div className="hotel-content col-12 d-flex mt-2">
            <div className="hotel-content-left col-9 pe-4">
              <div className="hotel-content-left-title">
                <h2 className="h-content-left-title">Stay in the heart of New York</h2>
                <div className="h-content-left-description">
                  <p className="h-content-left-description-text">
                  Located a 5-minute walk from St. Florian's Gate in Krakow, Tower Street Apartments has accommodations with air conditioning and free WiFi. The units come with hardwood floors and feature a fully equipped kitchenette with a microwave, a flat-screen TV, and a private bathroom with shower and a hairdryer. A fridge is also offered, as well as an electric tea pot and a coffee machine. Popular points of interest near the apartment include Cloth Hall, Main Market Square and Town Hall Tower. The nearest airport is John Paul II International Kraków–Balice, 16.1 km from Tower Street Apartments, and the property offers a paid airport shuttle service.
                  </p>
                </div>
              </div>
            </div>
            <div className="hotel-content-right col-3 p-3">
              <div className="hotel-content-right-title">
                <h6 className="h-content-right-title fw-bold">Perfect for a 1-night stay!</h6>
                <div className="h-content-right-description">
                  <p className="h-content-right-description-text">Located in the real heart of Krakow, this property has an excellent location score of 9.8!</p>
                </div>
                <p className="price fw-bold">$100</p>
                <button className="book-btn px-3">Book Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Hotel;
