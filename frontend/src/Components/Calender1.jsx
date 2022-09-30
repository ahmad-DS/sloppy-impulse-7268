import Calendar from "react-calendar";
import React, { useState } from "react";

export default function Calender1() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}
