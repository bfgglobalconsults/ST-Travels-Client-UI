import { FC, useState, useCallback } from "react";
import { TabContent, TabPane } from "reactstrap";
// import Highlight from "./sections/highlight";
// import Gallery from "./sections/gallery";
import Location from "@/components/hotels/single-pages/common/sections/location";
import Tabs from "@/utils/HOC/tabs/page";
import { tourTabsData } from "@/data/tour/tour-filter";
import {
  baliGalleryData,
  dubaiGalleryData,
  galleryData,
  vietnamGalleryData,
} from "@/data/tour/single-page";
import Gallery from "@/components/tour/single-page/common/sections/gallery";
// import DubaiHighlight from "./DubaiHighlight";
import VietnamHighlight from "./VietnamHighlight";

const VietnamTabContentComponent: FC<ITabContentComponentProps> = ({ data }) => {
  const [activeTab, setActiveTab] = useState("1");
  const callback = useCallback(
    (tab: string) => {
      setActiveTab(tab);
    },
    [activeTab]
  );

  return (
    <div className={"menu-top menu-up"} id="searchBar">
      <Tabs callbackActive={callback} data={tourTabsData} />
      <TabContent
        activeTab={activeTab}
        className="description-details tab-content"
        id="top-tabContent"
      >
        <TabPane tabId="1">
          <VietnamHighlight />
        </TabPane>
        {/* <TabPane tabId="2" className="default-accordion">
          <Itinerary />
        </TabPane> */}
        <TabPane tabId="2">
          <Gallery galleryData={vietnamGalleryData} />
        </TabPane>
        {/* <TabPane tabId="4">
          <Accommodations data={data} />
        </TabPane> */}
        <TabPane tabId="3">
          <Location />
        </TabPane>
        {/* <TabPane tabId="6">
          <Review />
        </TabPane>
        <TabPane tabId="7">
          <Policy />
        </TabPane> */}
      </TabContent>
    </div>
  );
};

export default VietnamTabContentComponent;
