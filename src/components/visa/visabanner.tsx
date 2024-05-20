import {FC} from 'react'

const VisaBanner = () => {
  return (
    <>
      <div className="visa-banner">
        <div className="visa-banner-text w-75 mx-auto ">
          <h2 className="text-white">Ready to Explore the World?</h2>
          <h3 className="text-white my-3">
            Embark on your next adventure with ease! At ST Travels, we
            specialize in visa assistance services to help you unlock the doors
            to your dream destinations.
          </h3>
          <button
            className="btn btn-lower btn-curvy my-4"
          >
            Book a consultation
          </button>
        </div>
      </div>
    </>
  );
}

export default VisaBanner;