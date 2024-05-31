import { ContactUs } from "@/constant/constant";
import Image from "next/image";

const ContactUsComponent: React.FC = () => {
  return (
    <div className="col-xl-2 col-md-6 order-cls">
      <div className="footer-title mobile-title">
        <h5>{ContactUs}</h5>
      </div>
      <div className="footer-content">
        <div className="contact-detail">
          <div className="footer-logo">
            <a href="/">
              <Image src="/assets/images/icon/ST-TRAVELS-WHITE.png" alt="" className="img-fluid" width={139} height={53} />
            </a>
          </div>
          <p>We take care of your travel needs</p>
          <ul className="contact-list">
            <li>
              <i className="fas fa-map-marker-alt"></i> Australia.
            </li>
            <li>
              <i className="fas fa-phone-alt"></i> +61435607034
            </li>
            <li>
              <i className="fas fa-envelope"></i> info@sttravelsandconsulting.com
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactUsComponent;
