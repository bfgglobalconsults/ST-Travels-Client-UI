"use client";
import React, { useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { toast } from "react-hot-toast";
import { useForm } from "@formspree/react";

const FinanceMainPage = () => {
  let [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [state, handleSubmit] = useForm("xldrvpyj");

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true);
    handleSubmit(event).then(() => {
      setIsSubmitting(false);
    });
  };

  useEffect(() => {
    if (state.succeeded && !isSubmitting) {
      toast.success("Form Submitted Successfully", {
        duration: 7000,
        position: "top-right",
      });
      setIsOpen(false); // Close the dialog on successful submission
    } else if (state.errors && !isSubmitting) {
      const errorMessage = Array.isArray(state.errors)
        ? state.errors.map((error) => error.message).join(", ")
        : "There was an error submitting the form. Please try again.";

      toast.error(errorMessage, {
        duration: 7000,
        position: "top-right",
      });
    }
  }, [state.succeeded, state.errors, isSubmitting]);

  return (
    <>
      <div>
        <div className="col-lg-8 mx-auto">
          <div className="single-section">
            <div className="description-section">
              <div className="description-details">
                <div className="menu-part about">
                  <div className="about-sec ">
                    <h6>
                      Transform Your Business with Accounting and Finance
                      Outsourcing
                    </h6>
                    <p>
                      In the rapidly evolving business environment, staying on
                      top of your finances is crucial. Managing accounting and
                      finance functions in-house can be time-consuming, costly,
                      and prone to errors. Outsourcing these services allows you
                      to focus on your core business while ensuring your
                      financial operations are handled by professionals. Whether
                      you are a small business or a large corporation,
                      accounting and finance outsourcing can provide the
                      expertise, efficiency, and accuracy you need to drive
                      growth.
                    </p>
                    <h6>Why Choose Us?</h6>
                    <p>
                      Our team consists of certified accountants and financial
                      experts with years of experience in various industries. We
                      are dedicated to delivering top-notch services tailored to
                      your business needs.
                    </p>
                    <p>
                      We understand that every business is unique. That's why we
                      offer customized accounting and finance solutions that fit
                      your specific requirements and goals.
                    </p>

                    <p className="bottom-space">
                      With a proven track record of helping businesses improve
                      their financial operations, we are a trusted partner in
                      accounting and finance outsourcing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* banner */}
        <div className="source-banner">
          <div className="source-banner-text w-75 mx-auto ">
            <h2 className="text-white">Ready to Explore the World?</h2>
            <h3 className="text-white my-3">
              Embark on your next adventure with ease! At ST Travels, we
              specialize in various services to help you unlock the doors to
              your dream destinations.
            </h3>
            <button onClick={open} className="btn btn-lower btn-curvy my-4">
              Book a consultation
            </button>
            <Transition appear show={isOpen}>
              <Dialog as="div" className="dialog-container" onClose={close}>
                <Transition.Child
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="dialog-overlay" />
                </Transition.Child>

                <div className="dialog-wrapper">
                  <div className="dialog-content">
                    <Transition.Child
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <Dialog.Panel className="dialog-panel">
                        <Dialog.Title as="h3" className="dialog-title">
                          Apply for Outsourcing Consultation
                        </Dialog.Title>
                        <form onSubmit={onSubmit}>
                          <div className="dialog-body">
                            <div className="grid-container">
                              <div className="grid-item">
                                <label
                                  htmlFor="full_name"
                                  className="input-label"
                                >
                                  Full name
                                </label>
                                <input
                                  type="text"
                                  id="full_name"
                                  name="full_name"
                                  className="input-field"
                                  placeholder="John"
                                  required
                                />
                              </div>
                              <div className="grid-item">
                                <label htmlFor="email" className="input-label">
                                  Business Email Address
                                </label>
                                <input
                                  type="email"
                                  id="email"
                                  name="email"
                                  className="input-field"
                                  required
                                />
                              </div>
                              <div className="grid-item">
                                <label htmlFor="phone" className="input-label">
                                  Phone number
                                </label>
                                <input
                                  type="tel"
                                  id="phone"
                                  name="phone"
                                  className="input-field"
                                  placeholder="123-45-678"
                                  // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                                  required
                                />
                              </div>
                              <div className="grid-item">
                                <label
                                  htmlFor="company"
                                  className="input-label"
                                >
                                  Company
                                </label>
                                <input
                                  type="text"
                                  id="company"
                                  name="company"
                                  className="input-field"
                                  placeholder="Company Name"
                                  required
                                />
                              </div>
                              <div className="grid-item">
                                <label
                                  htmlFor="location"
                                  className="input-label"
                                >
                                  Location
                                </label>
                                <input
                                  type="text"
                                  id="location"
                                  name="location"
                                  className="input-field"
                                  placeholder="Enter Location"
                                  required
                                />
                              </div>

                              <div className="grid-item">
                                <label
                                  htmlFor="outsource_option"
                                  className="input-label"
                                >
                                  Roles you want to outsource?
                                </label>
                                <input
                                  type="text"
                                  id="outsource_option"
                                  name="outsource_option"
                                  className="input-field"
                                  placeholder="roles you want to outsource"
                                  required
                                />
                              </div>
                            </div>
                          </div>
                          <div className="dialog-footer">
                            <button
                              type="submit"
                              className="btn btn-lower btn-curvy my-4"
                              disabled={isSubmitting}
                            >
                              Submit
                            </button>
                          </div>
                        </form>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition>
          </div>
        </div>
        {/* banner end */}
      </div>
    </>
  );
};

export default FinanceMainPage;
