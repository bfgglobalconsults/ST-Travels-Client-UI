"use client";
import QtyBox from "@/components/common/booking-form/flight-form/qty-box";
import Button from "@/components/common/btn";
import DatePickerComponent from "@/components/common/date-picker";
import { Apply, BookThisNow, DeluxeRate, Viewonmap } from "@/constant/constant";
import { mapId } from "@/data/common-data";
import { FC, useState } from "react";
import Link from "next/link";

const BookInfo: FC = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [startDate1, setStartDate1] = useState(new Date());
  const [show, setShow] = useState(false);
  return (
    <div className="single-sidebar">
      <div className="selection-section">
        <div className="overlay-map">
          <img
            src="/assets/images/map-image.svg"
            className="img-fluid"
            alt=""
          />
          <iframe src={mapId} style={{ border: "0" }}></iframe>
          <h6>{Viewonmap}</h6>
        </div>
        <div className="price-part">
          <div className="left-part">
            <a href="#">Basic Rate</a>

            <span>
              <i className="fas fa-check"></i> non refundable
            </span>
          </div>
          <div className="right-part">
            <span>per night</span>

            <h6>$65</h6>
          </div>
        </div>
        <hr/>
        <div className="price-part">
          <div className="left-part">
            <a href="#">Premium Rate</a>

            <span>
              <i className="fas fa-check"></i> non refundable
            </span>
          </div>
          <div className="right-part">
            <span>per night</span>

            <h6>$90</h6>
          </div>
        </div>
        <hr/>
        <div className="price-part">
          <div className="left-part">
            <a href="#">Elite Rate</a>

            <span>
              <i className="fas fa-check"></i> non refundable
            </span>
          </div>
          <div className="right-part">
            <span>per night</span>

            <h6>$115</h6>
          </div>
        </div>
        <div className="book-btn-section single-page-classic">
          <div className="form-control">
            <DatePickerComponent start={startDate} setStart={setStartDate} />
          </div>
          <div className="form-control">
            <DatePickerComponent start={startDate1} setStart={setStartDate1} />
          </div>
          <div className="rooms-section">
            <input
              type="text"
              className="form-control open-select"
              placeholder="rooms & guests"
              onClick={() => setShow(!show)}
            />
            <div className={`selector-box ${show ? "show" : ""}`}>
              <QtyBox />
              <div className="bottom-part">
                <a href="#" className="add-room">
                  add room +
                </a>

                <button onClick={() => setShow(false)} className="btn">
                  {Apply}
                </button>
              </div>
            </div>
          </div>
          <div className="selector">
            <select>
              <option value="" disabled>
                Room Type
              </option>
              <option value="saab">Basic Rate</option>
              <option value="audi">Premium Rate</option>
              <option value="opel">Elite Rate</option>
            </select>
          </div>
          <Link href="/hotel/booking/booking-page">
            <button className="btn btn-rounded btn-sm color1">
              {BookThisNow}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookInfo;
