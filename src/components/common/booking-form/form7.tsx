"use client";
import React, { useState } from "react";
import { FormEvent } from "react";
import { ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { EmailAddress, FullName, Password } from "@/constant/constant";
import Button from "../btn";
import Link from "next/link";
import { toast } from "react-hot-toast";
import PhoneInput from "react-phone-number-input";
import parsePhoneNumberFromString from "react-phone-number-input";

const RegisterForm = () => {
  const router = useRouter();
  const [user, setUser] = React.useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
    date: "",
    country: "",
    gender: "",
    phone: "",
    address: "",
  });

  const [buttonDisabled, setButtonDisabled] = React.useState(true);
  const [loading, setLoading] = React.useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');

  // const handlePhoneNumberChange = (value: string | undefined) => {
  //    const phoneNumberParsed = new parsePhoneNumberFromString(value);
  //    // Set the parsed phone number or an empty string if the input is invalid
  //    setPhoneNumber(phoneNumberParsed ? phoneNumberParsed : "");
  // };

  React.useEffect(() => {
    const isValidUser =
      user.name.trim() && user.email.trim() && user.password.trim();
    setButtonDisabled(!isValidUser);
  }, [user]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log("Signup success", response.data);
      router.push("/en/pages/other-pages/login");
      toast.success("Sign up successful");
    } catch (error: any) {
      console.log("Sign up failed", error.message);
      toast.error(
        error.response?.data?.error || "Sign up failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">{FullName}</label>
        <input
          type="text"
          name="name"
          className="form-control"
          id="name"
          value={user.name}
          onChange={handleInputChange}
          placeholder="Enter your name"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">{EmailAddress}</label>
        <input
          type="email"
          name="email"
          className="form-control"
          id="email"
          value={user.email}
          onChange={handleInputChange}
          placeholder="Enter email address"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="date">Phone</label>
        {/* <PhoneInput
          placeholder="Enter phone number"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
        /> */}
      </div>
      <div className="form-group">
        <label htmlFor="date">Date of Birth</label>
        <input
          type="date"
          name="date"
          className="form-control"
          id="date"
          value={user.date}
          onChange={handleInputChange}
          placeholder="Enter email address"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="gender">Gender</label>
        <div className="input-group">
          <select className="form-control" id="gender">
            <option selected>Choose a gender...</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="others">Others</option>
          </select>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="country">Country</label>
        <div className="input-group">
          <select className="form-control" id="country">
            <option selected>Choose a country...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="password">{Password}</label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          value={user.password}
          onChange={handleInputChange}
          placeholder="Password"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          className="form-control"
          id="confirmPassword"
          name="password"
          value={user.confirmpassword}
          onChange={handleInputChange}
          placeholder="Password"
          required
        />
      </div>
      <div className="button-bottom">
        {/* <Link href="/en/pages/other-pages/register"> */}
        <button
          className={`btn w-100 btn btn-solid color3`}
          type="submit"
          disabled={buttonDisabled}
        >
          {loading ? "loading..." : "create account"}
        </button>
        {/* </Link> */}
        <div className="divider">
          <h6>or</h6>
        </div>
        <Link href="/pages/other-pages/login">
          <Button btnClass="w-100 btn btn-solid btn-outline" name="login" />
        </Link>
      </div>
    </form>
  );
};

export default RegisterForm;
