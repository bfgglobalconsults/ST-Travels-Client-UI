import React from 'react'
import DashboardTitle from '../../user-dashboard/common/dashboard-title';

const Travels = () => {
  return (
    <>
      {" "}
      <div className="dashboard-box">
        <DashboardTitle title={"PASSPORTS & VISAS"} />
        <div className="dashboard-detail">
          <div className="delete-section">
            <ul className="terms-list">
              <li>
                Passport and visa requirements are your responsibility. It is a
                requirement that you hold a valid passport to depart Australia,
                and most countries require passports to have at least 6 months
                validity. This means your passport should be valid for at least
                6 months from your scheduled return to Australia.
              </li>

              <li>
                It is your responsibility to obtain vaccinations and
                preventative medicines as may be required for the duration of
                your travel. It is your responsibility to ensure that you are in
                possession of the necessary documentation to comply with the
                laws and regulations of the destinations to be visited. You
                should consult your GP or a specialist travel medical
                practitioner at least 8 weeks prior to travel.
              </li>

              <li>
                We will not be responsible for any loss you incur if you are
                denied boarding or entry to a destination because you do not
                have necessary documentation or records of vaccinations.
              </li>

              <li>
                Any information provided by us is given in good faith and for
                guidance only. We do not warrant its completeness, accuracy, and
                authenticity, you must make your own enquiries to satisfy
                yourself of entry and other requirements.
              </li>
            </ul>
            <p className="my-4">
              <span className="text-bold">COVID-19</span>
            </p>
            <ul className="terms-list">
              <li>
                You acknowledge that you are choosing to travel at a time when
                you may become exposed to Covid-19. You agree that you assume
                responsibility for risks to your health associated with
                travelling in the current environment.
              </li>

              <li>
                You should familiarise yourself with any vaccination obligations
                and obligations to have a negative Covid-19 PCR test within a
                certain period prior to travel and any obligations to quarantine
                either in destination or on return to Australia, or
                domestically. It is your responsibility to satisfy these
                requirements and associated costs.
              </li>

              <li>
                Please note that some airlines and other Travel Providers have
                implemented mandatory requirements in relation to vaccines and
                mask-wearing. It is your responsibility to familiarise yourself
                with these requirements and to comply with them.
              </li>
            </ul>
            <p className="my-4">
              <span className="text-bold">IMPORTANT INFORMATION</span>
            </p>
            <ul className="terms-list">
              <li>
                We strongly encourage you to be adequately insured for the
                duration of your trip. We recommend you consider comprehensive
                travel insurance to cover cancellation, medical requirements,
                luggage, and additional expenses. The choice of insurer is
                yours. We strongly suggest you purchase insurance at the time
                you pay your deposit. This is because cancellation fees and
                charges may be imposed from that time.
              </li>
              <li>
                Any special requests and requirements (including dietary,
                medical and disability access requirements) must be notified to
                us prior to you booking Travel Arrangements. While we will pass
                on requests and requirements to Travel Providers, note that we
                are not responsible if Travel Providers do not accommodate them.
                Any special requests and requirements notified to us after
                booking may be considered a booking amendment.
              </li>
              <li>
                All payments made to us will not be held on trust for you and
                may be held in any account of our choosing. Payments will be
                considered debts due and payable to Travel Providers subject to
                the Travel Provider Booking Conditions and payments in
                satisfaction of the Advisory and Booking Service Fees and any
                other fees payable by you to us. Please note that we can only
                provide you with a refund of payments not yet paid to a Travel
                Provider after the Travel Provider has authorised us to do so
                and after we have deduced any fees due to us.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Travels