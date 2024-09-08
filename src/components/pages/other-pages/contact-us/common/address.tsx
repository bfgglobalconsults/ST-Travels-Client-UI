import { FC } from "react";


const AddressContent: FC<IAddressProps> = ({ colClass }) => {
  return (
    <div className="row">
      <div className={colClass}>
        <div className="contact_wrap">
          <div className="title_bar">
            <i className="fas fa-map-marker-alt"></i>
            <h4>Address</h4>
          </div>
          <div className="contact_content">
            <p>
              <b>Nigeria:</b>
            </p>
            <p>
              322 Road C Close Block 1 Flat 10 <br />
              Festac Town, Lagos
            </p>
            <p>
              <b>Australia:</b>
            </p>
            <p>Sydney , Australia</p>
          </div>
        </div>
      </div>
      <div className={colClass}>
        <div className="contact_wrap">
          <div className="title_bar">
            <i className="fas fa-envelope"></i>
            <h4>email address</h4>
          </div>
          <div className="contact_content">
            <ul>
              <li>info@sttravelsconsulting.com</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={colClass}>
        <div className="contact_wrap">
          <div className="title_bar">
            <i className="fas fa-phone-alt"></i>
            <h4>phone</h4>
          </div>
          <div className="contact_content">
            <ul>
              <li>+2347075944082</li>
              <li>+61435607034</li>
            </ul>
          </div>
        </div>
      </div>
      {/* <div className={colClass}>
        <div className="contact_wrap">
          <div className="title_bar">
            <i className="fas fa-fax"></i>
            <h4>fax</h4>
          </div>
          <div className="contact_content">
            <ul>
              <li>+1 212 999 8888</li>
              <li>+44 1-2222 8888</li>
            </ul>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default AddressContent;
