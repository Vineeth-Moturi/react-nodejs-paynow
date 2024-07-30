import { Box, Container } from "@mui/material";

import Transactions from '../../Transactions/Transactions';

function DashboardBodyContent(){
  return(
    <Container maxWidth='100%' sx={{margin: '0px', padding: '0px !important'}}>
      <Box sx={{height: "100%", background: 'whitesmoke', borderRadius: '3px'}}>
        <Transactions />
      </Box>
    </Container>
  )
}
export default DashboardBodyContent;


