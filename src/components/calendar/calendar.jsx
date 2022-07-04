import React, { useState, useEffect } from "react";
import "./calendar.css";

import buildCalendar from "./buld";

export default function Calendar({ date, setDate }) {
  const [calendar, setCalendar] = useState([]);

  useEffect(() => {
    setCalendar(buildCalendar(date));
  }, [date]);

  function isSelected(day) {
    return date.isSame(day, "day");
  }

  function beforeToday(day) {
    return day.isBefore(new Date(), "day");
  }

  function isToday(day) {
    return day.isSame(new Date(), "day");
  }

  function dayStyles(day) {
    if (beforeToday(day)) return "before";
    if (isSelected(day)) return "selected";
    if (isToday(day)) return "today";
    return "";
  }

  return (
    <div className="calendar">
      {calendar.map((week) => (
        <div>
          {week.map((day) => (
            <div className="day" onClick={() => setDate(day)}>
              <div className={dayStyles(day)}>{day.format("D").toString()}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
