import React from 'react'
import DashboardTitle from '../../user-dashboard/common/dashboard-title';

const Convention = () => {
  return (
    <>
      <div className="dashboard-box">
        <DashboardTitle title={"Application of Convention and Laws"} />
        <div className="dashboard-detail">
          <div className="text-black">
            <p>
              International Carriage is governed by the Convention, where
              applicable, or under applicable laws where the Convention does not
              apply. Where your travel is wholly within Australia with no
              international sectors, it is subject to the provisions of the
              Civil Aviation (Carriers’ Liability) Act 1959 as amended (or any
              replacement legislation), the Australian Consumer Law or in the
              case of intra-State travel, complementary State legislation.
            </p>
            <p>
              Our Services facilitate the booking and reservation of
              travel-related services, including flights, accommodations, tours,
              and activities.
            </p>
            <p>
              When booking travel services through our website, you agree to
              provide accurate and up-to-date information.
            </p>
            <p>
              All bookings and reservations made through our Services are
              subject to availability and confirmation by the respective travel
              suppliers.
            </p>
            <p>
              All content, trademarks, and intellectual property rights on
              our website and services are owned by ST Travels and Consulting.
              You may not use, reproduce, or distribute any content from our
              website without our prior written consent.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Convention;