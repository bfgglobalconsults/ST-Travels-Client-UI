import { FC } from "react";
import SinglePageSection from "@/components/hotels/single-pages/common/single-page-section";
// import "@/public/assets/scss/color1.scss";

import Banner from "@/components/hotels/single-pages/info-tab/banner";
import CustomLayout from "@/layouts/layout";

const InfoTab: FC = () => {
  return (
    <CustomLayout
      title="bg-white"
      footerPlace={true}
      userBgClass="user rounded5"
    >
      <Banner />
      <SinglePageSection side={"right"} tab={true} detail={true} />
    </CustomLayout>
  );
};

export default InfoTab;
