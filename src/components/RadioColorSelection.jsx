import React, { useState } from "react";

const RadioColorSelection = () => {
  const [radioSelection, setRadioSelection] = useState("red");

  const handleColor = (e) => {
    setRadioSelection(e.target.value);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Radio Color Selection</h1>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <label htmlFor="redColor">Red</label>
        <input
          type="radio"
          name="color"
          id="redColor"
          value={"red"}
          onChange={handleColor}
          defaultChecked
        />
        <label htmlFor="greenColor">Green</label>
        <input
          type="radio"
          name="color"
          id="greenColor"
          value={"green"}
          onChange={handleColor}
        />
      </div>
      <div
        className={`${radioSelection === "red" ? "redColor" : "greenColor"} `}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <h1>Change color by checking radio</h1>
      </div>
    </div>
  );
};

export default RadioColorSelection;
