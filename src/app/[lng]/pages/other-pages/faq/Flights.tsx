import React from "react";

const Flights = () => {
  return (
    <>
      <div>
        <div className="card">
          <div className="card-title">Flights</div>
          <div className="card-header">
            <h5> What should I do if I miss my flight?</h5>
          </div>
          <div className="card-body">
            If you miss your flight, contact the airline as soon as possible to
            discuss your options. Depending on the airline’s policy, they may
            rebook you on the next available flight, but additional fees may
            apply. If you booked through us, we can assist you in contacting the
            airline.
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h5> What is the refund policy for flights?</h5>
          </div>
          <div className="card-body">
            Refund policies vary depending on the airline and the fare type you
            have chosen. Some fares are fully refundable, while others may be
            non-refundable or only partially refundable. It’s important to
            review the refund policy before booking your flight.
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h5> What should I do if my flight is canceled or delayed?</h5>
          </div>
          <div className="card-body">
            If your flight is canceled or delayed, the airline is responsible
            for providing you with assistance, which may include rebooking on
            another flight, offering a refund, or providing accommodation for
            overnight delays. You should contact the airline directly for
            assistance and keep any documentation for your travel insurance
            claim, if applicable.
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h5>How early should I arrive at the airport before my flight?</h5>
          </div>
          <div className="card-body">
            For domestic flights, it is recommended to arrive at the airport at
            least 2 hours before departure. For international flights, you
            should arrive at least 3 hours before departure. These times allow
            for check-in, security screening, and boarding.
          </div>
        </div>
      </div>
    </>
  );
};

export default Flights;
