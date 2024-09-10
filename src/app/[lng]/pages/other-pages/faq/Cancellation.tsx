import React from "react";

const Cancellation = () => {
  return (
    <>
      <div>
        <div className="card">
          <div className="card-title">Cancellation</div>
          <div className="card-header">
            <h5> Will I be charged a fee for canceling my booking?</h5>
          </div>
          <div className="card-body">
            Cancellation fees vary depending on the service provider and the
            specific terms and conditions of your booking. These fees will be
            outlined in your booking confirmation or on our website. Please
            review these terms before proceeding with a cancellation.
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h5>How long do I have to cancel my booking?</h5>
          </div>
          <div className="card-body">
            Once your booking is successfully completed, you will receive a
            confirmation email with all the details of your booking, including
            your travel itinerary and payment receipt. Please check your inbox
            and spam folder for this email.
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h5> Can I get a full refund if I cancel my booking?</h5>
          </div>
          <div className="card-body">
            Whether you can receive a full refund depends on the type of booking
            and the service provider's cancellation policy. Some bookings may
            offer a full refund if canceled within a specific time frame, while
            others may only offer partial refunds or be non-refundable.
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h5>How long does it take to receive a refund after canceling?</h5>
          </div>
          <div className="card-body">
            Refund processing times can vary depending on the service provider
            and payment method. Generally, refunds are processed within 5-10
            business days, but it could take longer depending on your bank or
            credit card company.
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h5>Can I rebook after canceling my trip?</h5>
          </div>
          <div className="card-body">
            Yes, you can rebook after canceling, subject to availability and any
            applicable fees. If you received a refund, you can use that amount
            toward your new booking. Please note that prices and availability
            may change when rebooking.
          </div>
        </div>
      </div>
    </>
  );
};

export default Cancellation;
