import { FC } from "react";

const GoogleMapComponent: FC = () => {
  return (
    <iframe
      style={{ height: "100%", width: "100%" }}
      className="map"
      id="map"
      title="realestate location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d169249.31736429886!2d150.6517810157364!3d-33.8473563407737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12af64b0a0557d%3A0x5017d681632bed0!2sSydney%20NSW%2C%20Australia!5e0!3m2!1sen!2sus!4v1690185109152!5m2!1sen!2sus"
      allowFullScreen
    ></iframe>
  );
};

export default GoogleMapComponent;
