// "use client";
// import { FC, useEffect } from "react";
// // import "@/public/assets/scss/color1.scss";
// import Breadcrumb from "@/components/common/breadcrumb/page";
// import CustomLayout from "@/layouts/layout";
// import SearchBox from "@/components/common/search-box/page";
// import { useDispatch, useSelector } from "react-redux";
// import { AppDispatch, RootState } from "@/redux-toolkit/store";
// import GridView from "@/components/common/grid-page/grid/grid-view";
// import { getTourData } from "@/redux-toolkit/tour-api";

// const NoSidebar: FC = () => {
//   const dispatch = useDispatch<AppDispatch>();
//   const { data } = useSelector((state: RootState) => state.tour);

//   useEffect(() => {
//     dispatch(getTourData());
//   }, [dispatch]);

//   return (
//     <CustomLayout title="inner-page" userBgClass="user user-light" loader="pre">
//       <Breadcrumb title="Home" subTitle="hotels in dubai" bannerImg={"/assets/images/inner-pages/bg-bread.jpg"} />
//       <div className="search-panel" id="searchBar">
//       <div className="container">
//         <div className="row">
//           <div className="col-xl-10 offset-xl-1">
//             <div className="search-panel" id="searchBar">
//               <div className="search-section">
//                 <SearchBox />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//      <div className="right-filter-items">
//       <GridView size={3} gridType={"grid-view"} side={"no"} value={data} gridOption={true} topFilter={false} grid4Img={true} type={"tour"} latestFilter />
//      </div>
//     </CustomLayout>
//   );
// };

// export default NoSidebar;

"use client";
import { FC, useEffect } from "react";
 const NoSidebar: FC = () => {

   return (
    <>
    <div>
      No Sidebar
    </div>
    </>
  );
 };

export default NoSidebar;
