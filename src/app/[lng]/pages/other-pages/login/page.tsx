import { FC } from "react";
// import "@/public/assets/scss/color1.scss";
import CustomLayout from "@/layouts/layout";
import Breadcrumb from "@/components/common/breadcrumb/page";
import LoginPage from "@/components/pages/other-pages/login/page";

const Login: FC = () => {
  return (
    <CustomLayout title="bg-white" userBgClass="user rounded5">
      <Breadcrumb title={"home"} subTitle={"login"} bannerImg={"/assets/images/inner-bg.jpg"} />
      <LoginPage title="login" />
    </CustomLayout>
  );
};

export default Login;
