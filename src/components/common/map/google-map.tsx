import { FC } from "react";

const GoogleMapComponent: FC = () => {
  return (
    <iframe
      style={{ height: "100%", width: "100%" }}
      className="map"
      id="map"
      title="realestate location"
      src="https://www.google.com/maps/dir//1st+Ave,+Amuwo,+Lagos+102102,+Lagos/@6.4604477,3.2187783,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x103b891f9c28f295:0x4e5fdf79e9e56ad6!2m2!1d3.3011871!2d6.4604541?entry=ttu"
      allowFullScreen
    ></iframe>
  );
};

export default GoogleMapComponent;
