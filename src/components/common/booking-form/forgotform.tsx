import React from 'react';
import { FormEvent } from "react";
import { ChangeEvent } from "react";

const ForgotForm = () => {
     const [user, setUser] = React.useState({
       email: "",
     });
      const [buttonDisabled, setButtonDisabled] = React.useState(true);
      const [loading, setLoading] = React.useState(false);
      React.useEffect(() => {
        const isValidUser =
          user.email.trim();
        setButtonDisabled(!isValidUser);
      }, [user]);

      const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({ ...prevUser, [name]: value }));
      };
  return (
    <>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
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
        <div className="button-bottom">
        {/* <Link href="/en/pages/other-pages/register"> */}
        <button
          className={`btn w-100 btn btn-solid color3`}
          type="submit"
          disabled={buttonDisabled}
        >
          {loading ? "loading..." : "Submit"}
        </button>
        </div>
      </form>
    </>
  );
}

export default ForgotForm;