import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProvidersAddresses } from '../../../Redux/actions/actions';
import { 
    Grid, 
    Box, 
    Paper, 
    Typography, 
    Accordion,
    AccordionDetails,
    AccordionSummary,
    AccordionActions,
    Fab,
    } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import EditIcon from '@material-ui/icons/Edit';

function ProviderProfileAddresses({ provider, classes }) {
    const dispatch = useDispatch();
    const addresses = useSelector(state => state.providersAddresses);

    useEffect(() => {
        dispatch(getAllProvidersAddresses(provider._id))
    }, []);

    return (
        <Grid item className={classes.gridProfile}>
            <Paper className={classes.paper} elevation={3}>
                <Box className={classes.data}>

                    <Grid container justifyContent='center' alignItems='center' direction='column'>
                        <Grid item container justifyContent='space-between' direction='column'>
                            {
                                addresses.map( a => {
                                    return (
                                        <>
                                            <Accordion>
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    >
                                                    <Typography variant='h6'>{a.name}</Typography>
                                                </AccordionSummary>

                                                <AccordionDetails>
                                                    <Typography variant='h7'>{a.address_1}</Typography>                                                
                                                </AccordionDetails>
                                                <AccordionDetails>
                                                    {a.address_details ? <Typography variant='h7'>{a.address_details}</Typography>
                                                        : <Typography variant='subtitle1'>Detalles no definidos</Typography>
                                                    }                                                
                                                </AccordionDetails>
                                                <AccordionDetails>
                                                    <Typography variant='h7'>{a.city}</Typography>
                                                </AccordionDetails>
                                                
                                                <AccordionActions>
                                                    <Fab size='small' color='primary'>
                                                        <EditIcon  />
                                                    </Fab>
                                                </AccordionActions>
                                                
                                            </Accordion>
                                        </>
                                    )
                                })
                            }
                        </Grid>
                    </Grid>

                </Box>
            </Paper>
        </Grid>
    )
}

export default ProviderProfileAddresses