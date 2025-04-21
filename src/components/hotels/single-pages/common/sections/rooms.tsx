"use client"; 
import Button from "@/components/common/btn";
import { Amenities, BookNow, ChooseRoom, Inclusion } from "@/constant/constant";
import { roomData } from "@/data/hotels/single-page";
import Img from "@/utils/BackgroundImageRatio";
import NoSsr from "@/utils/HOC/NoSsr";
import { FC } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";


const Rooms: FC<IRoomProps> = ({ tab }) => {
    const router = useRouter();

    const handleSubmit = () => {
          router.push("/en/shortlet/booking/booking-page");

    }

  return (
    <NoSsr>
      <div className="desc-box" id="rooms">
        <h4 className="content-title">choose room</h4>
        {tab && <h4 className="content-title">{ChooseRoom}</h4>}
        <div className="menu-part page-section">
          <table className="rooms-box">
            <tbody>
              {roomData.map((data: IRoomsDataProps, index) => (
                <tr key={index}>
                  <td>
                    <h6 className="room-title">{data.title}</h6>
                    <a href="#">
                      <Img src={data.img} className="img-fluid" alt="" />
                    </a>
                  </td>
                  <td>
                    <div className="room-detail">
                      <div className="row">
                        <div className="col-6 p-0">
                          <h6>{Amenities}</h6>
                          <div className="facility-detail">
                            <ul>
                              {data.amenities.map((amentiData, i) => (
                                <li key={i}>
                                  <Img
                                    src={amentiData.iconImg}
                                    className="img-fluid"
                                    alt=""
                                  />
                                  {amentiData.iconName}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div className="col-6 p-0">
                          <h6>{Inclusion}</h6>
                          <div className="facility-detail">
                            <ul>
                              {data.inclusion.map((inclusionData, i) => (
                                <li key={i}>
                                  <i className="fas fa-check"></i>{" "}
                                  {inclusionData.name}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="price-details">
                      <div>
                        <h6>
                          <del>${data.discount}</del>
                        </h6>
                        <h5>${data.price}</h5>
                        <span>per night</span>
                        {/* <Link href="/hotel/booking/booking-page"><Button btnClass="btn btn-rounded btn-sm color1" name={BookNow} /></Link> */}
                       
                          {/* <Button
                            onClick={handleSubmit}
                            type="submit"
                            btnClass="btn btn-rounded btn-sm color1"
                            name={BookNow}
                          /> */}
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </NoSsr>
  );
};

export default Rooms;