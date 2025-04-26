import React, { useEffect, useState } from "react";

const ClockComponent = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(timerID);
  }, []);

  const hours = date.getHours() % 12 || 12;
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");
  const period = date.getHours() >= 12 ? "PM" : "AM";

  const fullDate = date.toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="name">
      {/* Name */}

      {/* Clock Card */}
      <div className="clock">
        {/* Time with seconds */}
        <div className="second">
          <h1 className="hour">
            {hours}:{minutes}:{seconds}
            <span className="timeperiod">{period}</span>
          </h1>
        </div>

        {/* Date */}
        <div className="fulldate">{fullDate}</div>
      </div>
    </div>
  );
};

export default ClockComponent;
