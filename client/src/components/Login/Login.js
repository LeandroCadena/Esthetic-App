import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LoginUser } from "../../Redux/actions/user.actions";
import { useInput } from "../../hooks/customHooks";
import { log, success, error } from "../../utils/logs";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//materialUI
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

//google login
import GoogleLogin from "react-google-login";

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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
toast.configure();
export default function SignIn() {
  const notify = () => toast("Wow so easy !");
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();

  //manejo de error
  const [valid, setValid] = useState(true);
  const [error, setError] = useState({ emailError: "", passwordError: "" });
  const loginData = useSelector((state) => state.LoginData);

  const email = useInput("email");
  const password = useInput("password");

  ///Validaciones
  const validate = () => {
    let isValid = true;

    if (!password.value) {
      setValid(false);
      isValid = false;
      setError({ ...error, passwordError: "Por favor ingresa tu contraseña" });
    }
    if (!email.value) {
      setValid(false);
      isValid = false;
      setError({ ...error, emailError: "Por favor ingresa tu email" });
    }

    if (typeof email !== "undefined") {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );

      if (!pattern.test(email.value)) {
        setValid(false);
        isValid = false;
        setError({ ...error, emailError: "Por favor ingresa un email válido" });
      }
    }
    return isValid;
  };

  useEffect(() => {
    setValid(true);
  }, [email.value, password.value]);

  useEffect(() => {
    if (error.emailError.slice(0, 7) === "Usuario") {
      setValid(false);
    }
  }, [error.emailError]);

  const handleSubmit = (e) => {
    e.preventDefault();
    log("intento de logueo");
    if (validate()) {
      const data = {
        email: email.value,
        password: password.value,
      };
      dispatch(LoginUser(data)).then((user) => {
        if (user) {
          if (
            user.providerFound?.roles[0].name == "provider" &&
            !user.providerFound.confirm
          ) {
            toast.error(
              `😟 Lo sentimos. Debes confimar tu email antes de ingresar`,
              {
                position: toast.POSITION.TOP_CENTER,
              }
            );
          }
          if (
            user.providerFound?.roles[0].name == "provider" &&
            user.providerFound.confirm
          ) {
            toast.success(
              `👍 Bienvenido ${email.value}. Un gran día te espera!`,
              {
                position: toast.POSITION.TOP_CENTER,
              }
            );
            history.push("/user/provider");
          }
          if (
            user.userFound?.roles[0].name === "user" &&
            !user.userFound.confirm
          ) {
            toast.error(
              `😟 Lo sentimos. Debes confimar tu email antes de ingresar`,
              {
                position: toast.POSITION.TOP_CENTER,
              }
            );
          }
          if (
            user.userFound?.roles[0].name === "user" &&
            user.userFound.confirm
          ) {
            toast.success(
              `👍 Bienvenido ${email.value}. Un gran día te espera!`,
              {
                position: toast.POSITION.TOP_CENTER,
              }
            );
            history.push("/"); // pendiente colocar path user
          }
        } else {
          toast.error(
            `Usuario o Constraseña inválidos. Por favor intenta de nuevo`,
            {
              position: toast.POSITION.TOP_CENTER,
            }
          );
        }
      });
    }
  };

  const responseGoogle = (response) => {
    console.log(response);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <GoogleLogin
          clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
            error={!valid}
            helperText={!valid ? error.emailError : ""}
            {...email}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Contraseña"
            type="password"
            error={!valid}
            helperText={!valid ? error.passwordError : ""}
            id="password"
            autoComplete="current-password"
            {...password}
          />
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Recordarme"
          /> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Entrar
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Olvidaste la contraseña?
              </Link>
            </Grid>
            <Grid item>
              <Link to={"/userRegister"} variant="body2">
                {"No tienes cuenta? Registrate"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
