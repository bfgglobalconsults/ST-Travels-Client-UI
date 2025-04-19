import RestaurantAnimation from "@/components/common/animation/restaurant-animation";
import { FC } from "react";
import TravelInfo from "./travel-info";
import Summary from "@/components/common/booking-page/booking-summary";

interface BookingProps {
  amount?: number;
}

const Booking: FC<BookingProps> = ({amount = 0}) => {
  return (
    <section className="section-b-space bg-inner animated-section">
      <RestaurantAnimation />
      <div className="container">
        <div className="row">
          <TravelInfo amount={amount} />
          {/* <Summary /> */}
        </div>
      </div>
    </section>
  );
};

export default Booking;
