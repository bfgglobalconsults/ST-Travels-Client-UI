
// "use client";

// import { useState, useEffect, useRef } from "react";
// import { loadScript, PayPalScriptOptions } from "@paypal/paypal-js";

// interface PayPalCheckoutProps {
//   baseAmount: number; // Price per item
// }

// const PayPalCheckout = ({ baseAmount }: PayPalCheckoutProps) => {
//   const paypalRef = useRef<HTMLDivElement | null>(null);
//   const [quantity, setQuantity] = useState(1);
//   const totalAmount = (quantity * baseAmount).toFixed(2);

//   // Ensure this variable starts with NEXT_PUBLIC_ to be accessible on the client side
//   const payPalClientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;

//   useEffect(() => {
//     // Load the PayPal script
//     const loadPayPalScript = async () => {
//       if (!payPalClientId) {
//         console.error("PayPal client ID is not defined.");
//         return;
//       }

//       try {
//         const options: PayPalScriptOptions = {
//           clientId: payPalClientId,
//           currency: "USD",
//           components: "buttons",
//           enableFunding: "card",
//           disableFunding: "credit",
//         };

//         const paypal = await loadScript(options);

//         if (!paypal || !paypal.Buttons) {
//           console.error("PayPal script failed to load or is missing Buttons.");
//           return;
//         }

//         if (paypalRef.current) {
//           paypal
//             .Buttons({
//               style: {
//                 layout: "vertical",
//               },
//               createOrder: (data, actions) => {
//                 return actions.order.create({
//                   intent: "CAPTURE",
//                   purchase_units: [
//                     {
//                       amount: {
//                         currency_code: "USD",
//                         value: totalAmount,
//                       },
//                     },
//                   ],
//                 });
//               },
//               onApprove: async (data:any, actions:any) => {
//                 try {
//                   const order = await actions.order.capture();
//                   const payerName = order.payer.name.given_name || "Customer";
//                   alert(`Transaction completed by ${payerName}`);
//                 } catch (error) {
//                   console.error("Error capturing order: ", error);
//                 }
//               },
//               onError: (err) => {
//                 console.error("PayPal Checkout error", err);
//               },
//             })
//             .render(paypalRef.current);
//         }
//       } catch (error) {
//         console.error("Failed to load PayPal script: ", error);
//       }
//     };

//     loadPayPalScript();

//     // Cleanup function to avoid memory leaks
//     return () => {
//       if (paypalRef.current) {
//         paypalRef.current.innerHTML = ""; // Clear the ref on component unmount
//       }
//     };
//   }, [totalAmount, payPalClientId, quantity]); // Include quantity in the dependency array

//   return (
//     <div className="checkout">
//       <label>
//         Quantity:
//         <input
//           type="number"
//           min="1"
//           value={quantity}
//           onChange={(e) => {
//             const value = parseInt(e.target.value);
//             setQuantity(value > 0 ? value : 1); // Ensure quantity is always at least 1
//           }}
//         />
//       </label>
//       <p>Total: ${totalAmount}</p>
//       <div ref={paypalRef} />
//     </div>
//   );
// };

// export default PayPalCheckout;

// second code part

"use client";

import { useState, useEffect, useRef } from "react";
import { loadScript } from "@paypal/paypal-js";

interface PayPalCheckoutProps {
  baseAmount: number; 
}

const PayPalCheckout = ({ baseAmount }: PayPalCheckoutProps) => {
  const paypalRef = useRef<HTMLDivElement | null>(null);
  const [quantity, setQuantity] = useState(0);
  const [isScriptLoaded, setScriptLoaded] = useState(false);
  const totalAmount = (quantity * baseAmount).toFixed(2);

  const payPalClientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;

  useEffect(() => {
    const loadPayPalScript = async () => {
      if (!payPalClientId) {
        console.error("PayPal client ID is not defined.");
        return;
      }

      try {
        const paypal = await loadScript({
          clientId: payPalClientId,
          currency: "USD",
          components: "buttons",
          enableFunding: "card",
          disableFunding: "credit",
        });

        if (!paypal || !paypal.Buttons) {
          console.error("PayPal script failed to load or is missing Buttons.");
          return;
        }

        setScriptLoaded(true); 

        if (paypalRef.current) {
          paypal
            .Buttons({
              style: {
                layout: "vertical",
              },
              createOrder: (data, actions) => {
                return actions.order.create({
                  intent: "CAPTURE",
                  purchase_units: [
                    {
                      amount: {
                        currency_code: "USD",
                        value: totalAmount,
                      },
                    },
                  ],
                });
              },
              onApprove: async (data:any, actions:any) => {
                try {
                  const order = await actions.order.capture();
                  const payerName = order.payer.name.given_name || "Customer";
                  alert(`Transaction completed by ${payerName}`);
                } catch (error) {
                  console.error("Error capturing order: ", error);
                }
              },
              onError: (err) => {
                console.error("PayPal Checkout error", err);
              },
            })
            .render(paypalRef.current);
        }
      } catch (error) {
        console.error("Failed to load PayPal script: ", error);
      }
    };

    loadPayPalScript();

    // Cleanup function to avoid memory leaks
    return () => {
      if (paypalRef.current) {
        paypalRef.current.innerHTML = ""; // Clear the ref on component unmount
      }
    };
  }, [totalAmount, payPalClientId, quantity]); // Include quantity in the dependency array

  return (
    <div className="checkout">
      <label>
        Quantity:
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => {
            const value = parseInt(e.target.value);
            setQuantity(value > 0 ? value : 1); // Ensure quantity is always at least 1
          }}
        />
      </label>
      <p>Total: ${totalAmount}</p>
      {isScriptLoaded ? <div ref={paypalRef} /> : <p>Loading PayPal...</p>}
    </div>
  );
};

export default PayPalCheckout;

// const PayPalCheckout = ({ baseAmount }: PayPalCheckoutProps) => {
//   const paypalRef = useRef<HTMLDivElement | null>(null);
//   const isButtonRendered = useRef(false); // Track button rendering state
//   const [quantity, setQuantity] = useState(0);
//   const [isScriptLoaded, setScriptLoaded] = useState(false);
//   const totalAmount = (quantity * baseAmount).toFixed(2);

//   const payPalClientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;

//   useEffect(() => {
//     const loadPayPalScript = async () => {
//       if (!payPalClientId) {
//         console.error("PayPal client ID is not defined.");
//         return;
//       }

//       try {
//         const paypal = await loadScript({
//           clientId: payPalClientId,
//           currency: "USD",
//           components: "buttons",
//           enableFunding: "card",
//           disableFunding: "credit",
//         });

//         if (!paypal || !paypal.Buttons) {
//           console.error("PayPal script failed to load or is missing Buttons.");
//           return;
//         }

//         setScriptLoaded(true);

//         if (paypalRef.current && !isButtonRendered.current) {
//           paypal
//             .Buttons({
//               style: {
//                 layout: "vertical",
//               },
//               createOrder: (data:any, actions:any) => {
//                 return actions.order.create({
//                   intent: "CAPTURE",
//                   purchase_units: [
//                     {
//                       amount: {
//                         currency_code: "USD",
//                         value: totalAmount,
//                       },
//                     },
//                   ],
//                 });
//               },
//               onApprove: async (data:any, actions:any) => {
//                 try {
//                   const order = await actions.order.capture();
//                   const payerName = order.payer.name.given_name || "Customer";
//                   alert(`Transaction completed by ${payerName}`);
//                 } catch (error) {
//                   console.error("Error capturing order: ", error);
//                 }
//               },
//               onError: (err:any) => {
//                 console.error("PayPal Checkout error", err);
//               },
//             })
//             .render(paypalRef.current);
//           isButtonRendered.current = true; // Mark the button as rendered
//         }
//       } catch (error) {
//         console.error("Failed to load PayPal script: ", error);
//       }
//     };

//     loadPayPalScript();

//     return () => {
//       // Cleanup if necessary
//       if (paypalRef.current) {
//         paypalRef.current.innerHTML = "";
//         isButtonRendered.current = false; // Reset button state
//       }
//     };
//   }, [payPalClientId]); // Only load the script on mount

//   return (
//     <div className="checkout">
//       <label>
//         Quantity:
//         <input
//           type="number"
//           min="1"
//           value={quantity}
//           onChange={(e) => {
//             const value = parseInt(e.target.value, 10);
//             setQuantity(value > 0 ? value : 1); // Ensure quantity is at least 1
//           }}
//         />
//       </label>
//       <p>Total: ${totalAmount}</p>
//       {isScriptLoaded ? <div ref={paypalRef} /> : <p>Loading PayPal...</p>}
//     </div>
//   );
// };

// export default PayPalCheckout;


