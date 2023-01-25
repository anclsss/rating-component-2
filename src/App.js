import React, { useState } from "react";
import ThankYou from "./ThankYou";

export default function App() {
  const [selected, setSelected] = useState(0);
  const [ifSubmitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Submitting rating: ${selected}`);
    setSubmitted(!ifSubmitted);
  };

  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  const ratingOptions = {
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
  };
  console.log(selected);
  return (
    <main>
      {!ifSubmitted && (
        <div className="page1">
          <div className="star-icon">
            <img src="icon-star.svg" alt="logo" />
          </div>
          <h1 className="title">How did we do?</h1>
          <p className="instructions">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <form onSubmit={handleSubmit}>
            <div className="rating-options">
              {Object.entries(ratingOptions).map(([key, value]) => (
                <label
                  key={key}
                  className={selected === value ? "selected" : ""}
                >
                  <input
                    type="radio"
                    value={value}
                    checked={selected === value}
                    onChange={handleChange}
                    className="hidden-radio"
                  />
                  {value}
                </label>
              ))}
            </div>
            <input
              type="submit"
              value="Submit"
              className={selected === 0 ? "submit-btn" : "submit-btn1"}
            />
          </form>
        </div>
      )}

      {ifSubmitted && <ThankYou rating={selected} />}
    </main>
  );
}
