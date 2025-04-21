"use client";
import QtyBox from "@/components/common/booking-form/flight-form/qty-box";
import Button from "@/components/common/btn";
import DatePickerComponent from "@/components/common/date-picker";
import { Apply, BookThisNow, DeluxeRate, Viewonmap } from "@/constant/constant";
import { mapId } from "@/data/common-data";
import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { setHotelData } from "@/redux-toolkit/reducers/hotel-data"; 
import Link from "next/link";

const HotelBookInfo: FC = () => {
    const router = useRouter();
    const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(new Date());
  const [startDate1, setStartDate1] = useState(new Date());
 const [price, setPrice] = useState(65);
 const [guests, setGuests] = useState(1);
  const [show, setShow] = useState(false);

   const handleSubmit = () => {
      const hotelData = {
        price,
        guests,
        startDate: startDate.toISOString(),
        returnDate: startDate1.toISOString(),
      };
      dispatch(setHotelData(hotelData));
          router.push("/en/shortlet/booking/booking-page");

      console.log("hotel is submitted", hotelData);
    };
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

            <h6>$80</h6>
          </div>
        </div>
        <hr />
        <div className="price-part">
          <div className="left-part">
            <a href="#">Premium Rate</a>

            <span>
              <i className="fas fa-check"></i> non refundable
            </span>
          </div>
          <div className="right-part">
            <span>per night</span>

            <h6>$105</h6>
          </div>
        </div>
        <hr />
        <div className="price-part">
          <div className="left-part">
            <a href="#">Elite Rate</a>

            <span>
              <i className="fas fa-check"></i> non refundable
            </span>
          </div>
          <div className="right-part">
            <span>per night</span>

            <h6>$130</h6>
          </div>
        </div>
        <form
          onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            handleSubmit();
          }}
        >
          <div className="book-btn-section single-page-classic">
            <div className="form-control">
              <DatePickerComponent start={startDate} setStart={setStartDate} />
            </div>
            <div className="form-control">
              <DatePickerComponent
                start={startDate1}
                setStart={setStartDate1}
              />
            </div>
            <div className="rooms-section">
              <input
                type="number"
                value={guests}
                className="form-control open-select"
                placeholder="No. of guests"
                onClick={(e) =>
                  setGuests(Number((e.target as HTMLInputElement).value))
                }
              />
            </div>
            <div className="selector">
              <select
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
              >
                <option value="" disabled>
                  Room Type
                </option>
                <option value={65}>Basic Rate</option>
                <option value={90}>Premium Rate</option>
                <option value={115}>Elite Rate</option>
              </select>
            </div>
            <button
              className="btn btn-rounded btn-sm color1"
              onClick={handleSubmit}
              type="submit"
            >
              {BookThisNow}
            </button>
            {/* <Link href="/hotel/booking/booking-page">
            <button
              className="btn btn-rounded btn-sm color1"
              onClick={handleSubmit}
              type="submit"
            >
              {BookThisNow}
            </button>
          </Link> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default HotelBookInfo;
