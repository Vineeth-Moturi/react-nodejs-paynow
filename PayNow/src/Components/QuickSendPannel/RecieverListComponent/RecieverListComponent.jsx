import React from 'react';
import {Card, CardContent, Typography} from '@mui/material';
import Avatar from "@mui/material/Avatar";

import { BASE_URL} from '../../../Services/FileHandlerService';
import { FlagResolverHelper } from '../../../Helpers/FlagResolverHelper';

const RecieverListComponent = React.memo(( {data} ) => {
  const usrPrep = (url) => {
    return url ? BASE_URL+'/'+url : undefined ;
  }

  return(
    <div style={{width: '100%', height: '100%'}}>
      {data.map((obj, index)=>(
        <Card sx={{height: '12%', marginTop: '5px'}} name={obj?.userUid}>
          <div className='d-flex ml-1'>
            <div className='d-flex col-2'>
              <Avatar 
                sx={{height: 58, width: 58}}
                src={usrPrep(obj?.userInfo?.profile_image_url)}
                >
                {(obj?.username) ? obj?.username[0] : "D"} 
              </Avatar>
            </div>
            <div className='d-flex col-9 row'>
              <div className='d-flex'>
                <Typography sx={{ fontSize: 18, fontWeight: '600', fontFamily: 'Raleway, Arial'}}>
                  {obj.username}
                </Typography>
              </div>
              <div className='d-flex'>
                <Typography sx={{ fontSize: 16, color:'#817373', fontWeight:'500', fontFamily:'Raleway, Arial'}}>
                  {obj?.userInfo?.phone}
                </Typography>
              </div>
            </div>
            <div className='d-flex col-1' style={{width: '22px', marginLeft: '4%'}}>
              {FlagResolverHelper(obj?.userInfo?.country)}
            </div>
          </div>
          
        </Card>
      ))}
    </div>
  )
});
export default RecieverListComponent;