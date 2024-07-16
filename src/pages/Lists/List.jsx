import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/Header/Header";
import "./list.css";

function List() {
  const data = [
    {
      img: "https://cf2.bstatic.com/xdata/images/hotel/square240/383008510.webp?k=8667099fd1bc27ab7f304f04ef668bd3f985e67988a0c6c2fadfcb28c88ffa82&o=",
      hotelname: "Hotel Kings Heritage Surat",
      price: "3,196",
      detail: " Deluxe Room 1 full bed",
      distance: "5.1 km from downtown",
      review: "7.5",
      persondetail: "1 night 1 adult",
    },
    {
      img: "https://cf2.bstatic.com/xdata/images/hotel/square240/383008510.webp?k=8667099fd1bc27ab7f304f04ef668bd3f985e67988a0c6c2fadfcb28c88ffa82&o=",
      hotelname: "Hotel Kings Heritage Surat",
      price: "3,196",
      detail: " Deluxe Room 1 full bed",
      distance: "5.1 km from downtown",
      review: "7.5",
      persondetail: "1 night 1 adult",
    },
    {
      img: "https://cf2.bstatic.com/xdata/images/hotel/square240/383008510.webp?k=8667099fd1bc27ab7f304f04ef668bd3f985e67988a0c6c2fadfcb28c88ffa82&o=",
      hotelname: "Hotel Kings Heritage Surat",
      price: "3,196",
      detail: " Deluxe Room 1 full bed",
      distance: "5.1 km from downtown",
      review: "7.5",
      persondetail: "1 night 1 adult",
    },
  ];
  return (
    <>
      <Navbar />
      <Header type="list" />
      <div className="container d-flex full-width mt-5">
        <div className="filter col-3 border me-2">
          <div className="filter__item p-3 border-bottom">
            <div className="filter_heading d-flex justify-content-between align-items-center">
              <h3 className="light-color fw-bold">Filter</h3>
              <button type="reset" className="clear_filter rounded grey border">
                Clear
              </button>
            </div>
          </div>
          <div className="filter__item star_rating p-2">
            <form action="#">
              <div className="filter_heading light-color fw-bold h5">
                Star ratings
              </div>
              <div className="d-flex flex-column">
                <div className="d-flex align-items-center form_item">
                  <input
                    type="checkbox"
                    text="hii"
                    name="5star"
                    id="5star"
                    className="me-2"
                  />
                  <label htmlFor="5star">5 Star</label>
                </div>
                <div className="d-flex align-items-center form_item">
                <input
                  type="checkbox"
                  text="hii"
                  name="4star"
                  id="4star"
                  className="me-2"
                />
                <label htmlFor="4star">4 Star</label>
                </div>
                <div className="d-flex align-items-center form_item">
                <input
                  type="checkbox"
                  text="hii"
                  name="3star"
                  id="3star"
                  className="me-2"
                />
                <label htmlFor="3star">3 Star</label>
                </div>
              </div>
            </form>
          </div>
          <div className="filter__item property_type p-2">
            <form action="#">
              <div className="filter_heading light-color fw-bold h5">
                Property types
              </div>
              <div className="d-flex flex-column">
                <div className="d-flex align-items-center form_item">
                  <input
                    type="checkbox"
                    text="hii"
                    name="hotel"
                    id="hotel"
                    className="me-2"
                  />
                  <label htmlFor="hotel">Hotel</label>
                </div>
                <div className="d-flex align-items-center form_item">
                <input
                  type="checkbox"
                  text="hii"
                  name="apartment"
                  id="apartment"
                  className="me-2"
                />
                <label htmlFor="apartment">Apartment</label>
                </div>
                <div className="d-flex align-items-center form_item">
                <input
                  type="checkbox"
                  text="hii"
                  name="villa"
                  id="villa"
                  className="me-2"
                />
                <label htmlFor="villa">Villa</label>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="list col-9 rounded-2">
          {data.map((item, index) => (
            <div className="list__item d-flex mb-4 p-3" key={index}>
              <div className="list__item__img me-4">
                <img src={item.img} alt="hotelimg" className="rounded-2" />
              </div>
              <div className="list__item__detail col-7">
                <div className="d-flex justify-content-between align-items-center col-12">
                  <div className="list__item__detail__hotelname h3">
                    {item.hotelname}
                  </div>
                  <span className="list__item__detail__review p-1 rounded-1">
                    {item.review}
                  </span>
                </div>
                <div className="list__item__detail__distance font-small">
                  {item.distance}
                </div>
                <div className="list__item__detail__detail font-small mt-1">
                  {item.detail}
                </div>
                <div className="list__item__detail__persondetail font-small mt-1">
                  {item.persondetail}
                </div>
                <div className="d-flex flex-column align-items-end justify-content-start col-12">
                  <div className="list__item__detail__price">
                    $ {item.price}
                  </div>
                  <div className="btn btn-primary col-4">See availability</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default List;
