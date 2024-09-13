"use client";
// import "@/public/assets/scss/color1.scss";
import AboutComponent from "@/components/home/hotels/classic/about";
import Gallery from "@/components/home/hotels/classic/gallery";
import HomeBanner from "@/components/home/hotels/classic/home-banner";
import Instagram from "@/components/home/hotels/classic/instagram";
import Reviews from "@/components/home/hotels/classic/reviews";
import RoomSuits from "@/components/home/hotels/classic/room-suits";
import SearchComponent from "@/components/home/hotels/classic/search";
import SpecialRoomsComponent from "@/components/home/hotels/classic/special-room";
import SubscribeComponent from "@/components/home/hotels/classic/subscribe";
import Video from "@/components/home/hotels/classic/video";
import CustomLayout from "@/layouts/layout";
import ServicesComponent from "@/components/home/hotels/classic/services";
import SearchHotel from "@/components/home/hotels/classic/SearchHotel";
import Blog from "@/components/home/flight/modern/blog";

const Classic: React.FC = () => {
  return (
    <>
      <CustomLayout title="bg-white" userBgClass="user rounded5">
        <HomeBanner />
        <SearchHotel/>
        <AboutComponent />
        <RoomSuits />
        <Gallery />
        <SpecialRoomsComponent />
        <Video />
        <ServicesComponent />
        <SubscribeComponent />
        <Reviews />
        <Blog />
        <Instagram />
      </CustomLayout>
    </>
  );
};

export default Classic;
