import React, { useState } from 'react'
import { AppBar, Tab, Tabs, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from '../listapostagem/ListaPostagem';
import './TabPostagem.css';

function TabPostagem() {

    const [value, setValue] = useState('1')

    function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
        setValue(newValue);
    }
    
    return (
        <>
            <TabContext value={value}>
                <AppBar position="static">
                    <Tabs centered onChange={handleChange} className='barraPostagens'>
                        <Tab label="Todas as postagens" value="1" />
                        <Tab label="Sobre mim" value="2" />
                    </Tabs>
                </AppBar>
                <TabPanel value="1" >
                    <Box display="flex" flexWrap="wrap" justifyContent="center">
                        <ListaPostagem />
                    </Box>
                </TabPanel>
                <TabPanel value="2">
                    <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">Sobre mim</Typography>
                    <Typography variant="body1" gutterBottom color="textPrimary" align="justify">Cat ipsum dolor sit amet, try to jump onto window and fall while scratching at wall. Demand to be let outside at once, and expect owner to wait for me as i think about it terrorize the hundred-and-twenty-pound rottweiler and steal his bed, not sorry yet kitty power. Dismember a mouse and then regurgitate parts of it on the family room floor intrigued by the shower, and cuddle no cuddle cuddle love scratch scratch yet pet my belly, you know you want to; seize the hand and shred it!. Leave hair everywhere sit in box so leave fur on owners clothes spread kitty litter all over house. Reward the chosen human with a slow blink plan your travel lounge in doorway. Eat the fat cats food sleep on keyboard. Hunt by meowing loudly at 5am next to human slave food dispenser eat all the power cords or roll on the floor purring your whiskers off for floof tum, tickle bum, jellybean footies curly toes. Lick face hiss at owner, pee a lot, and meow repeatedly scratch at fence purrrrrr eat muffins and poutine until owner comes back stare at ceiling, or crash against wall but walk away like nothing happened but pet me pet me pet me pet me, bite, scratch, why are you petting me get scared by doggo also cucumerro or you are a captive audience while sitting on the toilet, pet me.</Typography>
                </TabPanel>
            </TabContext>
        </>
    );
}

export default TabPostagem;