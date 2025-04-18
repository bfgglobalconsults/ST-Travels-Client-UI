import { OurLocation } from "@/constant/constant";

const Location: React.FC = () => {
  return (
    <div className="col-xl-3 col-md-6">
      <div className="footer-title">
        <h5>{OurLocation}</h5>
      </div>
      <div className="footer-content">
        <div className="footer-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3384.5661963739447!2d151.20929521516584!3d-33.86882008065856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12b1d38f1d7f71%3A0x5017d681632cc50!2sSydney%20NSW%2C%20Australia!5e0!3m2!1sen!2sus!4v1620133706821!5m2!1sen!2sus"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Location;
