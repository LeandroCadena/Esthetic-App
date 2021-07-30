import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Image from '../../img/banner.jpg';

const useStyles = makeStyles(() => ({
    bannerImg: {
        width: '100%'
    },
    bannerContainer:{
        position: 'relative',
        textAlign: 'center',
        width: '100%'
    },
    bannerText: {
        position: 'absolute',
        top: '20%',
        left: '15%',
        color: 'rgb(121, 47, 111)',
        padding: 10
    },
    bannerSubtitle: {
        position: 'absolute',
        top: '40%',
        left: '6%',
        color: 'rgb(121, 47, 111)',
        padding: 10,
        width: '40%',
        fontSize: '1.1rem'
    },
    containerText:{
        padding: 50
    },
    text:{
        width:'50%',
    },
    containerTextItem: {
        marginBottom: 15,
        width: '80%'
    },
    title: {
        color: 'hsl(308deg 44% 33%)',
        fontSize: '1.5rem',
        fontWeight: 'bold'
    },
    subtitle: {
        color: 'hsl(308deg 14% 33%)',
    },
    strong: {
        color: 'hsl(308deg 44% 33%)',
    },
    containerButton: {
        width: '30%',
        '& a': {
            textDecoration: 'none'
        }
    },
    button: {
        width: 300,
        height: 50,
        backgroundColor: 'hsl(308deg 44% 30%)',
        color: 'white',
        '&:hover': {
            backgroundColor: 'hsl(308deg 44% 22%)',
            color: 'hsl(308deg 14% 50%)',
        }
    }
}))

function AboutSpaTify() {
    const classes = useStyles();

    return (
        <div className='container-main'>
            <div className='container'>
                <Grid container direction='column'>

                    <Grid item container direction='column'>
                        <Grid item container direction='row'>
                            <div className={classes.bannerContainer}>
                                <img className={classes.bannerImg} src={Image}/>
                                <Typography className={classes.bannerText} variant='h3'>Sobre Spa-tify</Typography>
                                <Typography className={classes.bannerSubtitle}>
                                <strong>Spa-tify</strong> es un sitio online que te permite reservar citas con los mejores profesionales de belleza y bienestar 
                                de manera fácil, rápida y desde la comodidad de donde te encuentres.<br/>
                                <strong>Spa-tify</strong> conecta profesionales con clientes, simplificando el proceso de reserva de turnos.
                                </Typography>
                            </div>
                        </Grid>
                    </Grid>

                    <Grid item container direction='column' alignItems='center' className={classes.containerText}>
                        <Grid item className={classes.containerTextItem}>
                            <Typography variant='h5'>
                                ¿Por qué Spa-tify?
                            </Typography>
                            <Typography className={classes.subtitle}>
                                Queremos ofrecer la mejor aplicación de búsqueda y reserva de turnos con profesionales en peluquería y 
                                tratamientos de belleza <br/>más importantes de tu ciudad.
                                Buscamos ayudar a los clientes y profesionales a encontrarse de forma ágil y eficaz.
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid item container justifyContent='center' className={classes.containerText}>
                        <Grid item container direction='column' className={classes.text}>
                            <Typography className={classes.title}>
                                Potencia tu trabajo cómo profesional de bienestar y belleza
                            </Typography>
                            <Typography className={classes.subtitle}>
                                ¿Días y horas libres? ¿Tus clientes se pierden? ¿Promociones sin resultados?<br/>
                                Es hora de ser un profesional de la belleza y el cuidado personal de una manera única y especial.
                                <br/><strong className={classes.strong}>Spa-tify</strong> es tu solución.
                            </Typography>
                        </Grid>
                        <Grid item container justifyContent='center' alignItems='center' className={classes.containerButton}>
                            <Link to='/userRegister'>
                                <Button variant='primary' className={classes.button}>PROFESIONAL</Button>
                            </Link>
                        </Grid>
                    </Grid>
                    
                    <Grid item container justifyContent='center' className={classes.containerText}>
                        <Grid item container direction='column' className={classes.text}>
                            <Typography className={classes.title}>
                                Pensando en hacerte feliz
                            </Typography>
                            <Typography className={classes.subtitle}>
                                ¿Por qué llamar muchas veces? ¿Por qué tenés que esperar?<br/>
                                Agendá gratis tu cita con tus profesionales favoritos cuando quieras.<br/>
                                Sabemos que siempre te gusta verte bien y sentirte feliz, por eso <strong className={classes.strong}>Spa-tify</strong> es para vos.
                            </Typography>
                        </Grid>
                        <Grid item container justifyContent='center' alignItems='center' className={classes.containerButton}>
                            <Link to='/userRegister'>
                                <Button variant='primary' className={classes.button}>USUARIO</Button>
                            </Link>
                        </Grid>
                    </Grid>

                </Grid>
            </div>
        </div>
    )
}

export default AboutSpaTify