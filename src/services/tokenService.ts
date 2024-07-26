export const getLocalRefreshToken = () =>
  localStorage.getItem("refreshToken") ?? null;

export const getLocalAccessToken = () =>
  localStorage.getItem("accessToken") ?? null;

export const updateLocalAccessToken = (token:string) => {
  localStorage.setItem("accessToken", token);
};

export const updateLocalRefreshToken = (token:string) => {
  localStorage.setItem("refreshToken", token);
};

export const removeToken = () => {
  localStorage.removeItem("refreshToken");
  localStorage.removeItem("accessToken");
};
