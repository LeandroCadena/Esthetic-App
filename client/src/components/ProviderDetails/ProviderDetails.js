import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProviderDetails } from "../../Redux/actions/actions";
// import "./providerDetails.scss";
import { NavLink, useParams } from "react-router-dom";
import defaultImg from "../../img/wall-cart.jpg";

const ProviderDetails = () => {
  const dispatch = useDispatch();
  const providerDetails = useSelector((state) => state.providerDetails);
  const services = useSelector((state) => state.services.data);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getProviderDetails(id));
  }, [dispatch]);
  console.log("PROVIDER DETAILS: ", providerDetails.data);

  return (
    <div className="container-main">
      <div className="container">
        <div className="providerDetails-container">
          <h1>
            {providerDetails.data &&
              `Bienvenido al espacio de ${providerDetails.data.firstName}`}
          </h1>
          <div>
            {!providerDetails.data.image.includes(undefined) ? ( //REVER ESTO PORQUE NO ENCUENTRA LA RUTA DE LA FOTO, PERO SÍ EL ATRIBUTO
              <img
                className="card-img"
                src={providerDetails.data.image}
                alt="Provider picture"
              ></img>
            ) : (
              <img
                className="card-img"
                src={defaultImg}
                alt="Default Image"
              ></img>
            )}
            <div>
              <h2>Acerca de mí...</h2>
              <span>
                {providerDetails.data.bio ? (
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
                    distinctio incidunt atque quas rerum neque, aspernatur
                    soluta debitis quaerat iusto.
                  </p>
                )}
              </span>
            </div>
            <div>
              <h2>Estos son algunos de los servicios que brindo</h2>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderDetails;
