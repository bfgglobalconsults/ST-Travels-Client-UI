import { socialIconData } from "@/data/hotels/single-page";
import { FC } from 'react';

const ContactInfo: FC = () => {
  return (
    <div className="single-sidebar">
      <h6 className="contact-title">contact info</h6>
      <p className="address">
        {" "}
        <i className="fas fa-map-marker-alt"></i> Mbora, Idu, Abuja
      </p>
      <p>
        <i className="fas fa-phone-alt"></i> +234 903 550 1254
      </p>
      <a href="#">
        <p>
          <i className="fas fa-envelope"></i> eliteescapeluxuryhomes@gmail.com
        </p>
      </a>
      <div className="social-box">
        <ul>
          {socialIconData.map((data) => (
            <li key={data.id}>
              <a href={data.link} target="_blank">
                <i className={data.iconClass}></i>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="bottom_sec">
        <h6>check-in : 7:00 AM</h6>
        <h6>check-out : 9:00 AM</h6>
      </div>
    </div>
  );
};

export default ContactInfo;
