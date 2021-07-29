import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getProviderDetails,
  getProviderRating,
} from "../../../Redux/actions/actions";
import { HOST } from "../../../utils/constants";
// import "ProviderRating.scss";

const ProviderRating = () => {
  const dispatch = useDispatch();

  const providerDetails = useSelector((state) => state.providerDetails);
  const providerRating = useSelector((state) => state.providerRating);

  const { id } = useParams();

  useEffect(() => {
    console.log("hollaa", id)
    dispatch(getProviderDetails(id));
    dispatch(getProviderRating(id));
  }, [dispatch]);

  return (
    <div className="container-main">
      <div className="container">
        <h1 className="h1-details">{`Éstas son las reseñas de ${providerDetails.data?.firstName}`}</h1>
        <div>
          {providerRating ? (
            <h2>providerRating.data.data?.rating</h2>
          ) : (
            <h2>providerRating.data.rating</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProviderRating;
