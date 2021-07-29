import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import { IconButton, Avatar } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

//

//select
import InputSelect from './InputSelect';
import {
  addAdressesToProvider,
  updateProfileProvider,
} from '../../../Redux/actions/actions';
import CheckBoxComponent from '../CheckBox/CheckBoxComponent';
import MaterialUIPickers from '../SelectHour/SelectorHour';

export default function FormAdresses({ type, alldata, data }) {
  const provider = JSON.parse(window.localStorage.getItem('loggedSpatifyApp'));
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [principal, setPrincipal] = useState(false);

  const initialStateProfile = {
    provider: provider.providerFound?._id,
  };
  const initialAddresses = {
    name: '',
    is_main: principal,
    provider: provider.providerFound?._id,
  };
  let state;
  if (type === 'profile') {
    state = initialStateProfile;
  } else {
    state = initialAddresses;
  }
  const [dataAdress, setDataAdress] = useState(state);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCheck = () => {
    setPrincipal(!principal);
    setDataAdress({
      ...dataAdress,
      is_main: !principal,
    });
  };

  const handleChange = (e) => {
    setDataAdress({
      ...dataAdress,
      [e.target.name]: e.target.value.toLowerCase(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (type !== 'profile') {
      dispatch(addAdressesToProvider(dataAdress));
      setDataAdress({});
      setOpen(false);
    } else {
      dispatch(updateProfileProvider(dataAdress));
      setDataAdress({});
      setOpen(false);
    }
  };

  return (
    <>
      {type === 'horarios' && (
        <div>
          <Avatar>
            <IconButton onClick={handleClickOpen}>
              <EditIcon />
            </IconButton>
          </Avatar>

          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby='form-dialog-title'
          >
            <DialogTitle id='form-dialog-title'>
              {'Actualiza tus horarios de trabajo'}
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                {
                  'Este es un espacio en el que podrás actualizar los horarios de trabajo cuando lo desees.'
                }
              </DialogContentText>
              <MaterialUIPickers />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color='secondary'>
                CANCELAR
              </Button>
              <Button onClick={handleSubmit} color='primary'>
                ENVIAR
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      )}
      {type === 'service' && (
        <div>
          <Avatar>
            <IconButton onClick={handleClickOpen}>
              <EditIcon />
            </IconButton>
          </Avatar>

          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby='form-dialog-title'
          >
            <DialogTitle id='form-dialog-title'>
              {'Actuliza los servicios a prestar'}
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                {
                  'Este es un espacio en el que podrás actualizar los servicios a prestar, puedes realizarlo en cualquier momento 😉.'
                }
              </DialogContentText>

              <CheckBoxComponent data={alldata} />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color='secondary'>
                CANCELAR
              </Button>
              <Button onClick={handleSubmit} color='primary'>
                ENVIAR
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      )}
      {type !== 'service' && type !== 'horarios' ? (
        <div>
          {type === 'profile' || type === 'addresses' ? (
            <Avatar>
              <IconButton onClick={handleClickOpen}>
                <EditIcon />
              </IconButton>
            </Avatar>
          ) : (
            <Button color='secondary' onClick={handleClickOpen}>
              AGREGAR
            </Button>
          )}

          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby='form-dialog-title'
          >
            <DialogTitle id='form-dialog-title'>
              {type === 'profile'
                ? 'Actualiza tus datos personales'
                : 'Ingresa tu dirección'}
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                {type === 'profile'
                  ? 'Es importante que completes todos los campos requeridos !'
                  : 'Es importante que llenes los siguientes campos ya que podrás ser contactado por usuarios que se encuentren cerca de tu ubicación 😉.'}

                <DialogContentText>
                  {type === 'profile'
                    ? "Nota: Una vez ingresados los datos haz 'Click' en enviar 👇"
                    : "Nota: para agregar una nueva dirección debes completar todos los campos de este formulario y enviarlo. Luego podrás dar 'Click' en 'AGREGAR' e ingresar tu nueva dirección."}
                </DialogContentText>
              </DialogContentText>

              <TextField
                autoFocus
                margin='dense'
                label={type === 'profile' ? 'Nombre' : 'Pais'}
                type='email'
                fullWidth
                name={type === 'profile' ? 'firstName' : 'country'}
                onChange={handleChange}
                defaultValue={
                  type === 'profile'
                    ? data?.firstName
                    : type === 'addresses'
                    ? data[0]?.country
                    : ''
                }
              />
              <TextField
                autoFocus
                margin='dense'
                label={type === 'profile' ? 'Apellido' : 'Estado'}
                type='email'
                fullWidth
                name={type === 'profile' ? 'lastName' : 'state'}
                onChange={handleChange}
                defaultValue={
                  type === 'profile'
                    ? data?.lastName
                    : type === 'addresses'
                    ? data[0]?.state
                    : ''
                }
              />
              <TextField
                autoFocus
                margin='dense'
                label={type === 'profile' ? 'Correo (email)' : 'Ciudad'}
                type='email'
                fullWidth
                name={type === 'profile' ? 'email' : 'city'}
                onChange={handleChange}
                defaultValue={
                  type === 'profile'
                    ? data?.email
                    : type === 'addresses'
                    ? data[0]?.city
                    : ''
                }
              />
              <TextField
                autoFocus
                margin='dense'
                label={type === 'profile' ? 'Telefóno' : 'Dirección'}
                type='email'
                fullWidth
                name={type === 'profile' ? 'phone' : 'address_1'}
                onChange={handleChange}
                defaultValue={
                  type === 'profile'
                    ? data?.phone
                    : type === 'addresses'
                    ? data[0]?.address_1
                    : ''
                }
              />
              {type === 'addresses' && (
                <>
                  <TextField
                    autoFocus
                    margin='dense'
                    label='Detalles de dirección (ejemplo: depto 101, torre 2, puerta blanca)'
                    type='email'
                    fullWidth
                    name='address_details'
                    onChange={handleChange}
                    defaultValue={
                      type === 'addresses' ? data[0]?.address_details : ''
                    }
                  />
                  <TextField
                    autoFocus
                    margin='dense'
                    label='Codigo Zip'
                    type='email'
                    fullWidth
                    name='zip_code'
                    onChange={handleChange}
                    defaultValue={type === 'addresses' ? data[0]?.zip_code : ''}
                  />

                  <InputSelect data={dataAdress} />

                  <Grid item xs={12} sm={10}>
                    <FormControlLabel
                      control={
                        <Switch
                          checked={principal}
                          onChange={handleCheck}
                          color='primary'
                        />
                      }
                      label='Dirección principal'
                    />
                  </Grid>
                </>
              )}
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color='secondary'>
                CANCELAR
              </Button>
              <Button onClick={handleSubmit} color='primary'>
                ENVIAR
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      ) : null}
    </>
  );
}
