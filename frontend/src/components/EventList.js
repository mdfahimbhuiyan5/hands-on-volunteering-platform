import React, { useEffect, useState } from "react";
import axios from "axios";

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/events").then((response) => {
      setEvents(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Upcoming Events</h2>
      {events.map((event) => (
        <div key={event._id}>
          <h3>{event.title}</h3>
          <p>{event.description}</p>
          <p>📅 {new Date(event.date).toLocaleDateString()}</p>
          <p>📍 {event.location}</p>
        </div>
      ))}
    </div>
  );
};

export default EventList;
