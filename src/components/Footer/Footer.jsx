import React from "react";
import './footer.css'

function Footer() {
  return (
    <>
      <div className="footer w-100 d-flex justify-content-center mt-5">
        <div className="footer-body d-flex full-width p-3">
          <ul className="lists p-2">
            <div className="mb-3 list-heading fw-bold">Support</div>
            <li className="list-item">Coronavirus (COVID-19) FAQs</li>
            <li className="list-item">Manage your trips</li>
            <li className="list-item">Contact Customer Service</li>
            <li className="list-item">Safety Resource Center</li>
          </ul>
          <ul className="lists p-2">
            <div className="mb-3 list-heading fw-bold">Discover</div>
            <li className="list-item">Genius loyalty program</li>
            <li className="list-item">Seasonal and holiday deals</li>
            <li className="list-item">Travel articles</li>
            <li className="list-item">Booking.com for Business</li>
            <li className="list-item">Traveller Review Awards</li>
            <li className="list-item">Car Rental</li>
            <li className="list-item">Flight finder</li>
            <li className="list-item">Restaurant reservations</li>
          </ul>
          <ul className="lists p-2">
            <div className="mb-3 list-heading fw-bold">Terms and settings</div>
            <li className="list-item">Privacy & cookies</li>
            <li className="list-item">Terms & conditions</li>
            <li className="list-item">Grievance officer</li>
            <li className="list-item">Modern Slavery Statement</li>
            <li className="list-item">Human Rights Statement</li>
          </ul>
          <ul className="lists p-2">
            <div className="mb-3 list-heading fw-bold">Partners</div>
            <li className="list-item">Extranet login</li>
            <li className="list-item">Partner help</li>
            <li className="list-item">List your property</li>
            <li className="list-item">Become an affiliate</li>
          </ul>
          <ul className="lists p-2">
            <div className="mb-3 list-heading fw-bold">About</div>
            <li className="list-item">About Booking.com</li>
            <li className="list-item">How We Work</li>
            <li className="list-item">Sustainability</li>
            <li className="list-item">Press center</li>
            <li className="list-item">Careers</li>
            <li className="list-item">Corporate contact</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
