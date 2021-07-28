import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import {
  postUserAddresses,
  putUserData,
} from "../../../Redux/actions/user.actions";
import { GET_USERS } from "../../../utils/constants";
import { validate } from "../../../utils/validate-user-profile";
import "./Form.css";

function FormAddresses({ showModal, setShowModal }) {
  const [ID, setID] = useState("");
  const dispatch = useDispatch();
  const modalRef = useRef();
  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    phone: false,
  });

  useEffect(() => {
    if (window.localStorage.getItem("loggedSpatifyApp")) {
      const userData = JSON.parse(
        window.localStorage.getItem("loggedSpatifyApp")
      );
      if (userData.userFound.roles[0].name === "user") {
        setID(userData.userFound._id);
      }
    }
  }, []);

  const [input, setInput] = useState({
    name: "",
    country: "",
    state: "",
    city: "",
    address_1: "",
    address_details: "",
    zip_code: "",
    is_main: false
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      //Si hago click afuera del modal (en el wrapper), se cierra el modal gracias a useRef
      setShowModal(false);
    }
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (ID !== '') {
      dispatch(postUserAddresses({ ID, input }));
    }
  };

  const handleInputChange = function (e) {
    setInput({
      ...input,
      [e.name]: e.value,
    });
  };

  const handleMain = (e) => {
    setInput({
      ...input,
      is_main: e.target.checked,
    });
  };

  return (
    <>
      {showModal && (
        <div className="wrapper" ref={modalRef} onClick={closeModal}>
          <div className="form-container">
            <div className="form-element-a">
              <h3 className='modal-title'>NUEVA DIRECCIÓN</h3>
              <label>Referencia: </label>
              <input
                className={errors.name && "danger"}
                name="name"
                type="text"
                placeholder="Nombre para la dirección"
                onChange={(e) => handleInputChange(e.target)}
              />
              {errors.name && <p className="danger">{errors.name}</p>}
            </div>
            <div>
              <label>Pais: </label>
              <input
                className={errors.country && "danger"}
                name="country"
                type="text"
                placeholder="Ingrese el País"
                onChange={(e) => handleInputChange(e.target)}
              />
              {errors.country && <p className="danger">{errors.country}</p>}
            </div>

            <div>
              <label>Provincia: </label>
              <input
                className={errors.state && "danger"}
                name="state"
                type="text"
                placeholder="Ingrese la Provincia"
                onChange={(e) => handleInputChange(e.target)}
              />
              {errors.state && <p className="danger">{errors.state}</p>}
            </div>

            <div>
              <label>Ciudad: </label>
              <input
                className={errors.city && "danger"}
                name="city"
                type="text"
                placeholder="Ingrese la Ciudad"
                onChange={(e) => handleInputChange(e.target)}
              />
              {errors.city && <p className="danger">{errors.city}</p>}
            </div>
            <div>
              <label>Calle: </label>
              <input
                className={errors.address_1 && "danger"}
                name="address_1"
                type="text"
                placeholder="Ingrese la Calle"
                onChange={(e) => handleInputChange(e.target)}
              />
              {errors.address_1 && (
                <p className="danger">{errors.address_1}</p>
              )}
            </div>

            <div>
              <label>Detalles: </label>
              <input
                className={errors.address_details && "danger"}
                name="address_details"
                type="text"
                placeholder="Ingrese los detalles"
                onChange={(e) => handleInputChange(e.target)}
              />
              {errors.address_details && (
                <p className="danger">{errors.address_details}</p>
              )}
            </div>

            <div>
              <label>Codigo Postal: </label>
              <input
                className={errors.zip_code && "danger"}
                name="zip_code"
                type="text"
                placeholder="Ingrese el código postal"
                onChange={(e) => handleInputChange(e.target)}
              />
              {errors.zip_code && <p className="danger">{errors.zip_code}</p>}
            </div>
            <span className='main_address'>
              <label>Direccion Principal: </label>
              <input
                className={errors.zip_code && "danger"}
                name="is_main"
                type="checkbox"
                onChange={(e) => handleMain(e)}
              />
            </span>

            <div className='form-buttons'>
              <button
                className="button"
                onClick={() => setShowModal(false)}
              >
                CANCELAR
              </button>
              <button
                className="button"
                type="submit"
                onClick={(e) => onSubmitHandler(e)}
              >
                AGREGAR
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}

export default FormAddresses;
