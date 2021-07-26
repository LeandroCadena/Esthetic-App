import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserReservations } from "../../../Redux/actions/user.actions";
import AccordionReservations from "./AccordionReservations";
import "./UserReservations.css";

function UserReservations() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userReservations.data);
  const [ID, setID] = useState('');

  useEffect(() => {
    if (localStorage.getItem('loggedSpatifyApp')) {
      const storageData = JSON.parse(localStorage.getItem('loggedSpatifyApp'))
      if (storageData.userFound.roles[0].name === "user") {
        setID(storageData.userFound._id)
      }
    }
  })

  console.log("Esto es userData de User Reservations", userData)

  useEffect(() => {
    if (ID !== '') {
      dispatch(getUserReservations(ID));
    }
  }, []);
  return (
    <div className="booking-container">
      <div className="booking-data">
        <h1 className="h1"> MIS TURNOS</h1>
        <h3 className="h3">Proximos Turnos {userData && userData._id}</h3>
        <div className="booking-info">
          <p>Servicio: Manicura</p>
          <p>Dia: Viernes 30/70/2021</p>
          <p>Hora: 16hs</p>
          <p>Prestador: Toni Tralice</p>
        </div>
      </div>
    </div>
  );
}

export default UserReservations;
