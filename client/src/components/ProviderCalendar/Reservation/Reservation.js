import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { reservationStatus } from '../../../Redux/actions/actions';
import { HOST } from '../../../utils/constants';
import './Reservation.scss';
import axios from 'axios';

export default function Reservation({ handleActive, date, hour, provider, service, price, handleClickModal, providerID }) {
    const [addresses, setAddresses] = useState([]);
    const [data, setData] = useState({
        user: '',
        providerID: providerID,
        provider: provider,
        date: date,
        hour: hour,
        service: service,
        price: price,
        address: '',
        isActive: true
    });

    useEffect(() => {
        if (localStorage.getItem('loggedSpatifyApp')) {
            const storageData = JSON.parse(localStorage.getItem('loggedSpatifyApp'))
            if (storageData.userFound.roles[0]?.name === "user") {
                setData({
                    ...data,
                    user: storageData.userFound._id
                })
            }
        }
    }, [])

    useEffect(() => {
        if (data.user !== '') {
            axios.get(`${HOST}/users/${data.user}/addresses`)
                .then(allAddresses => {
                    const addressesData = allAddresses.data;
                    setAddresses(addressesData);
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [data.user])

    useEffect(() => {
        if (addresses.length) {
            let check = true;
            addresses.forEach(ad => {
                if (ad.is_main === true) {
                    check = false;
                    setData({
                        ...data,
                        address: ad.name
                    })
                }
            })
            if (check) {
                setData({
                    ...data,
                    address: addresses[0].name
                })
            }
        }
    }, [addresses])

    const handleChange = (e) => {
        setData({
            ...data,
            address: e.target.value
        })
    }

    const dispatch = useDispatch();

    const handleAccept = async () => {
        handleClickModal()
        dispatch(reservationStatus(data));
        handleActive()
    }

    return (
        <div className='modal'>
            <div className='modal-content'>
                <h2>Reservación</h2>
                <div className='modal-detail'>
                    <h3>Detalle del turno</h3>

                    <tbody>
                        <tr>
                            <td>Proveedor</td>
                            <td>{provider}</td>
                        </tr>
                        <tr>
                            <td>Fecha</td>
                            <td>{date}</td>
                        </tr>
                        <tr>
                            <td>Hora</td>
                            <td>{`${hour}:00hs`}</td>
                        </tr>
                        <tr>
                            <td>Servicio</td>
                            <td>{service}</td>
                        </tr>
                        <tr>
                            <td>Precio</td>
                            <td>{`$${price}`}</td>
                        </tr>
                        <tr>
                            <td>Dirección</td>
                            <td className='td-address'>
                                <span>
                                    {addresses && addresses.length ? data.address : 'No dispone de direcciones'}
                                </span>
                                <span>
                                    {addresses && addresses.length ? ("Cambiar") : null}
                                    {
                                        addresses && addresses.length ? (
                                            <select className='address-select' onChange={(e) => handleChange(e)}>
                                                {
                                                    addresses.map((el, index) => (
                                                        <option key={index} value={el.name}>{el.name}</option>
                                                    ))
                                                }
                                            </select>
                                        ) : (
                                            <button className='address-button'>Agregar</button>
                                        )
                                    }
                                </span>
                            </td>
                        </tr>
                    </tbody>
                    <p>IMPORTANTE*</p>
                    <p>El turno se añadirá a la bolsa de pago, pero estará disponible para otros usuarios hasta que se complete el pago del mismo.*</p>
                </div>
                <button
                    className='modal-button left'
                    onClick={() => handleActive()}
                >CANCELAR</button>
                {
                    addresses && addresses.length ? (
                        <button
                            className='modal-button right'
                            onClick={handleAccept}
                        >ACEPTAR</button>
                    ) : null
                }
            </div>
        </div >
    );
}
