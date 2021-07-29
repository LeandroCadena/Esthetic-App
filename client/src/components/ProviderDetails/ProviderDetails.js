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

  return (
    <div className="container-main">
      <div className="container">
        <h1 className="h1-details">
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
          <div className="container-about">
            <h2 className="details-h2">Acerca de mí...</h2>
            <span>
              {providerDetails.data?.bio ? (
                <p>{providerDetails.data.bio}</p>
              ) : (
                <p>
                  <b>Lorem ipsum</b> dolor sit amet consectetur adipisicing
                  elit. Corporis dolor, ea reprehenderit adipisci, maxime
                  suscipit magnam inventore voluptatem animi veniam ratione
                  quasi quae fuga perferendis, architecto modi ab dolorum
                  facere. Lorem ipsum dolor sit, amet consectetur adipisicing
                  elit. At nesciunt ducimus amet commodi dolor doloremque
                  praesentium omnis. Voluptatem doloremque suscipit ad natus
                  dignissimos qui omnis! Voluptas explicabo dolor voluptatum
                  distinctio incidunt atque quas rerum neque, aspernatur soluta
                  debitis quaerat iusto.
                </p>
              )}
            </span>
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
