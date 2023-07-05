import React, { useEffect } from 'react';
import { Typography, Grid, Button, Box } from '@material-ui/core';
import './Home.css';
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';

function Home() {
    let navigate = useNavigate();

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado")
            navigate("/login")

        }
    }, [token])

    return (
        // Precisa fazer um container pra retornar somente um elemento aqui (<> é um Fragment):
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Olá, boas vindas! 🙃</Typography>
                        <Typography variant="h5" gutterBottom component="h5" align="center" className='subtitulo'>Utilize esse espaço para expressar os seus pensamentos e opiniões (ou falar sozinhe mesmo)</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            <ModalPostagem />
                        </Box>
                        <Link to="/posts" className="text-decorator-none">
                            <Button variant="outlined" className='botao'>Ver Postagens</Button>
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="/src/assets/images/Rumos Artes Visuais-RJ{14 mar 2013} (25).JPG" alt="Foto de uma obra de arte contemporânea: um letreiro em neon branco sobre parede preta, com os dizeres: e quem não quiser crer, que o venha experimentar" style={{ borderRadius: '3em' }} />
                </Grid>
                <Grid xs={12} className='postagens'>
                    <TabPostagem />
                </Grid>
            </Grid>
        </>
    );
}

export default Home;