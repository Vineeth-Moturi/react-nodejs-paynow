import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import brokenShip from '../../assets/broken_ship_transp.png'
import { useRouteError } from 'react-router-dom';



function SomethingWentWrong(){
  const uiError = useRouteError();
  console.error("ErrorCatcher: ",uiError);
  return(
    <Container maxWidth="sm-12">
      {/* <Box  sx={{ bgcolor: '#cfe8fc', height: '50vh' }}>
        <p style={{color: '#1b405f', fontSize: 60, position: 'absolute', right: '18%', top: '13%'}}>
          Sorry..
        </p>
        <img src={brokenShip} style={{height: "125%"}} />
      </Box> */}
      <Box  sx={{ bgcolor: '#cfe8fc', height: '50vh' }}>
        <p style={{color: 'rgb(236 246 255)', fontSize: 60, position: 'absolute', right: '18%', top: '13%'}}>
          Sorry..
        </p>
        <img src={brokenShip} style={{height: "125%"}} />
      </Box>
      <Box  sx={{ bgcolor: '#245f8e', height: '50vh' }}>
        
        <p style={{color: '#f0f8ff', fontSize: 60 , display: 'flex', flexDirection: 'row-reverse', paddingTop: '10%', paddingRight: '2%'}}>
          Something Went Wrong..
        </p>
      </Box>
    </Container>
  );
}
export default SomethingWentWrong;