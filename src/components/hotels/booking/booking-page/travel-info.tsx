
"use client"
import { Apply, ContactInfo, EmailAddress, FirstName, LastName, PayNow, SpecialRequest, TravellerInformation } from "@/constant/constant";
import { RootState } from "@/redux-toolkit/store";
import { useRouter } from "next/navigation";
import { FC, useRef, useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm, ValidationError } from "@formspree/react";
import { useSelector } from "react-redux";
import Link from "next/link";
import toast from "react-hot-toast";

const TravelInfo: FC = () => {
    const recaptchaRef = useRef<ReCAPTCHA>(null);
  const { push } = useRouter();
  const { i18LangStatus } = useSelector((state: RootState) => state.language);
  const payBtn = () => {
    push(`${i18LangStatus}/hotel/booking/checkout`);
  };
    const [isVerified, setIsVerified] = useState(false);

const [formData, setFormData] = useState({
  firstName: "",
  lastName: "",
  email: "",
  mobileNo: "",
  destination: "",
  specialRequest: "",
  promoCode: "",
});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [state, handleSubmit] = useForm("xnnavobj");

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true);
    handleSubmit(event).then(() => {
      setIsSubmitting(false);
    });
  };

  async function handleCaptchaSubmission(token: string | null) {
    try {
      if (token) {
        await fetch("/api", {
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
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        mobileNo: "",
        destination: "",
        specialRequest: "",
        promoCode: "",
      });
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
                  value={formData.firstName}
                  onChange={handleInputChange}
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
                  value={formData.lastName}
                  onChange={handleInputChange}
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
              value={formData.email}
              onChange={handleInputChange}
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
              value={formData.mobileNo}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Destination</label>
            <input
              id="destination"
              name="destination"
              type="text"
              className="form-control"
              value={formData.destination}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="specialRequest">{SpecialRequest}</label>
            <textarea
              className="form-control"
              id="specialRequest"
              name="specialRequest"
              rows={3}
              placeholder="e.g., early check-in, airport transfer"
              value={formData.specialRequest}
              onChange={handleInputChange}
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
                value={formData.promoCode}
                onChange={handleInputChange}
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
              disabled={!isVerified}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TravelInfo;
