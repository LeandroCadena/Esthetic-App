import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteUserAddresses,
  editUserAddresses,
  getUserAddresses,
  getUserReservations,
} from "../../../Redux/actions/user.actions";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { HiOutlinePencilAlt } from "react-icons/hi";
import "./AccordionReservations.css";
import { MdRateReview } from "react-icons/md";
import useReactRouter from "use-react-router";
import FormReview from "../Form/FormReview";
import "./ReservationsToRate.css";

function ReservationsToRate() {
  const [ID, setID] = useState("");
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);


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

  /* const deleteAddress = (addressId) => {
    const userId = ID.userFound._id;
    dispatch(deleteUserAddresses({ userId, addressId }));
  }; */

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
        {console.log(reservations)}
        {reservations.map((r, i) => (
          <>
            {r.isActive === false && r.ratingAlert === true && (
              <div className="accordion-item" onClick={() => toggle(i)}>
                {console.log()}
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
                      </p>

                      <button className="review-button" onClick={setShowModal}>
                        Calificar al Prestador
                        <i className="review-icon">
                          <MdRateReview />
                        </i>
                      </button>

                      <FormReview
                      eventId={r._id}
                        showModal={showModal}
                        setShowModal={setShowModal}

                      />

                      {/* /* onClick={() => deleteAddress(a._id)} */}
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

export default ReservationsToRate;
