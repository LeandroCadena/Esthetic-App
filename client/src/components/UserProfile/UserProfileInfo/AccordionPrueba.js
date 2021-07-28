import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteUserAddresses,
  editUserAddresses,
  getUserAddresses,
} from "../../../Redux/actions/user.actions";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { HiOutlinePencilAlt } from "react-icons/hi";
import "./AccordionPrueba.css";
import { BsTrash } from "react-icons/bs";
import useReactRouter from "use-react-router";
import FormEditAddresses from "../Form/FormEditAddresses";

const ID = window.localStorage.getItem("loggedSpatifyApp")
  ? JSON.parse(window.localStorage.getItem("loggedSpatifyApp"))
  : null;

function AccordionPrueba() {
  const [editAddressModal, setEditAddressModal] = useState(false);
  const dispatch = useDispatch();
  const userAddresses = useSelector((state) => state.userAddresses.data);

  let addresses = [];
  if (userAddresses && userAddresses.length) {
    addresses = userAddresses;
  }

  useEffect(() => {
    dispatch(getUserAddresses(ID.userFound._id));
  }, []);

  const deleteAddress = (addressId) => {
    const userId = ID.userFound._id;
    dispatch(deleteUserAddresses({ userId, addressId }));
  };

  const editAddress = () => {
    setEditAddressModal((prev) => !prev);
  };

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
        {addresses.map((a, i) => (
          <div className="accordion-item" onClick={() => toggle(i)}>
            <div className="accordion-title">
              <p>
                <b>Referencia:</b> {a.name}
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
              {a && (
                <div>
                  <p className="p">Pais: {a.country}</p>
                  <p className="p">Provincia: {a.state}</p>
                  <p className="p">Ciudad: {a.c}</p>
                  <p className="p">Direccion: {a.address_1}</p>
                  <p className="p">Aclaracion: {a.address_details}</p>
                  <p className="p">Codigo Postal: {a.zip_code}</p>
                  <p className="p">Direccion Principal: {a.is_main}</p>
                </div>
              )}
              <div className="accordion-item-options">
                <i className="trash-icon" onClick={() => deleteAddress(a._id)}>
                  <BsTrash />
                </i>
                <i className="edit-icon" onClick={() => editAddress(a._id)}>
                  <HiOutlinePencilAlt />
                </i>
              </div>
              <FormEditAddresses
                addressId={a._id}
                editAddressModal={editAddressModal}
                setEditAddressModal={setEditAddressModal}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AccordionPrueba;
