import React from "react";
import { FormEvent } from "react";
import { ChangeEvent } from "react";
import OtpInput from "react-otp-input";


const VerifyForm = () => {
      const [otp, setOtp] = React.useState("");

  const [user, setUser] = React.useState({
    email: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(true);
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    const isValidUser = user.email.trim();
    setButtonDisabled(!isValidUser);
  }, [user]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };
  return (
    <>
      <form>
        <div className="form-group text-center">
          <label htmlFor="email">Enter OTP</label>
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            containerStyle={{
              display: "flex",
              justifyContent: "center",
            }}
            inputStyle={{
              width: "70px",
              height: "50px",
            }}
            renderSeparator={<span>-</span>}
            renderInput={(props) => <input {...props} />}
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
};

export default VerifyForm;
