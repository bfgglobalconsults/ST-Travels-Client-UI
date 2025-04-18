import Breadcrumb from "@/components/common/breadcrumb/page";
import ForgotPage from "@/components/pages/other-pages/forgot-password/page";
import VerifyPage from "@/components/pages/other-pages/verify/page";
import CustomLayout from "@/layouts/layout";
import React from "react";

const page = () => {
  return (
    <>
      <CustomLayout title="bg-white" userBgClass="user rounded5">
        <Breadcrumb
          title={"home"}
          subTitle={"Verify Account"}
          bannerImg={"/assets/images/inner-bg.jpg"}
        />
        <VerifyPage title="Verify Account" />
      </CustomLayout>
    </>
  );
};

export default page;
