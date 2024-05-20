import Breadcrumb from '@/components/common/breadcrumb/page';
import ForgotPage from '@/components/pages/other-pages/forgot-password/page';
import CustomLayout from '@/layouts/layout';
import React from 'react'

const page = () => {
  return (
    <>
      <CustomLayout title="bg-white" userBgClass="user rounded5">
        <Breadcrumb
          title={"home"}
          subTitle={"forgot password"}
          bannerImg={"/assets/images/inner-bg.jpg"}
        />
        <ForgotPage title="Forgot Password" />
      </CustomLayout>
    </>
  );
}

export default page