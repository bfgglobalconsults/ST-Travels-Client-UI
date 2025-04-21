"use client";
import {
  Apply,
  ContactInfo,
  EmailAddress,
  FirstName,
  LastName,
  PayNow,
  SpecialRequest,
  TravellerInformation,
} from "@/constant/constant";
import { RootState } from "@/redux-toolkit/store";
import {
  setRate,
  setGuests,
  setPrice,
  setStartDate,
  setReturnDate,
} from "@/redux-toolkit/reducers/hotel-data";
import { useRouter } from "next/navigation";
import { FC, useRef, useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm, ValidationError } from "@formspree/react";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import { toast } from "react-hot-toast";
import PayPalCheckout from "@/components/paypal/PayPalCheckout";

interface HotelInfoProps {
  amount?: number;
}

const HotelInfo: FC<HotelInfoProps> = ({ amount = 0 }) => {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const router = useRouter();
  const dispatch = useDispatch();
  const { price, rate, guests, startDate, returnDate } = useSelector(
    (state: RootState) => state.hotelData
  );

  const handlePrice = (price: Number) => {
    dispatch(setPrice(price));
  };

  const handleRate = (rate: string) => {
    dispatch(setRate(rate));
  };
  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = new Date(e.target.value);
    dispatch(setStartDate(date));
  };

  const handleReturnDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = new Date(e.target.value);
    dispatch(setReturnDate(date));
  };

  const handleGuests = (guest: Number) => {
    dispatch(setGuests(guest));
  };

  const formatDate = (date: Date | string) => {
    if (date instanceof Date) {
      return date.toISOString().split("T")[0];
    } else if (typeof date === "string") {
      const parsedDate = new Date(date);
      return parsedDate.toISOString().split("T")[0];
    }
    return "";
  };

  //   const { i18LangStatus } = useSelector((state: RootState) => state.language);
  //   const payBtn = () => {
  //     push(`${i18LangStatus}/hotel/booking/checkout`);
  //   };
  const [amounts, setAmounts] = useState(0);
  const [isVerified, setIsVerified] = useState(false);
  const [showPayPal, setShowPayPal] = useState(false);

  // const [formData, setFormData] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   mobileNo: "",
  //   destination: "",
  //   specialRequest: "",
  //   promoCode: "",
  // });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [state, handleSubmit] = useForm("mjkwbran");

  // const handleInputChange = (
  //   event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   const { name, value } = event.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true);
    handleSubmit(event).then(() => {
      setIsSubmitting(false);
    });
  };

  async function handleCaptchaSubmission(token: string | null) {
    try {
      if (token) {
        await fetch("/api/recaptcha", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token }),
        });
        setIsVerified(true);
      }
    } catch (e) {
      setIsVerified(false);
    }
  }

  const handleChange = (token: string | null) => {
    handleCaptchaSubmission(token);
  };

  function handleExpired() {
    setIsVerified(false);
  }

  useEffect(() => {
    if (state.succeeded && !isSubmitting) {
      toast.success("Form Submitted Successfully", {
        duration: 7000,
        position: "top-right",
      });
      // setFormData({
      //   firstName: "",
      //   lastName: "",
      //   email: "",
      //   mobileNo: "",
      //   destination: "",
      //   specialRequest: "",
      //   promoCode: "",
      // });
      setShowPayPal(true);
    } else if (state.errors && !isSubmitting) {
      const errorMessage = Array.isArray(state.errors)
        ? state.errors.map((error) => error.message).join(", ")
        : "There was an error submitting the form. Please try again.";

      toast.error(errorMessage, {
        duration: 7000,
        position: "top-right",
      });
    }
  }, [state.succeeded, state.errors, isSubmitting]);
  return (
    <div className="col-lg-7">
      {!showPayPal ? (
        <div className="guest-detail">
          <h2>{TravellerInformation}</h2>
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <div className="row">
                <div className="col first-name">
                  <label>{FirstName}</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="form-control"
                    placeholder="First name"
                    required
                  />
                </div>
                <div className="col">
                  <label>{LastName}</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="form-control"
                    placeholder="Last name"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label>{EmailAddress}</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                placeholder="Enter email"
                required
              />
              <small id="emailHelp" className="form-text text-muted">
                Booking confirmation will be sent to this email ID.
              </small>
            </div>
            <div className="form-group">
              <label>{ContactInfo}</label>
              <input
                id="mobileNo"
                name="mobileNo"
                type="tel"
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="price">Price Range</label>
              <select
                id="price"
                name="price"
                className="form-control"
                value={price}
                onChange={(e) => handlePrice(Number(e.target.value))}
              >
                <option value={75}>Basic Rate ($75)</option>
                <option value={100}>Premium Rate ($100)</option>
                <option value={125}>Elite Rate ($125)</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="guests">Number of Guests</label>
              <input
                type="number"
                id="guests"
                name="guests"
                className="form-control"
                value={guests}
                onChange={(e) => handleGuests(Number(e.target.value))}
                min="1"
                max="10"
                placeholder="Enter number of guests"
              />
            </div>
            <div className="row mt-2">
              <div className="form-group col-md-6">
                <label htmlFor="startDate">Check-In Date</label>
                <input
                  type="date"
                  className="form-control"
                  id="startDate"
                  name="startDate"
                  value={startDate ? formatDate(startDate) : ""}
                  onChange={handleStartDateChange}
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="returnDate">Check-Out Date</label>
                <input
                  type="date"
                  className="form-control"
                  id="returnDate"
                  name="returnDate"
                  value={returnDate ? formatDate(returnDate) : ""}
                  onChange={handleReturnDateChange}
                />
              </div>
                <div className="form-group col-12 mt-3">
                <label htmlFor="total">Total Amount</label>
                <input
                  type="text"
                  className="form-control"
                  id="total"
                  name="total"
                  value={
                  startDate && returnDate
                    ? `$${(
                      Math.max(
                      1,
                      Math.ceil(
                        (new Date(returnDate).getTime() -
                        new Date(startDate).getTime()) /
                        (1000 * 60 * 60 * 24)
                      )
                      ) * Number(price)
                    ).toFixed(2)}`
                    : "$0.00"
                  }
                  onChange={(e) => {
                  const calculatedAmount =
                    startDate && returnDate
                    ? Math.max(
                      1,
                      Math.ceil(
                        (new Date(returnDate).getTime() -
                        new Date(startDate).getTime()) /
                        (1000 * 60 * 60 * 24)
                      )
                      ) * Number(price)
                    : 0;
                  setAmounts(calculatedAmount);
                  }}
                  readOnly
                />
                </div>
            </div>
            <div className="form-group">
              <label htmlFor="specialRequest">{SpecialRequest}</label>
              <textarea
                className="form-control"
                id="specialRequest"
                name="specialRequest"
                rows={3}
                placeholder="e.g. gym instructor"
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="promoCode">Have a coupon code?</label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  name="promoCode"
                  placeholder="Promo Code"
                />
                <div className="input-group-prepend">
                  <span className="input-group-text">{Apply}</span>
                </div>
              </div>
            </div>
            <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
              ref={recaptchaRef}
              onChange={handleChange}
              onExpired={handleExpired}
            />
            <div className="submit-btn">
              <button
                type="submit"
                className="btn btn-lower btn-curvy my-4"
                disabled={!isVerified || isSubmitting}
              >
                {isSubmitting ? "Loading..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      ) : (
        <PayPalCheckout baseAmount={amounts} />
      )}
    </div>
  );
};

export default HotelInfo;
