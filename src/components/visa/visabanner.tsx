"use client"
import {FC, useState, useEffect} from 'react';
import {
  Dialog,
  Transition,
} from "@headlessui/react";
import { useForm, ValidationError } from "@formspree/react";
import { toast } from "react-hot-toast";



const VisaBanner = () => {
   let [isOpen, setIsOpen] = useState(false);
     const [isSubmitting, setIsSubmitting] = useState(false);


    const [state, handleSubmit] = useForm("mrbzqprv");

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
      <div className="visa-banner">
        <div className="visa-banner-text w-75 mx-auto ">
          <h2 className="text-white">Ready to Explore the World?</h2>
          <h3 className="text-white my-3">
            Embark on your next adventure with ease! At ST Travels, we
            specialize in visa assistance services to help you unlock the doors
            to your dream destinations.
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
                        Apply for Visa Assistance
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
                                Email Address
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
                              <label htmlFor="location" className="input-label">
                                Location
                              </label>
                              <input
                                type="text"
                                id="location"
                                name="location"
                                className="input-field"
                                placeholder="Abuja, Nigeria"
                                required
                              />
                            </div>
                            <div className="grid-item">
                              <label
                                htmlFor="destination_name"
                                className="input-label"
                              >
                                Destination of Travel
                              </label>
                              <input
                                type="text"
                                id="destination_name"
                                name="destination_name"
                                className="input-field"
                                placeholder="Destination"
                                required
                              />
                            </div>
                            <div className="grid-item">
                              <label
                                htmlFor="message_subject"
                                className="input-label"
                              >
                                Subject
                              </label>
                              <input
                                type="text"
                                id="message_subject"
                                name="message_subject"
                                className="input-field"
                                placeholder="Enter Message Subject"
                                required
                              />
                            </div>
                            <div className="grid-item grid-span-2">
                              <textarea
                                className="form-control"
                                id="message"
                                name="message"
                                rows={4}
                                placeholder="Enter Message Here...."
                              ></textarea>
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
    </>
  );
}

export default VisaBanner;