import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from '../Service/Service';
import fluoride from '../../images/fluoride.png';
import cavity from '../../images/cavity.png';
import whitening from '../../images/whitening.png';
import Typography from '@mui/material/Typography';


const services = [
    {
        name: 'Fluoride Treatment',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an ',
        img: fluoride
    },
    {
        name: 'Cavity Fillings',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an u',
        img: cavity
    },
    {
        name: 'Teath Whitening',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an',
        img: whitening
    }
]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ fontWeight: 500, color: 'success.main', m: 5 }} variant="h6" component="div">
                    OUR SERVICES
                </Typography>
                <Typography sx={{ fontWeight: 600, m: 2 }} variant="h4" component="div">
                    Services we Provided
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {services.map(service => <Service
                        key={service.name}
                        service={service}
                    ></Service>)

                    }
                </Grid>
            </Container>
        </Box >
    );
};

export default Services;