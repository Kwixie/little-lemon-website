import React from "react";
import ReservationForm from "../sections/ReservationForm";
import { fetchAPI } from "../../bookingsAPI";
import { useState } from "react";

const ReservationPage = () => {
  const [availableTimes, setAvailableTimes] = useState(null);

  return (
    <div>
      <h1>reservation</h1>
      <ReservationForm />
    </div>
  );
};

export default ReservationPage;
