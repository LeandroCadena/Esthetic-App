import React from "react";
import { NavLink } from "react-router-dom";
import defaultImg from "../../../../img/spa_default_1.jpg";
import "./Provider.scss";

function Provider({ provider, service }) {
  let avgAssessment = 3.5;
  return (
    <div className="provider-container">
      <NavLink className="navLink" to={`/providers/${provider._id}`}>
        <div className="provider-card">
          <div className="card-left">
            {provider.img ? (
              <img
                className="card-img"
                src={provider.img}
                alt="Service Image"
              ></img>
            ) : (
              <img
                className="card-img"
                src={defaultImg}
                alt="Default Image"
              ></img>
            )}
            <div className="card-title">
              <h2 className="">{`${provider.firstName} ${provider.lastName}`}</h2>
              <h4>{`Calificación: ${
                provider.rating?.length
                  ? provider.rating.map((r) => {
                      let suma = 0;
                      suma += r.assessment;
                      return Math.round(
                        (suma + avgAssessment) / (provider.rating.length + 1)
                      );
                    })
                  : avgAssessment
              }⭐`}</h4>
              <h4>{`* ${
                provider.rating?.length ? provider.rating.length : 0
              } reseñas`}</h4>
            </div>
          </div>
          <div className="card-options">
            <NavLink
              className="navLink card-button"
              to={`/providers/${provider._id}`}
            >
              Ver Perfil
            </NavLink>
            <NavLink
              className={
                provider.hasCalendar
                  ? "navLink card-button"
                  : "navlink card-button inactive"
              }
              to={
                provider.hasCalendar
                  ? `/services/providers/${service}/${provider._id}/calendar`
                  : `/services/providers/${service}`
              }
            >
              {provider.hasCalendar ? "Ver Agenda" : "Sin Agenda"}
            </NavLink>
            <NavLink
              className={
                provider.rating?.length
                  ? "navLink card-button"
                  : "navlink card-button inactive"
              }
              to={
                provider.rating?.length
                  ? `/providers/review/${provider._id}`
                  : `/services/providers/${service}`
              }
            >
              {provider.rating?.length ? "Ver Reseñas" : "Sin Reseñas"}
            </NavLink>
          </div>
        </div>
      </NavLink>
    </div>
  );
}

export default Provider;
