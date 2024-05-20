import {FC} from 'react'

const TextBanner = () => {
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
                  <p className="text-white mb-0">Initial Consultations</p>
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
                  <p className="text-white mb-0">Documents Review</p>
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
                  <p className="text-white mb-0">Visa application </p>
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
                  <p className="text-white mb-0">Await visa outcome</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TextBanner;