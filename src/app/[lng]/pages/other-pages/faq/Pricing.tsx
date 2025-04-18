import React from "react";

const Pricing = () => {
  return (
    <>
      <div>
        <div className="card">
          <div className="card-title">Pricing</div>
          <div className="card-header">
            <h5>How are your prices determined?</h5>
          </div>
          <div className="card-body">
            Our prices are determined based on various factors including the
            type of service, destination, travel dates, and availability. We
            work closely with our partners to ensure competitive rates and
            provide the best value for our customers.
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h5>Are there any hidden fees in your pricing?</h5>
          </div>
          <div className="card-body">
            No, we believe in transparent pricing. All costs, including taxes
            and service fees, are clearly outlined during the booking process.
            Any additional charges, such as luggage fees or optional upgrades,
            will be disclosed before you confirm your booking.
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h5> Do you offer discounts or promotions?</h5>
          </div>
          <div className="card-body">
            Yes, we regularly offer discounts and promotions on various travel
            services. Be sure to subscribe to our newsletter and follow us on
            social media to stay updated on the latest deals and special offers.
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h5>Are there additional costs for cancellations or changes?</h5>
          </div>
          <div className="card-body">
            Yes, cancellations or changes to your booking may incur additional
            fees depending on the service provider’s policies. We recommend
            reviewing the cancellation and change policies at the time of
            booking.
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h5>Do you charge a booking fee?</h5>
          </div>
          <div className="card-body">
            In some cases, a small booking fee may be applied to cover
            administrative costs. This will be clearly stated during the
            checkout process so you know exactly what you are paying for.
          </div>
        </div>
       
      </div>
    </>
  );
};

export default Pricing;
