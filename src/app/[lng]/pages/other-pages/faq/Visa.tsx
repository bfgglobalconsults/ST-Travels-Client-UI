import React from "react";

const Visa = () => {
  return (
    <>
      <div>
        <div className="card">
          <div className="card-title">Visa</div>
          <div className="card-header">
            <h5> Do I need a visa for my destination?</h5>
          </div>
          <div className="card-body">
            Visa requirements vary by destination and your nationality. It’s
            important to check the visa requirements for your specific
            destination before you travel. You can find this information by
            contacting the relevant embassy or consulate or using online visa
            services.
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h5> How do I apply for a visa?</h5>
          </div>
          <div className="card-body">
            Visa application processes vary depending on the destination.
            Typically, you will need to submit a visa application form, along
            with supporting documents such as your passport, photographs, and
            proof of travel arrangements. Some countries allow you to apply for
            a visa online, while others require in-person applications at an
            embassy or consulate.
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h5> How long does it take to get a visa?</h5>
          </div>
          <div className="card-body">
            Visa processing times vary by country and type of visa. It can take
            anywhere from a few days to several weeks. It is recommended that
            you apply for your visa well in advance of your travel date to avoid
            any last-minute issues.
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h5>What happens if my visa application is denied?</h5>
          </div>
          <div className="card-body">
            If your visa application is denied, you will typically receive a
            reason for the denial from the embassy or consulate. Depending on
            the reason, you may be able to reapply or appeal the decision. It is
            important to address any issues mentioned in the denial before
            reapplying.
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Visa;
