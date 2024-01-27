import React from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import * as bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";

// import "@fullcalendar/core/main.css";
// import "@fullcalendar/daygrid/main.css";
// import "@fullcalendar/timegrid/main.css";

// import events from "./events";

export default function MyCalendar() {
  const events = [
    {
      title: "Doctors Apt",
      start: "2024-01-05T08:00:00",
      end: "2024-01-05T09:00:00",
    },
  ];

  return (
    <div className="App">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        defaultView="dayGridMonth"
        headerToolbar={{
          start: "today prev,next", // will normally be on the left. if RTL, will be on the right
          center: "title",
          end: "dayGridMonth, timeGridWeek, timeGridDay", // will normally be on the right. if RTL, will be on the left
        }}
        events={events}
        eventDidMount={(info) => {
          return new bootstrap.Popover(info.el, {
            title: info.event.title,
            placement: "auto",
            trigger: "hover",
            customClass: "popoverStyle",
            content:
              "<p>Find the Tardis</p>",
            html: true,
          });
        }}
      />
    </div>
  );
}
