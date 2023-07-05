import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Typography, Grid, Box } from '@material-ui/core';
import './Footer.css';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';

function Footer() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    var footerComponent;

    if (token != "") {
        footerComponent = <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid alignItems="center" item xs={12}>
                <Box className='box1'>
                    <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                        <Typography variant="h5" align="center" gutterBottom className='textos'>Me acompanhe nas redes sociais</Typography>
                    </Box>

                    <Box display="flex" alignItems="center" justifyContent="center">
                        <a href="https://github.com/sofiamarchetti/" target="_blank">
                            <GitHubIcon className='redes-sociais' />
                        </a>
                        <a href="https://www.instagram.com/meu.minimuseu/" target="_blank">
                            <InstagramIcon className='redes-sociais' />
                        </a>
                        <a href="https://www.linkedin.com/in/sofiamarchetti/" target="_blank">
                            <LinkedInIcon className='redes-sociais' />
                        </a>
                    </Box>
                </Box>

                <Box className='box2'>
                    <Box paddingTop={1}>
                        <Typography variant="subtitle2" align="center" gutterBottom className='textos'>Sofia Marchetti ©2023</Typography>
                    </Box>
                    <Box>
                        <a target="_blank" href="https://brasil.generation.org">
                            <Typography variant="subtitle2" gutterBottom className='textos' align="center">Generation Brazil</Typography>
                        </a>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    }

    return (
        <>
            {footerComponent}
        </>
    )
}

export default Footer;