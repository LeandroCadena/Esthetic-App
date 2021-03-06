import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { reservationStatus } from '../../../Redux/actions/actions';
import { HOST } from '../../../utils/constants';
import './Reservation.scss';
import axios from 'axios';
import { Button, Menu, MenuItem } from '@material-ui/core';
import Fade from "@material-ui/core/Fade";
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import FormAddresses from '../../UserProfile/Form/FormAddresses';
import { toast } from 'react-toastify';
import HomeWorkTwoToneIcon from '@material-ui/icons/HomeWorkTwoTone';

export default function Reservation({ handleActive, date, hour, provider, service, price, handleClickModal, providerID }) {
    const [addresses, setAddresses] = useState([]);
    const [addModal, setAddModal] = useState(false);
    const [change, setChange] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchorEl2, setAnchorEl2] = React.useState(null);
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
    const open = Boolean(anchorEl);
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };
    const open2 = Boolean(anchorEl2);
    const handleClose2 = () => {
        setAnchorEl2(null);
    };
    const handleClick2 = (e) => {
        setAnchorEl2(e.currentTarget);
    };

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
    }, [data.user, change])

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
            address: e.target.innerText
        })
        setAnchorEl(null);
    }

    const handleAdd = (e) => {
        setAnchorEl2(false);
        setAddModal(true);
    }

    const dispatch = useDispatch();

    const handleAccept = async () => {
        if (data.address !== '') {
            handleClickModal()
            dispatch(reservationStatus(data));
            handleActive()
        } else {
            toast.error('Error al agregar el turno, por favor ingrese una direcci??n', {
                position: toast.POSITION.TOP_CENTER
            })
        }
    }

    return (
        <div className='modal'>
            <div className='modal-content'>
                <h2>Reservaci??n</h2>
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
                            <td>Direcci??n</td>
                            <td className='td-address'>
                                <span>
                                    {addresses && addresses.length ? data.address : 'Ninguna'}
                                </span>
                                <span>
                                    <Button aria-controls="address-menu" aria-haspopup="true" onClick={handleClick}>
                                        <HomeWorkTwoToneIcon className='modal-icon' />
                                    </Button>
                                    <Menu
                                        id="address-menu"
                                        anchorEl={anchorEl}
                                        keepMounted
                                        open={open}
                                        onClose={handleClose}
                                        TransitionComponent={Fade}
                                    >
                                        {
                                            addresses && addresses.length && addresses.map((el, index) => (
                                                <MenuItem onClick={(e) => handleChange(e)} key={index} value={el.name}>{el.name}</MenuItem>
                                            ))
                                        }
                                    </Menu>
                                    <Button aria-controls="add-menu" aria-haspopup="true" onClick={handleClick2}>
                                        <AddIcon className='modal-icon' />
                                    </Button>
                                    <Menu
                                        id="add-menu"
                                        anchorEl={anchorEl2}
                                        keepMounted
                                        open={open2}
                                        onClose={handleClose2}
                                        TransitionComponent={Fade}
                                    >
                                        <MenuItem onClick={() => handleAdd()}>Crear direcci??n</MenuItem>
                                    </Menu>
                                </span>
                                <FormAddresses showModal={addModal} setShowModal={setAddModal} setChange={() => setChange(!change)} />
                            </td>
                        </tr>
                    </tbody>
                    <p>IMPORTANTE*</p>
                    <p>El turno se a??adir?? a la bolsa de pago, pero estar?? disponible para otros usuarios hasta que se complete el pago del mismo.*</p>
                </div>
                <button
                    className='modal-button left'
                    onClick={() => handleActive()}
                >CANCELAR</button>
                <button
                    className='modal-button right'
                    onClick={handleAccept}
                >ACEPTAR</button>
            </div>
        </div >
    );
}
