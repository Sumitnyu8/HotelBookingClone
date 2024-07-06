import {
  faBed,
  faCalendarDays,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./header.css";
import { useState } from "react";
import { DateRange } from "react-date-range";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import {format} from 'date-fns'
import Button from "../Button/Button";

function Header({type}) {
  const [openDate, setOpenDate] = useState(false)
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOption, setOpenOption] = useState(false)
  const [option, setOption] = useState({
    adult: 1,
    children: 0,
    room: 1,
  })
  const handleoption = (name , operation) => {
    setOption(() => {
      return {
        ...option, 
        [name]: operation === "i" ? option[name] +1: option[name] -1
        }
        });
  }
  return (
    <>
      <div className="header">
        <div className="header-container">
          <div className="header-list">
            <div className="header-item active">
              <FontAwesomeIcon icon={faBed} />
              <span>Stays</span>
            </div>
            <div className="header-item">
              <FontAwesomeIcon icon={faBed} />
              <span>Flights</span>
            </div>
            <div className="header-item">
              <FontAwesomeIcon icon={faBed} />
              <span>Car rentals</span>
            </div>
            <div className="header-item">
              <FontAwesomeIcon icon={faBed} />
              <span>Attractions</span>
            </div>
            <div className="header-item">
              <FontAwesomeIcon icon={faBed} />
              <span>Air taxis</span>
            </div>
          </div>
          {type !== "list" && <><div className="header-content txt-white">
            <h1>Find your next stay</h1>
            <p>Search deals on hotels, homes, and much more...</p>
            {/* <Button content='Sign in / Register'/> */}
          </div>
          <div className="header-search">
            <div className="header-search-container">
              <div className="header-search-item ">
                <FontAwesomeIcon icon={faBed} className="search-logo" />
                <input type="text" placeholder="Where are you going?" />
              </div>
              <div className="header-search-item">
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  className="search-logo"
                />
                <span onClick={()=>setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                {openDate && <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={true}
                  ranges={date}
                  className="date"
                />}
              </div>
              <div className="header-search-item b-none ">
                <FontAwesomeIcon icon={faUser} className="search-logo" />
                <span onClick={() => setOpenOption(!openOption)}>{`${option.adult} adults ${option.children} childrens ${option.room} room`}</span>
                {openOption && <div className="options">
                  <div className="optionItem">
                    <div className="optionText">Adult</div>
                    <div className="optionCounter">
                      <button onClick={()=>handleoption('adult', 'd')} disabled={option.adult <= 1} className="counter-disabled">-</button>
                      <span>{option.adult}</span>
                      <button onClick={()=>handleoption('adult', 'i')}>+</button>
                    </div>
                  </div>
                  <div className="optionItem">
                    <div className="optionText">Children</div>
                    <div className="optionCounter">
                      <button onClick={()=>handleoption('children', 'd')} disabled={option.children <= 0} className="counter-disabled">-</button>
                      <span>{option.children}</span>
                      <button onClick={()=>handleoption('children', 'i')}>+</button>
                    </div>
                  </div>
                  <div className="optionItem">
                    <div className="optionText">Room</div>
                    <div className="optionCounter">
                      <button onClick={()=>handleoption('room', 'd')} disabled={option.room <= 1} className="counter-disabled">-</button>
                      <span>{option.room}</span>
                      <button onClick={()=>handleoption('room', 'i')}>+</button>
                    </div>
                  </div>
                </div>}
              </div>
              <div className="header-search-item search-btn b-none flex-shrink-2 pe-3">
                <Button content="Search"/>
              </div>
            </div>
          </div></>}
        </div>
      </div>
    </>
  );
}

export default Header;
