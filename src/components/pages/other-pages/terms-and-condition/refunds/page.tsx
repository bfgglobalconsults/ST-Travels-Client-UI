import React from 'react'
import DashboardTitle from '../../user-dashboard/common/dashboard-title';

const Refunds = () => {
  return (
    <>
      <div className="dashboard-box">
        <DashboardTitle title={"Refunds"} />
        <div className="dashboard-detail">
          <div className="text-black">
            <p>
              Refunds for cancellations will be processed in accordance with the
              refund policies of the travel suppliers, and the terms and
              conditions of the booking.
            </p>
            <p>
              To request a refund, customer is to contact ST Travels and
              consulting, and submit a refund request in writing.
            </p>
            <p>
              Refund requests must be submitted via email or through our
              customer service hotline.
            </p>
            <p>
               Refund requests must include your booking reference number,
              relevant details, and any supporting documentation as required.
            </p>
            <p>
                
            </p>
            <p>
              <span className="text-bold">Refunds on Taxes and Charges</span>
            </p>
            <p>
              Refunds may be subject to deduction of cancellation fees,
              processing fees, non-refundable deposits or other charges as
              specified by the travel suppliers.
            </p>
            <p>
              <span className="text-bold">Deadline for Refunds</span>
            </p>
            <p>
              All refund requests must be made in writing to ST Travels
              Consulting. Unless an applicable law says otherwise, we may refuse
              to provide a refund if it is requested after the end of the Ticket
              validity. Generally, tickets are valid for 12 months from the date
              of issue. It is your responsibility to check the validity of your
              ticket.
            </p>
            <p>
              <span className="text-bold">Right to Refuse Refund</span>
            </p>
            <p>
              We may refuse a refund on a Ticket to depart from the country you
              are in unless you can establish to our satisfaction that:
            </p>
            <ul>
              <li>
                you have permission from the appropriate government or other
                authority to remain in that country, or
              </li>
              <li>you will depart by another means of transport.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Refunds;