import React, { useState } from "react";

const App = () => {
  const backgroundColor = "#f2f5fd";
  const [bg, setBg] = useState(backgroundColor);
  const [name, setName] = useState("Click Me");

  const bgColor = () => {
    //console.log("Hello");
    let newBg = "white";
    setBg(newBg);
    setName("Clicked");
  };
  const bgBack = () => {
    setBg(backgroundColor);
    setName("Done");
  };

  return (
    <>
      <div style={{ backgroundColor: bg }}>
        <button className="btn" onMouseEnter={bgColor} onDoubleClick={bgBack}>
          {name}
        </button>
      </div>
    </>
  );
};

export default App;
