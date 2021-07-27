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

const ID = window.localStorage.getItem("loggedSpatifyApp")
  ? JSON.parse(window.localStorage.getItem("loggedSpatifyApp"))
  : null;

function FormAddresses({ showModal, setShowModal }) {
  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    phone: false,
  });

  const [input, setInput] = useState({
    addresses: {
      name: "",
      country: "",
      state: "",
      city: "",
      address_1: "",
      address_details: "",
      zip_code: "",
      is_main: false,
      provider: "",
      user: ID.userFound._id,
    },
  });

  const [userId, setUserId] = useState("");

  const dispatch = useDispatch();
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      //Si hago click afuera del modal (en el wrapper), se cierra el modal gracias a useRef
      setShowModal(false);
    }
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const userId = ID.userFound._id;
    dispatch(postUserAddresses({ userId, input }));
  };

  useEffect(() => {
    if (window.localStorage.getItem("loggedSpatifyApp")) {
      const userData = JSON.parse(
        window.localStorage.getItem("loggedSpatifyApp")
      );
      if (userData.userFound.roles[0].name === "user") {
        setUserId(userData.userFound._id);
      }
    }
  }, []);

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
                <label>Referencia: </label>
                <input
                  className={errors.name && "danger"}
                  name="name"
                  type="text"
                  placeholder="Ingrese su direccion"
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
                  placeholder="Ingrese su direccion"
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
                  placeholder="Ingrese su direccion"
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
                  placeholder="Ingrese su direccion"
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
                  placeholder="Ingrese su direccion"
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
                  placeholder="Ingrese su direccion"
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
                  placeholder="Ingrese su direccion"
                  onChange={(e) => handleInputChange(e.target)}
                />
                {errors.zip_code && <p className="danger">{errors.zip_code}</p>}
              </div>
              <div>
                <label>Direccion Principal: </label>
                <input
                  className={errors.zip_code && "danger"}
                  name="is_main"
                  type="checkbox"
                  onChange={(e) => handleInputChange(e.target)}
                />
              </div>

              <button
                className="button"
                type="submit"
                onClick={(e) => onSubmitHandler(e)}
              >
                AGREGAR
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default FormAddresses;
