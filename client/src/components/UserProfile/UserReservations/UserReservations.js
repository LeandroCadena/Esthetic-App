import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserReservations } from '../../../Redux/actions/user.actions';
import './UserReservations.css';

const ID = window.localStorage.getItem('loggedSpatifyApp')
  ? JSON.parse(window.localStorage.getItem('loggedSpatifyApp')).userFound?._id
  : null;

function UserReservations() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userReservations.data);

  console.log('Esto es userData de User Reservations', userData);

  useEffect(() => {
    if (ID) {
      dispatch(getUserReservations(ID));
    }
  }, []);
  return (
    <div className='booking-container'>
      <div className='booking-data'>
        <h1 className='h1'> MIS TURNOS</h1>
        <h3 className='h3'>Proximos Turnos: {userData && userData._id}</h3>
        <div className='booking-info'>
          <p>Servicio: Manicura</p>
          <p>Dia: Viernes 30/70/2021</p>
          <p>Hora: 16hs</p>
          <p>Prestador: Toni Tralice</p>
        </div>
      </div>
    </div>
  );
}

export default UserReservations;
