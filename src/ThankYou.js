import React from "react";

export default function ThankYou(props) {
  return (
    <div className="page2">
      <img
        src="illustration-thank-you.svg"
        alt="thank you"
        className="thank-you-image"
      />
      <div className="rating-result-text">
        <h2>You have selected {props.rating}/5</h2>
      </div>
      <h3 className="title">Thank you!</h3>
      <p className="instructions-b">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </div>
  );
}
