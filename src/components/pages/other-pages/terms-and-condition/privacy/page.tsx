import React from "react";
import DashboardTitle from "../../user-dashboard/common/dashboard-title";

const Privacy = () => {
  return (
    <>
      <div className="dashboard-box">
        <DashboardTitle title={"Privacy Policy"} />
        <div className="dashboard-detail">
          <div className="text-black">
            <p>
              ST Travels and Consulting is committed to protecting the privacy
              of our customers and users and security of your personal
              information. This Privacy Policy explains how we collect, use, and
              disclose your personal information when you use our website,
              mobile application, and related services (collectively, our
              "Services").{" "}
            </p>
            <p>
              <span className="text-bold my-4">Information We Collect</span>
            </p>
            <ul className="terms-list">
              <li>
                We may collect personal information such as customer name,
                contact details, payment information, and travel preferences
                when you use our Services or interact with us.
              </li>
              <li>
                We may collect information about your use of our Services,
                including your browsing activity, interactions with our website
                or mobile application, and preferences.
              </li>
              <li>
                We may collect information about your device, including your IP
                address, browser type, operating system, and device identifiers
                to improve the functionality and security of our Services.
              </li>
              <li>Phone number</li>
              <li>Email address</li>
              <li>Passport number</li>
              <li>Credit card number</li>
              <li>Dates of travel</li>
              <li>Travel destinations</li>
            </ul>
          </div>
          <div className="text-black my-4">
            <p>
              We only use your information to book your airline tickets,
              accommodation and any ancillary services requested by you. We only
              share your details with respective service providers, i.e.,
              airlines and hotels and resorts etc., and airline consolidators.
              We do not share or sell your information to any other
              organization. We do not use your information for marketing or any
              other purpose other than provision of the services requested by
              you. We may share or divulge your information with government
              agencies as required under Commonwealth of Australia or State
              legislation.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Privacy;
