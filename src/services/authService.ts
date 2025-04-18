import httpService from "./httpService";
export const loginUser = async (userData: any) => {
  try {
    const res = await httpService.post("/auth/login", userData);
    return res.data;
  } catch (err:any) {
    let errorMessage = "Unable to login. Please try again later.";
    if (err.response && err.response.data && err.response.data.message) {
      errorMessage = err.response.data.message;
    }
    throw new Error(errorMessage);
  }
};

export const registerUser = async (form: any) => {
  try {
    const response = await httpService.post("/auth/signup", form);
    return response.data;
  } catch (err:any) {
    let errorMessage;
    if (err.response && err.response.data && err.response.data.message) {
      errorMessage = err.response.data.message;
    }
    throw new Error(errorMessage);
  }
};

export const verifyAccount = async (token:any) => {
  try {
    const res = await httpService.post(`/auth/verify/email?otp=${token}`, {
      token: token,
    });
    return res.data;
  } catch (err:any) {
    let errorMessage;
    if (err.response && err.response.data && err.response.data.message) {
      errorMessage = err.response.data.message;
    }
    throw new Error(errorMessage);
  }
};

export const resendOTP = async (form: any) => {
  try {
    const res = await httpService.post(`/auth/resend/otp`, form);
    return res.data;
  } catch (err: any) {
    let errorMessage;
    if (err.response && err.response.data && err.response.data.message) {
      errorMessage = err.response.data.message;
    }
    throw new Error(errorMessage);
  }
};

export const requestResetPassword = async (form:any) => {
  try {
    const res = await httpService.post("/auth/forgot/password", form);

    return res.data;
  } catch (err:any) {
    let errorMessage;
    if (err.response && err.response.data && err.response.data.message) {
      errorMessage = err.response.data.message;
    }
    throw new Error(errorMessage);
  }
};

export const verifyToken = async (form:any) => {
  console.log(form);
  try {
    const res = await httpService.post("/auth/refresh/token", form);
    return res.data;
  } catch (err:any) {
    let errorMessage;
    if (err.response && err.response.data && err.response.data.message) {
      errorMessage = err.response.data.message;
    }
    throw new Error(errorMessage);
  }
};

export const resetPassword = async (form: any) => {
  try {
    const res = await httpService.post(`/auth/reset/password`, form);
    return res.data;
  } catch (err:any) {
    let errorMessage;
    if (err.response && err.response.data && err.response.data.message) {
      errorMessage = err.response.data.message;
    }
    throw new Error(errorMessage);
  }
};



export const logoutUser = async () => {
  try {
    const res = await httpService.get("/auth/logout");
    return res.data;
  } catch (err:any) {
    let errorMessage;
    if (err.response && err.response.data && err.response.data.message) {
      errorMessage = err.response.data.message;
    }
    throw new Error(errorMessage);
  }
};
