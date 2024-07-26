"use client"
import { FC } from "react";
import React from "react";
import { FormEvent } from "react";
import { ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { EmailAddress, FullName, Password } from "@/constant/constant";
import Button from "../btn";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setAccessToken, setUsers, setUserTokens } from "@/redux-toolkit/reducers/user-reducer";


const LoginForm = () => {
  const dispatch = useDispatch();
   const router = useRouter();
   const [user, setUser] = React.useState({
     email: "",
     password: "",
   });

    const [buttonDisabled, setButtonDisabled] = React.useState(true);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
      const isValidUser =
       user.email.trim() && user.password.trim();
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
        const response = await axios.post("/api/users/login", user);
        console.log("Login success", response.data);
        if (response.data.status === "success") {
				setLoading(false);
				dispatch(setUsers(response.data));
				dispatch(
					setUserTokens({
						accessToken: response.data.access_token,
						refreshToken: response.data.refresh_token,
					}),
				);
				dispatch(setAccessToken(response.data.access_token));
        router.push("/en/home/flight/modern");
        toast.success("Login successful");
      }} catch (error: any) {
        console.log("Login failed", error.message);
        toast.error(
          error.response?.data?.error || "Login failed. Please try again."
        );
      } finally {
        setLoading(false);
      }
    };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">user name or Email address</label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          name="email"
          value={user.email}
          onChange={handleInputChange}
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          value={user.password}
          name="password"
          onChange={handleInputChange}
          placeholder="Password"
        />
      </div>
      <div className="form-group form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          remember me
        </label>
      </div>
      <div className="button-bottom">
        <button
          className={`btn w-100 btn btn-solid color3`}
          type="submit"
          disabled={buttonDisabled}
        >
          {loading ? "loading..." : "login"}
        </button>
        <div className="divider">
          <h6>or</h6>
        </div>

        <Link href="/pages/other-pages/register">
          <Button
            btnClass="w-100 btn btn-solid btn-outline"
            name="create account"
          />
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
