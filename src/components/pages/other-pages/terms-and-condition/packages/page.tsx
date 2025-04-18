import React from 'react'
import DashboardTitle from '../../user-dashboard/common/dashboard-title';

const Packages = () => {
  return (
    <>
      <div className="dashboard-box">
        <DashboardTitle
          title={"Resort Packages, Hotel Stays, and Activities"}
        />
        <div className="dashboard-detail">
          <div className="text-black">
            <p>
              We customise various all-inclusive (airfares, accommodation, and
              activities) corporate and leisure packages. We only resell
              services offered by various wholesalers. Please note that all
              venues and services providers have their own cancellation and
              refund policies which we do not have any control over. It is your
              responsibility to familiarize yourself with their terms of sale
              and refund/cancellation policy. Once you purchase these packages,
              or any of the services offered by us, you are deemed to have read
              and agreed to the terms and conditions.
            </p>
            <p>
              <span className="text-bold">Ocean/River Cruise Packages</span>
            </p>
            <p>
              All ocean and river cruise packages sold by us have their own
              cancellation and refund policies which we do not have any control
              over. Once you purchase these packages, or any of the services
              offered by us, you are deemed to have read and agreed to the terms
              and conditions.
            </p>
            <p>
              Customers will be informed of the cancellation policy applicable
              to their bookings at the time of booking and in their booking
              confirmation emails.
            </p>
            <p>
              All bookings and reservations made through our Services are
              subject to availability and confirmation by the respective travel
              suppliers.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Packages;