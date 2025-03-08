import React, { useEffect, useState } from "react";
import axios from "axios";

const VolunteerRequestList = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/volunteer-requests").then((response) => {
      setRequests(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Community Help Requests</h2>
      {requests.map((request) => (
        <div key={request._id}>
          <h3>{request.title}</h3>
          <p>{request.description}</p>
          <p>🚨 Urgency: {request.urgency}</p>
        </div>
      ))}
    </div>
  );
};

export default VolunteerRequestList;
