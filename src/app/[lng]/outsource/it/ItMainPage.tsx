"use client"
import React, { useEffect, useState } from 'react'
import { Dialog, Transition } from "@headlessui/react";
import { toast } from "react-hot-toast";
import { useForm } from '@formspree/react';

const ItMainPage = () => {
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
                      Unlock the Power of IT Outsourcing: Drive Efficiency,
                      Innovation, and Growth
                    </h6>
                    <p>
                      In today's fast-paced digital world, businesses face the
                      challenge of staying ahead of the competition while
                      managing costs and resources effectively. IT outsourcing
                      offers a strategic solution to address these challenges,
                      enabling companies to leverage specialized expertise,
                      reduce operational costs, and focus on their core business
                      functions. Whether you're a startup looking to scale
                      quickly or an established enterprise seeking to optimize
                      your IT infrastructure, we can be the key to unlocking
                      your business's full potential.
                    </p>
                    <h6>Why Choose IT Outsourcing?</h6>
                    <p>
                      By leveraging our services, businesses can significantly
                      reduce overhead costs associated with hiring, training,
                      and maintaining in-house teams. You pay only for the
                      services you need, allowing for better budget management.
                    </p>
                    <p>
                      Let us handle your IT infrastructure, from server
                      maintenance to network management, ensuring optimal
                      performance and uptime.
                    </p>

                    <p className="bottom-space">
                      With our IT services, you can benefit from round-the-clock
                      support and monitoring. This ensures that your systems are
                      always up and running, minimizing downtime and keeping
                      your business operational.
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
              specialize in various services to help you unlock the
              doors to your dream destinations.
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
}

export default ItMainPage