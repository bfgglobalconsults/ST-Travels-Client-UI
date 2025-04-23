"use client";
import SelectCity from "@/components/common/booking-form/flight-form/select-city";
import DatePickerComponent from "@/components/common/date-picker";
import { TravellerDetails } from "@/constant/constant";
import { cityData } from "@/data/home/flight/flight-data";
import {
  setFlightClass,
  setFromCity,
  setReturnDate,
  setStartDate,
  setToCity,
  setTravelers,
} from "@/redux-toolkit/reducers/flight-data";
import { RootState } from "@/redux-toolkit/store";
import { FC, useRef, useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useSelector, useDispatch } from "react-redux";
import { useForm, ValidationError } from "@formspree/react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

const TravelDetail: FC = () => {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [isVerified, setIsVerified] = useState(false);
  const router = useRouter();

  const dispatch = useDispatch();
  const [travelersNo, setTravelersNo] = useState("");
  const [flightClasses, setFlightClasses] = useState("economy");
  const { travelers, flightClass } = useSelector(
    (state: RootState) => state.booking
  );
  const { fromCity, toCity, startDate, returnDate } = useSelector(
    (state: RootState) => state.flightData
  );

  const handleFromCityChange = (newCity: string) => {
    dispatch(setFromCity(newCity));
  };

  const handleToCityChange = (newCity: string) => {
    dispatch(setToCity(newCity));
  };
  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = new Date(e.target.value);
    dispatch(setStartDate(date));
  };

  const handleReturnDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = new Date(e.target.value);
    dispatch(setReturnDate(date));
  };

  const handleTravelersChange = (newTravelers: number) => {
    dispatch(setTravelers(newTravelers));
  };

  const handleFlightClassChange = (newClass: string) => {
    dispatch(setFlightClass(newClass));
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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [state, handleSubmit] = useForm("mdkndwgr");

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
      router.push("/");
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
    <div className="review_box">
      <div className="title-top">
        <h5>{TravellerDetails}</h5>
      </div>
      <div className="flight_detail">
        <div className="row form_flight">
          <div className="col-md-12">
            <form onSubmit={onSubmit}>
              <h6>Contact Details</h6>
              <div className="row">
                <div className="form-group col-md-6">
                  <label htmlFor="first">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="first"
                    name="firstName"
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="last">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="last"
                    name="lastName"
                  />
                </div>
              </div>

              <div className="row mt-2">
                <div className="form-group col-md-6">
                  <label htmlFor="inputEmail4">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                    name="email"
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="inputnumber">Phone No</label>
                  <input
                    type="number"
                    className="form-control"
                    id="inputnumber"
                    name="phone"
                  />
                </div>
              </div>
              <h6 className="mt-2">Travel Information</h6>
              <div className="row">
                <div className="form-group col-md-6">
                  <label>From</label>
                  <SelectCity
                    value={fromCity}
                    cityData={cityData}
                    selectedCity={fromCity}
                    setSelectedCity={handleFromCityChange}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label>To</label>
                  <SelectCity
                    value={toCity}
                    cityData={cityData}
                    selectedCity={toCity}
                    setSelectedCity={handleToCityChange}
                  />
                </div>
              </div>
              <div className="row mt-2">
                <div className="form-group col-md-6">
                  <label htmlFor="startDate">Start Date</label>
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
                  <label htmlFor="returnDate">Return Date</label>
                  <input
                    type="date"
                    className="form-control"
                    id="returnDate"
                    name="returnDate"
                    value={returnDate ? formatDate(returnDate) : ""}
                    onChange={handleReturnDateChange}
                  />
                </div>
              </div>
              <div className="row mt-2">
                <div className="form-group col-md-6">
                  <label htmlFor="travelers">No. of Travelers</label>
                  <input
                    type="text"
                    className="form-control"
                    id="travelers"
                    name="travelers"
                    value={travelersNo}
                    onChange={(e) => setTravelersNo(e.target.value)}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="flightClass">Flight Class</label>
                  <select
                    id="flightClass"
                    name="flightClass"
                    className="form-control"
                    value={flightClasses}
                    onChange={(e) => setFlightClasses(e.target.value)}
                  >
                    <option value="Economy">Economy</option>
                    <option value="Business">Business</option>
                    <option value="First Class">First Class</option>
                  </select>
                </div>
              </div>
              {/* <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
                ref={recaptchaRef}
                onChange={handleChange}
                onExpired={handleExpired}
              /> */}
              <div className="submit-btn">
                <button
                  type="submit"
                  className="btn btn-lower btn-curvy my-4"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Loading..." : "Submit"}{" "}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelDetail;
