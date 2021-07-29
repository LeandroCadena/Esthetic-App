import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserReservations,
  postUserReview,
} from "../../../Redux/actions/user.actions";

import { validate } from "../../../utils/validate-user-profile";
import "./FormReview.css";

const ID = window.localStorage.getItem("loggedSpatifyApp")
  ? JSON.parse(window.localStorage.getItem("loggedSpatifyApp"))
  : null;

function FormReview({ showModal, setShowModal, eventId }) {
  const dispatch = useDispatch();

  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    phone: false,
  });

  const [input, setInput] = useState({
    
      assessment: "",
      comments: "",
      event: eventId,
    
  });

  const modalRef = useRef();
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      //Si hago click afuera del modal (en el wrapper), se cierra el modal gracias a useRef
      setShowModal(false);
    }
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log("Esto es el input del formReview", input)
    dispatch(postUserReview({input}));
  };

  const handleInputChange = function (e) {
    setInput({
      ...input,
      [e.name]: e.value,
    });

    /*  var objError = validate({
      ...input,
      [e.name]: e.value,
    });
    setErrors(objError); */
  };

  return (
    <>
      {showModal && (
        <div className="wrapper" ref={modalRef} onClick={closeModal}>
          <div className="form-container">
            <form>
              <div className="form-element-a">
                <label>Puntuacion: </label>
                <input
                  className={errors.assesment && "danger"}
                  name="assessment"
                  type="number"
                  placeholder="Califique a su prestador un numero del 1 al 5"
                  onChange={(e) => handleInputChange(e.target)}
                />
                {errors.assesment && (
                  <p className="danger">{errors.assesment}</p>
                )}
              </div>
              <div>
                <label>Comentarios: </label>
                <input
                  className={errors.comments && "danger"}
                  name="comments"
                  type="text-area"
                  placeholder="deje un breve comentario"
                  onChange={(e) => handleInputChange(e.target)}
                />
                {errors.comments && <p className="danger">{errors.comments}</p>}
              </div>

              <button
                className="button"
                type="submit"
                onClick={(e) => onSubmitHandler(e)}
              >
                ENVIAR
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default FormReview;
