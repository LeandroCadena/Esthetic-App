import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteUserAddresses,
  deleteUserReservation,
  editUserAddresses,
  getUserAddresses,
  getUserReservations,
} from "../../../Redux/actions/user.actions";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { HiOutlinePencilAlt } from "react-icons/hi";
import "./AccordionReservations.css";
import { GiCancel } from "react-icons/gi";

function AccordionReservations() {
  const [ID, setID] = useState("");
  const dispatch = useDispatch();

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

  const data = useSelector((state) => state.userReservations.data);
  let reservations = [];
  if (data && data.length) {
    reservations = data;
  }

  const deleteReservation = (reservationId) => {
    alert("El turno ha sido borrado con exito");
    const event = reservationId
    dispatch(deleteUserReservation({ event }));
  };

  /* const editAddress = () => {
      setEditAddressModal(prev => !prev)
  } */

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  const [selected, setSelected] = useState(null);
  return (
    <div className="accordion-wrapper">
      <div className="accordion">
        {reservations.map((r, i) => (
          <>
          {/* {console.log("Esto es el mapeo de todas las reservas", r.isActive)} */}
            {r.isActive === true && (
              <div className="accordion-item" onClick={() => toggle(i)}>
                <div className="accordion-title">
                  <p>
                    <b>Servicio Contratado:</b> {r.service.name}
                  </p>
                  <span>
                    {selected == i ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </span>
                </div>
                <div
                  className={
                    selected == i
                      ? `accordion-description-show`
                      : `accordion-description`
                  }
                >
                  {r && (
                    <div>
                      <p className="p">Dia: {r.date}</p>
                      <p className="p">Hora: {r.hour} Hs.</p>
                      <p className="p">Precio: ${r.service.price}</p>
                      <p className="p">
                        Prestador: {r.provider.firstName} {r.provider.lastName}
                        <button className="cancel-button">
                          Cancelar Turno
                          <i
                            className="cancel-icon"
                            onClick={() => deleteReservation(r._id)}
                          >
                            <GiCancel />
                          </i>
                        </button>
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  );
}

export default AccordionReservations;
