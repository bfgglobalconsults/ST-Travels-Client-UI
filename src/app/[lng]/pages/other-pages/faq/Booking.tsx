import React from "react";

const Booking = () => {
  return (
    <>
      <div>
        <div className="card">
          <div className="card-title">Booking</div>
          <div className="card-header">
            <h5>How do I make a booking?</h5>
          </div>
          <div className="card-body">
            You can make a booking directly through our website by selecting
            your desired travel options, filling in your details, and completing
            the payment process. If you need assistance, our customer service
            team is available to help you with the booking.
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h5>How will I know if my booking is confirmed?</h5>
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
            <h5> How do I cancel a booking?</h5>
          </div>
          <div className="card-body">
            To cancel a booking, you can either log into your account on our
            website and manage your booking or contact our customer service team
            for assistance. Please be aware that cancellations may incur fees
            depending on the service provider's policies.
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h5>How do I receive my travel documents?</h5>
          </div>
          <div className="card-body">
            After your booking is confirmed, your travel documents will be sent
            to your registered email address. These may include your e-tickets,
            hotel vouchers, and any other necessary documentation.
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h5>
              {" "}
              What should I do if I don’t receive my booking confirmation?
            </h5>
          </div>
          <div className="card-body">
            If you haven't received your booking confirmation within a few
            hours, please check your spam or junk folder. If it's still missing,
            contact our customer support team, and they will assist you in
            retrieving your confirmation.
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;
