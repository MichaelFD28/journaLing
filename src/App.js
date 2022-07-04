import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import BG from "./images/journal_bg.png";
import Calendar from "./components/calendar/calendar";
import moment from "moment";

function App() {
  const [date, setDate] = useState(moment());
  return (
    <div className="App">
      <Header />
      <div className="bg-img">
        <img src={BG} alt="flowers" />
      </div>
      <div className="left-block">
        <Calendar date={date} setDate={setDate} />
      </div>
    </div>
  );
}

export default App;
