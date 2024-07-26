"use client";
import React, { useState } from "react";
import { FormEvent } from "react";
import { ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { EmailAddress, FullName, LastName, Password } from "@/constant/constant";
import Button from "../btn";
import Link from "next/link";
import { toast } from "react-hot-toast";
import PhoneInput from "react-phone-number-input";
import parsePhoneNumberFromString from "react-phone-number-input";
import httpService from "@/services/httpService";

const RegisterForm = () => {
  const router = useRouter();
  const [user, setUser] = React.useState({
    firstName: "",
    lastName:"",
    email: "",
    password: "",
    confirmpassword: "",
    date: "",
    address: "",
    city: "",
    country: "",
    gender: "",
    phone: "",
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
      user.firstName.trim() &&
      user.lastName.trim() &&
      user.email.trim() &&
      user.password.trim();
    setButtonDisabled(!isValidUser);
  }, [user]);

  

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      email: user.email,
      password: user.password,
      firstName: user.firstName,
      lastName: user.lastName,
      country: user.country,
      phone: user.phone,
      gender: user.gender,
      dob: user.date,
      apartment: user.address,
      city: user.city,
    };
    const url = `/auth/signup`;
    try {
      const res = await httpService.post(url, data);
      const response = res.data;
      toast.success(`${response.message}`, {
        duration: 7000,
        position: "top-right",
      });
      router.push("/en/verify");

    } catch (error: any) {
      setLoading(false);
      toast.error(`${error?.response?.data?.message}`, {
        duration: 7000,
        position: "top-right",
      });
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-xl-6">
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              className="form-control"
              id="name"
              value={user.firstName}
              onChange={handleInputChange}
              placeholder="Enter your first name"
              required
            />
          </div>
        </div>
        <div className="col-xl-6">
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              className="form-control"
              id="name"
              value={user.lastName}
              onChange={handleInputChange}
              placeholder="Enter your last name"
              required
            />
          </div>
        </div>
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
        <label htmlFor="phone">Phone</label>
        <input
          type="text"
          name="phone"
          className="form-control"
          id="phone"
          value={user.phone}
          onChange={handleInputChange}
          placeholder="Enter phone number"
          required
        />

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
          placeholder="Date of Birth"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="gender">Gender</label>
        <div className="input-group">
          <select
            className="form-control"
            id="gender"
            name="gender"
            value={user.gender}
            onChange={handleInputChange}
          >
            <option selected>Choose a gender...</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="others">Others</option>
          </select>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-6">
          <div className="form-group">
            <label htmlFor="name">Address</label>
            <input
              type="text"
              name="address"
              className="form-control"
              id="name"
              value={user.address}
              onChange={handleInputChange}
              placeholder="Enter your Address"
              required
            />
          </div>
        </div>
        <div className="col-xl-6">
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input
              type="text"
              name="city"
              className="form-control"
              id="name"
              value={user.city}
              onChange={handleInputChange}
              placeholder="Enter your City"
              required
            />
          </div>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="country">Country</label>
        <input
          type="text"
          name="country"
          className="form-control"
          id="country"
          value={user.country}
          onChange={handleInputChange}
          placeholder="Enter Country"
          required
        />
        {/* <div className="input-group">
          <select className="form-control" id="country">
            <option selected>Choose a country...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div> */}
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
      {/* <div className="form-group">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          className="form-control"
          id="confirmPassword"
          name="confirmPassword"
          value={user.confirmpassword}
          onChange={handleInputChange}
          placeholder="Password"
          required
        />
      </div> */}
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
