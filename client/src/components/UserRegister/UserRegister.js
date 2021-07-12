import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { getUser } from "../../Redux/actions/user.actions";
import { useInput } from "../../hooks/customHooks";
import { UserContext } from "../../index";
import { log, success, error } from "../../utils/logs";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
/* import Link from '@material-ui/core/Link'; */
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { InputLabel } from "@material-ui/core";
import { Link } from "react-router-dom";
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const dispatch = useDispatch()
  const { setUser } = useContext(UserContext);
  const history = useHistory();
  const email = useInput("email");
  const password = useInput("password");
  const firstName = useInput("firstName");
  const lastName = useInput("lastName");
  const cellphone = useInput("cellphone");
  const file = useInput("file");
  const gender = useInput("gender");




  const handleSubmit = async (e) => {
    e.preventDefault();
    log('intento de registro');
    try {
      // posteo de user
      const { data } = await axios.post('http://localhost:3002/auth/signup  ', {
        email: email.value,
        password: password.value,
        firstName: firstName.value,
        lastName: lastName.value,
        phone: cellphone.value,
        gender: gender.value,
        image: file.value,
      });
      
      // seteo de estado
      setUser(data);
      success(`register user ${data.email}`);
      // redirect home
      history.push('/home')
      dispatch(getUser())
    } catch ({ response }) {
      // algo no esta.
      error(response);
    }
  };

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'></Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete='fname'
                name='firstName'
                variant='outlined'
                required
                fullWidth
                id='firstName'
                label='Nombre'
                autoFocus
                {...firstName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant='outlined'
                required
                fullWidth
                id='lastName'
                label='Apellido'
                name='lastName'
                autoComplete='lastname'
                {...lastName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                id='email'
                label='Email'
                name='email'
                autoComplete='email'
                {...email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                name='password'
                label='Contraseña'
                type='password'
                id='password'
                autoComplete='current-password'
                {...password}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={cellphone.value.split("").length > 10}
                variant="outlined"
                required
                fullWidth
                name='cellphone'
                label='Telefono'
                type='number'
                id='cellphone'
                autoComplete='cellphone'
                inputProps={{ maxLength: 10 }}
                {...cellphone}
              />
            </Grid>
            <Grid item xs={12}>
              Foto de perfil
              <TextField
                variant='outlined'
                required
                fullWidth
                name='file'
                type='file'
                id='file'
                autoComplete='file'
                {...file}
              />
            </Grid>

            <Grid item xs={12}>
              <InputLabel id="demo-simple-select-label">Gnero</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={gender}
                {...gender}
              >
                <MenuItem value={"Male"}>Hombre</MenuItem>
                <MenuItem value={"Female"}>Mujer </MenuItem>
                <MenuItem value={"Non-binary"}>No Binario</MenuItem>
              </Select>
            </Grid>
            
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value='allowExtraEmails' color='primary' />}
                label='Quiero recibir información y promociones via email.'
              />
            </Grid>
          </Grid>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            Registrarme
          </Button>
          <Grid container justifyContent='flex-end'>
            <Grid item>
              <Link to={"/login"} variant="body2">
                Ya tienes cuenta? Ingresar
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
