import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProviderDetails } from "../../Redux/actions/actions";
import "./ProviderDetails.scss";
import { useParams } from "react-router-dom";
import def_est_img from "../../img/default_estilista.jpg";
import ProviderServices from "../ProviderServices/ProviderServices";

const ProviderDetails = () => {
  const dispatch = useDispatch();
  const providerDetails = useSelector((state) => state.providerDetails);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getProviderDetails(id));
  }, [dispatch]);
  console.log("DETALLES: ", providerDetails);
  return (
    <div className="container-main">
      <div className="container">
        <h1 className="title">
          {providerDetails.data &&
            `Bienvenido al espacio de ${providerDetails.data.firstName}`}
        </h1>
        <div>
          {providerDetails.data?.image !== undefined ? (
            <img
              className="card-img"
              src={providerDetails.data?.image}
              alt="Provider picture"
            ></img>
          ) : (
            <img
              className="card-img"
              src={def_est_img}
              alt="Default Image"
            ></img>
          )}
          <div>
            <h2 className="details-h2">Mi bio</h2>
            <div className="container-about">
              {providerDetails.data?.bio ? (
                <p>{providerDetails.data.bio}</p>
              ) : (
                <p>
                  Hola! Mi nombre es{" "}
                  <b>
                    {`${providerDetails.data?.firstName} ${providerDetails.data?.lastName}`}
                    .
                  </b>
                  Tengo <b>{`${providerDetails.data?.age}`}.</b> años y soy de{" "}
                  {/* {(providerDetails.data?.addresses =
                    providerDetails.data?.addresses.filter(
                      (add) => add.is_main === true
                    )) */}
                  .<br />
                  <br />
                  Llevo ya 12 años de experiencia en el rubro, de los cuales 2
                  han sido por mi cuenta y los demás han sido en hoteles y spa
                  de gran renombre tales como:
                  <ul>Hotel Sheraton Pilar</ul>
                  <ul>Hotel Marriot (múltiples hoteles de la cadena)</ul>
                  <ul>Hotel Whindham Bs As</ul>
                  <ul>Hotel 4 Seasons Bs As</ul>
                  <ul>Hyatt Park Hotel</ul>
                  <ul>Spa de Mar - Viña del Mar</ul>
                  <br />
                  En esta ocasión, elegí asociarme al equipo de excelentes
                  profesionales de Spa-tify, porque conozco a sus fundadores y
                  el tipo de labor que todos ellos han realizado durante sus
                  carreras profesionales y conozco también el empeño y
                  dedicación que todos ellos le ponen a cada uno de sus
                  clientes/pacientes y a cada uno de los servicios que ofrecen.
                  <br />
                  Te invito a spa-tifarte conmigo en esta inolvidable
                  experiencia desde la comodidad de tu hogar, tu trabajo o el
                  lugar que prefieras.
                </p>
              )}
            </div>
          </div>
          <div>
            <ProviderServices providerId={id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderDetails;
