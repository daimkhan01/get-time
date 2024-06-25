import React, { useState } from "react";

const App = () => {
  ///set current time///

  let currTime = new Date().toLocaleTimeString();
  let [crTime, setCtime] = useState(currTime);

  let UpdateTime = () => {
    currTime = new Date().toLocaleTimeString();
    setCtime(currTime);
  };
  setInterval(UpdateTime, 1000);

  ///set current date///
  let currDate = new Date().toLocaleDateString();

  ///set greeting with day effect///
  let curDate = new Date();
  curDate = curDate.getHours();
  let greeting = "";
  const cssStyle = {};

  if (curDate >= 1 && curDate < 12) {
    greeting = "Good Morning !";
    cssStyle.color = "green";
  } else if (curDate >= 12 && curDate < 19) {
    greeting = "Good Afternoon !";
    cssStyle.color = "orange";
  } else {
    greeting = "Good Night !";
    cssStyle.color = "blue";
  }

  return (
    <>
      <div className="main_state">
        <h1 className="count_num"> {crTime} </h1>
        <h1 className="count_date">{currDate}</h1>
        <h1 className="count_date">
          <span className="greeting_style" style={cssStyle}>
            {greeting}
          </span>
          Muhammad Daim
        </h1>
      </div>
    </>
  );
};

export default App;
