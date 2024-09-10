import React from 'react';
import DashboardTitle from '../../user-dashboard/common/dashboard-title';

const Reservations = () => {
  return (
    <>
      <div className="dashboard-box">
        <DashboardTitle title={"RESERVATIONS"} />
        <div className="dashboard-detail">
          <div className="text-black">
            <p>
              Reservations (even after payment of your deposit and final
              payment) are subject to us receiving confirmation from the service
              provider including ticketing from the airline provider. In the
              rare instance where a reservation request cannot be confirmed by
              the service provider, you will be offered the choice of
              alternative arrangements (which may be with an alternative service
              provider), which may be at an additional cost or alternatively a
              full refund provided where the service provider allows. You agree
              that we are not liable to you for any such additional costs.
            </p>
            <p>
              <span className="text-bold">FLIGHT SCHEDULE CHANGES</span>
            </p>
            <p>
              The airlines have the right to reschedule or cancel flights at any
              time. It is your responsibility to contact the airline prior to
              travel to ensure the scheduled departure time has not changed. We
              do not accept responsibility should changes occur nor do we accept
              responsibility for any additional cost incurred by you to make
              alterations to your booking to accommodate these changes as these
              are beyond our control.
            </p>
            <p>
              <span className="text-bold">SUPPLIER CHANGES</span>
            </p>
            <p>
              Many of the bonus inclusions which are incorporated into various
              packages have no associated costs to your package purchase price
              i.e., they are ‘free’ inclusions. This includes, but is not
              limited to, bonus inclusions such as cruises, golf, massages, day
              tours etc. Should you elect to cancel any component of your
              package there will be no refund forthcoming or any reduction in
              the overall package price. Additionally, should any ‘bonus’
              inclusions be cancelled by an operator or any such service not be
              provided to you, no refund will be forthcoming, nor will any
              additional service or compensation be provided unless offered
              directly to you by the service provider responsible for that
              service. In such circumstances that the inclusion cannot be
              provided for any reason, we may elect to find an alternate date,
              supplier, or inclusion.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reservations;