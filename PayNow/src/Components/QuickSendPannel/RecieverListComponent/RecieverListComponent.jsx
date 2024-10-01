import React from 'react';
import {Card, CardContent, Typography} from '@mui/material'

const RecieverListComponent = React.memo(( {data} ) => {
  return(
    <div style={{width: '100%', height: '100%'}}>
      {data.map((obj, index)=>(
        <Card sx={{height: '12%', marginTop: '5px'}}>
          <Typography sx={{ fontSize: 14 , margin: '4px'}}>
            {obj.username}
          </Typography>
        </Card>
      ))}
    </div>
  )
});
export default RecieverListComponent;