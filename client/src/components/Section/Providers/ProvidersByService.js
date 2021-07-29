import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProvidersbyServiceName } from "../../../Redux/actions/actions";
import { useParams } from "react-router-dom";
import Provider from "./Provider/Provider.js";
import "./ProvidersByService.scss";

export function ProvidersByService() {
  const dispatch = useDispatch();
  const providers = useSelector((state) => state.providersByService.data);

  const { serviceName } = useParams();

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
              <h4 className="title">Prestadores disponibles</h4>
            </div>
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
