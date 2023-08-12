import React, { useEffect, useState } from "react";
import "./Subscription.css";
import timer from "../../Icons/timer.png";
import razorpay from "../../Icons/razorpay.png";

const subscriptionData = [
  {
    title: "12 Month Subscription",
    total: "₹99",
    perMonth: "₹8",
    offer: "Offer expired",
  },
  {
    title: "12 Month Subscription",
    total: "₹179",
    perMonth: "₹15",
    offer: "Recommanded",
  },
  { title: "6 Month Subscription", total: "₹149", perMonth: "₹25" },
  { title: "3 Month Subscription", total: "₹99", perMonth: "₹33" },
];

const Subscription = () => {
  const [selectedSubscription, setSelectedSubscription] = useState(1);
  const [totalAmount, setTotalAmount] = useState(0);

  const handleSubscriptionClick = (index) => {
    if (index !== 0) {
      setSelectedSubscription(index);
    }
  };
  useEffect(() => {
    if (selectedSubscription === 1) {
      setTotalAmount(179);
    } else {
      const subscription = subscriptionData[selectedSubscription];
      setTotalAmount(parseInt(subscription.total.substring(1)));
    }
  }, [selectedSubscription]);

  return (
    <div className="subscription-container">
      <div className="step-indicato">
        <div>
          <p className="step-number">1</p>
          <p className="step-label">Sign Up</p>
        </div>
        <div>
          <p className="step-number-p">2</p>
          <p className="step-label">Subscribe</p>
        </div>
      </div>

      <div className="subscription-header">
        <p>Select your subscription plan</p>
      </div>
      {subscriptionData.map((subscription, index) => (
        <div
          className={
            index === 0
              ? "subscription-option default"
              : index === selectedSubscription
              ? "subscription-option active default-red"
              : "oief"
          }
          key={index}
          onClick={() => handleSubscriptionClick(index)}
        >
          {index === 0 || index === 1 ? (
            <div
              className={
                index === 0 || index === 1
                  ? "content-wrapper"
                  : "content-wrapper1"
              }
            >
              <input
                type="checkbox"
                className={index === 0 ? "custom-checkboxx" : "custom-checkbox"}
                checked={index === 0 || index === selectedSubscription} // Update the checked condition
                onChange={() => {}}
              />
              <div>
                <p
                  className={
                    index === 0 ? "content-wrapper2" : "content-wrapper3"
                  }
                >
                  {subscription.offer}
                </p>

                <p className="subscription-title ">{subscription.title}</p>
              </div>
            </div>
          ) : (
            <div
              className={
                index === 0 || index === 1
                  ? "content-wrapper"
                  : "content-wrapper1"
              }
            >
              <input
                type="checkbox"
                className="custom-checkbox"
                checked={index === selectedSubscription}
                onChange={() => {}}
              />
              <p>{subscription.title}</p>
            </div>
          )}
          <div className="subscription-details">
            <p>
              Total <span className="font-bold">{subscription.total} </span>
            </p>
            <p>
              <span className="font-bold"> {subscription.perMonth}</span> /mo
            </p>
          </div>
        </div>
      ))}
      <hr className="divider" />
      <div>
        <div className="total-fee">
          <p>Subscription Fee</p>
          <p>₹{totalAmount}</p>
        </div>

        <div className="offer-details">
          <div className="discount-info">
            <p>Limited time offer</p>

            <p>-₹30</p>
          </div>
          <div className="offer-timer">
            <div className="timer-icon">
              <img src={timer} alt="" />
              <p>Offer valid till 25th March 2023</p>
            </div>
          </div>
        </div>
        <div className="total-incl-gst">
          <p>
            <span className="font-bold">Total</span> (Incl. of 18% GST)
          </p>
          <p>
            <span className="font-bold">
              ₹{(totalAmount * 18) / 100 + totalAmount - 30}
            </span>
          </p>
        </div>
      </div>
      <div className="action-buttons">
        <button>CANCEL</button>
        <button>PROCESS TO PAY</button>
      </div>

      <div>
        <img src={razorpay} alt="" />
      </div>
    </div>
  );
};

export default Subscription;
