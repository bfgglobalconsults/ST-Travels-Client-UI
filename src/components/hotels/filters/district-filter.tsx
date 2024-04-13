import { districtData } from "@/data/hotels/filter-data";
import { RootState } from "@/redux-toolkit/store";
import React, { useState, ChangeEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const DistrictFilter: React.FC = () => {
  const [show, setShow] = useState(true);
  const dispatch = useDispatch();
  const districtStatus = useSelector((state: RootState) => state.hotelFilterReducer.districtStatus);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      dispatch({ type: "districtStatus", payload: [...districtStatus, value] });
    } else {
      dispatch({ type: "districtStatus", payload: districtStatus.filter((selectedValue: string) => selectedValue !== value) });
    }
  };

  useEffect(() => {
    dispatch({ type: "districtStatus", payload: districtStatus });
  }, [districtStatus]);

  return (
    <div
      className="filter-block"
      onClick={() => {
        setShow(!show);
      }}>
      <div className={`collection-collapse-block ${show ? "open" : ""}`}>
        <h6 className="collapse-block-title" onClick={() => setShow(!show)}>
          district
        </h6>
        <div className={`collection-collapse-block-content ${!show ? "d-none" : ""}`}>
          <div className="collection-brand-filter">
            {districtData.map((data: IFacilityProps,index) => {
              return (
                <div className="form-check collection-filter-checkbox" key={index}>
                  <input type="checkbox" className="form-check-input" id={data.type} value={data.type} checked={districtStatus.includes(data.type)} onChange={handleCheckboxChange} />
                  <label className="form-check-label" htmlFor={data.type}>
                    {data.type}
                  </label>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
const MemoizedDistrictFilter = React.memo(DistrictFilter);

export default MemoizedDistrictFilter;
