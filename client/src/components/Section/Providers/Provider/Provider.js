import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import defaultImg from "../../../../img/spa_default_1.jpg";
import "./Provider.scss";
import { getProviderRating } from "../../../../Redux/actions/actions";

function Provider({ provider, service }) {
  const dispatch = useDispatch();
  const providerRating = useSelector((state) => state.providerRating);

  useEffect(() => {
    dispatch(getProviderRating(provider._id));
  }, [dispatch]);

  console.log("RATIIIIIING: ", providerRating?.data);

  return (
    <div className="provider-container">
      <NavLink
        className="navLink"
        to={`/services/providers/${service}/${provider._id}`}
      >
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
              <h4>{`Calificación: ${provider.rating}`}⭐</h4>
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
              className="navLink card-button"
              to={`/providers/review/${provider._id}`}
            >
              Ver Reseñas
            </NavLink>
          </div>
        </div>
      </NavLink>
    </div>
  );
}

export default Provider;
