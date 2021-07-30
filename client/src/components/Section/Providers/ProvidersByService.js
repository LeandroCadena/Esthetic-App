import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProvidersbyServiceName } from "../../../Redux/actions/actions";
import { useParams } from "react-router-dom";
import Provider from "./Provider/Provider.js";
import "./ProvidersByService.scss";
import { BsArrowUpShort, BsArrowDownShort } from "react-icons/bs";

export function ProvidersByService() {
  const dispatch = useDispatch();
  const providers = useSelector((state) => state.providersByService.data);

  console.log(providers?.map((x) => x.rating));

  const { serviceName } = useParams();

  const masRating = () => {};

  useEffect(() => {
    dispatch(getProvidersbyServiceName(serviceName));
    return () => {};
  }, []);

  return (
    <div className="container-main">
      <div className="container">
        <div className="providers-container">
          <div className="providers-filters">
            <div>
              <h1 className="title">{`${serviceName}`}</h1>
              {/* <h2 className="title">{`$${serviceName.price}`}</h2> */}
              <h4 className="title">Prestadores disponibles</h4>
            </div>
          </div>
          <div style={{ display: "flex", marginTop: "1rem" }}>
            <button
              className="card-button"
              style={{ display: "flex", alignItems: "center" }}
              onClick={() => masRating()}
              // class="sort-asc"
            >
              <BsArrowUpShort /> Mayor Rating
            </button>
            <button
              className="card-button"
              /* onClick={()=> menosRating ()} */ style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "1rem",
              }}
              // class="sort-asc"
            >
              <BsArrowDownShort /> Menor Rating
            </button>
          </div>
          <div className="providers-list">
            {providers &&
              providers.map((provider, index) => (
                <Provider
                  key={index}
                  provider={provider}
                  service={serviceName}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
