"use client";
import { FC, useState } from "react";
// import DashboardSidebar from "./sidebar/dashboard-sidebar";
// import Profile from "./profile/page";
// import Dashboard from "./dashboard/dashboard";
// import Bookings from "./bookings/bookings";
// import AddedCard from "./payment/page";
// import Bookmark from "./bookmark/page";
// import Security from "./security/page";
import { termsTabs } from "@/data/pages/all-page";
import TermSidebar from "./sidebar/terms-sidebar";
import Convention from "./convention/page";
import Fees from "./fees/page";
import Refunds from "./refunds/page";
import Packages from "./packages/page";
import Reservations from "./reservations/page";
import Travels from "./travels/page";
import Privacy from "./privacy/page";

const TermsContent: FC = () => {
  const [activeTab, setActiveTab] = useState(termsTabs[0].id);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };
  return (
    <section
      className="small-section dashboard-section bg-inner"
      data-sticky_parent
    >
      <div className="container">
        <div className="row">
          <TermSidebar handleTabClick={handleTabClick} activeTab={activeTab} />
          <div className="col-lg-9">
            <div className="product_img_scroll" data-sticky_column>
              <div className="faq-content tab-content" id="top-tabContent">
                <div
                  className={`tab-pane fade ${
                    activeTab === "convention" ? "show active" : ""
                  }`}
                  id={"convention"}
                >
                  <Convention />
                </div>
                <div
                  className={`tab-pane fade ${
                    activeTab === "fees" ? "show active" : ""
                  }`}
                  id={"fees"}
                >
                  <Fees />
                </div>
                <div
                  className={`tab-pane fade ${
                    activeTab === "refunds" ? "show active" : ""
                  }`}
                  id={"refunds"}
                >
                  <Refunds />
                </div>
                <div
                  className={`tab-pane fade ${
                    activeTab === "packages" ? "show active" : ""
                  }`}
                  id={"packages"}
                >
                  <Packages />
                </div>
                <div
                  className={`tab-pane fade ${
                    activeTab === "travels" ? "show active" : ""
                  }`}
                  id={"travels"}
                >
                  <Travels />
                </div>
                <div
                  className={`tab-pane fade ${
                    activeTab === "reservations" ? "show active" : ""
                  }`}
                  id={"reservations"}
                >
                  <Reservations />
                </div>
                <div
                  className={`tab-pane fade ${
                    activeTab === "privacy" ? "show active" : ""
                  }`}
                  id={"privacy"}
                >
                  <Privacy />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsContent;
