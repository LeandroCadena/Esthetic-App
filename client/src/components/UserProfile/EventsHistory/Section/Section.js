import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserReservations } from "../../../../Redux/actions/user.actions";
import Event from "./Events/Event";

function Section() {
  const [ID, setID] = useState("");
  const dispatch = useDispatch();
  const data = useSelector((state) => state.userReservations.data);
  useEffect(() => {
    if (localStorage.getItem("loggedSpatifyApp")) {
      const storageData = JSON.parse(localStorage.getItem("loggedSpatifyApp"));
      if (storageData.userFound.roles[0].name === "user") {
        setID(storageData.userFound._id);
      }
    }
  }, []);

  useEffect(() => {
    if (ID) {
      dispatch(getUserReservations(ID));
    }
  }, [ID]);

  let reservations = [];
  if (data && data.length) {
    reservations = data;
  }

  return (
    <div
      className="section-main
    "
    >
      <div className="event-container">
        {reservations.map((r, i) => (
          <Event r={r} key={i} />
        ))}
      </div>
    </div>
  );
}

export default Section;
