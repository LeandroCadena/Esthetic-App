import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUserReservations } from '../../../../Redux/actions/user.actions';


function Section() {

const [ID, setID] = useState("");
const dispatch = useDispatch();
const data = useSelector((state) => state.userReservations.data);
  useEffect(() => {
    if (localStorage.getItem("loggedSpatifyApp")) {
      const storageData = JSON.parse(localStorage.getItem("loggedSpatifyApp"));
      if (storageData.userFound.roles[0].name === "user") {
        setID(storageData.userFound._id);
      }
    }
  }, []);

  useEffect(() => {
    if (ID) {
      dispatch(getUserReservations(ID));
    }
  }, [ID]);


  let reservations = [];
  if (data && data.length) {
    reservations = data;
  }

    return (
      <div className="accordion-wrapper">
      <div className="accordion">
        {console.log(reservations)}
        {reservations.map((r, i) => (
          <>
             {r.isActive === false && r.ratingAlert === false && (
              <div className="accordion-item" >                
                <div className="accordion-title">
                  <p>
                    <b>Servicio Contratado:</b> {r.service.name}
                  </p>
                 
                </div>
                
                  {r && (
                    <div>
                      <p className="p">Dia: {r.date}</p>
                      <p className="p">Hora: {r.hour} Hs.</p>
                      <p className="p">Precio: ${r.service.price}</p>
                      <p className="p">
                        Prestador: {r.provider.firstName} {r.provider.lastName}
                      </p>            

                    </div>
                  )}
                
              </div>
            )}
              
          </>
        ))}
      </div>
    </div>
    )
}

export default Section
