import React from "react";

function TimerComponent() {
  const [time, setTime] = React.useState(0);
  console.log("Component Update");
  React.useEffect(function () {
    setTime(time + 1);
  }, []);

  return (
    <div>
      <h3>{time}초</h3>
      <button>1초씩 올려주세요.</button>
    </div>
  );
}

export default TimerComponent;
