import { FC } from "react";
import CustomLayout from "@/layouts/layout";
import Breadcrumb from "@/components/common/breadcrumb/page";
import TermsContent from "@/components/pages/other-pages/terms-and-condition/page";

const TermsandCo: FC = () => {
  return (
    <CustomLayout title="bg-white" userBgClass="user rounded5" loader="no">
      <Breadcrumb
        title={"home"}
        subTitle={"Terms and Conditions"}
        bannerImg={"/assets/images/inner-bg.jpg"}
      />
      <TermsContent />
    </CustomLayout>
  );
};

export default TermsandCo;
