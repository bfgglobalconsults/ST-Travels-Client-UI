import httpService from "@/services/httpService";
import React from "react";
import { FormEvent } from "react";
import { ChangeEvent } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import OtpInput from "react-otp-input";


const VerifyForm = () => {
          const router = useRouter(); 
      const [otp, setOtp] = React.useState("");
      const [loading, setLoading] = React.useState(false);


   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
     e.preventDefault();
     setLoading(true);
     const data = {
        token: otp
     };
     const url = `/auth/verify/email?otp=${otp}`;
     try {
       const res = await httpService.post(url, data);
       const response = res.data;
       toast.success(`${response.message}`, {
         duration: 10000,
         position: "top-right",
       });
       router.push("/login");

     } catch (error: any) {
       setLoading(false);
       toast.error(`${error?.response?.data?.message}`, {
         duration: 10000,
         position: "top-right",
       });
       console.error(error);
     } finally {
       setLoading(false);
     }
   };
  return (
    <>
      <form onSubmit={handleSubmit}>
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
          >
            {loading ? "loading..." : "Submit"}
          </button>
        </div>
      </form>
    </>
  );
};

export default VerifyForm;
