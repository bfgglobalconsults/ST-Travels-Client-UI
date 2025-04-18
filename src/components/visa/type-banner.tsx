import { FC } from "react";

const TypeBanner = () => {
  return (
    <>
      <div className="custom-bg p-4 rounded-2">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="d-flex flex-row align-items-center gap-2">
                <div
                  className="rounded-circle bg-white custom-text d-flex justify-content-center align-items-center"
                  style={{ width: "40px", height: "40px" }}
                >
                  1
                </div>
                <div>
                  <p className="text-white mb-0">Tourist visa</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="d-flex flex-row align-items-center gap-2">
                <div
                  className="rounded-circle bg-white custom-text d-flex justify-content-center align-items-center"
                  style={{ width: "40px", height: "40px" }}
                >
                  2
                </div>
                <div>
                  <p className="text-white mb-0">Business Visa</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="d-flex flex-row align-items-center gap-2">
                <div
                  className="rounded-circle bg-white custom-text d-flex justify-content-center align-items-center"
                  style={{ width: "40px", height: "40px" }}
                >
                  3
                </div>
                <div>
                  <p className="text-white mb-0">Student Visa </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="d-flex flex-row align-items-center gap-2">
                <div
                  className="rounded-circle bg-white custom-text d-flex justify-content-center align-items-center"
                  style={{ width: "40px", height: "40px" }}
                >
                  4
                </div>
                <div>
                  <p className="text-white mb-0">Work Visa</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="d-flex flex-row align-items-center gap-2">
                <div
                  className="rounded-circle bg-white custom-text d-flex justify-content-center align-items-center"
                  style={{ width: "40px", height: "40px" }}
                >
                  5
                </div>
                <div>
                  <p className="text-white mb-0">Transit Visa</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TypeBanner;
