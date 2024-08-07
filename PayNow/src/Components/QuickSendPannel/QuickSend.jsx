import { Button, Card, Drawer } from "@mui/material";
import { useEffect, useState } from "react";
import { Box, Paper, Typography, TextField } from "@mui/material";

import quickSendBg from '../../assets/paynow.jpg'
import { searchUser } from "../../Services/QuickSendService";

function QuickSendPannel(){
  const [openQuickPannel, setOpenQuickPannel] = useState(false);
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState(query);
  const [contactList, setContactList] = useState([]);

  const toggleQuickPannel = (newState) => () =>{
    setOpenQuickPannel(newState)
  }

  // call API when the debounced query changes
  useEffect(() => {
    if(debouncedQuery){
      const getRecieverDetails = async ()=>{
        let res = await searchUser({queryString: debouncedQuery});
        console.log('result', res)
      }
      getRecieverDetails()
    }else{
      setContactList([])
    }
  }, [debouncedQuery])


  // Update the debounced query after 500ms of no input change
  useEffect(() => {
    const handler = setTimeout(()=>{
      setDebouncedQuery(query)
    }, 500);

    return ()=>{
      clearTimeout(handler)
    }
  }, [query]);


  return(
    <div style={{height: '96%'}}>
      <Button className="d-flex"
        variant="outlined" 
        onClick={toggleQuickPannel(true)}
        sx={{
          width: '100%', 
          height: '100%',
          backgroundImage: `url(${quickSendBg})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          overflow: 'hidden'
        }}
        >
          {/* background: 'linear-gradient(90deg, #feb47b, #ff7e5f)' */}
      </Button>
      <Drawer open={openQuickPannel} onClose={toggleQuickPannel(false)} anchor="right">
        <Box sx={{ width: 400, height: '100%', background: 'transparent', overflow: 'hidden !important' }} role="presentation">
          <Paper className="d-flex" elevation={3} sx={{height: '100%', margin: '6px', overflow: 'hidden !important'}}>
            <Card sx={{ minWidth: 275, width: '100%' }}>
              <div className="d-flex flex-column" style={{height: '100%', margin: '4px'}}>
                <div style={{height: '10%'}}>
                  <Typography variant='h6' sx={{
                    color: '#131b37', 
                    fontWeight: 'bolder',
                    justifyContent: 'center', 
                    display: 'flex',
                    fontFamily: 'system-ui',
                    fontSize: "30px"
                    }}>
                      Quick Send 
                  </Typography>
                </div>

                <div style={{height: '10%'}}>
                  <TextField id="outlined-search" 
                    label="Search Contacts" 
                    type="search"
                    sx={{width: '100%'}}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    >
                  </TextField>
                </div>

                <div style={{height: '80%'}}>
                  test 3
                </div>
              </div>
            </Card>
          </Paper>
        </Box>
      </Drawer>
    </div>
  )
}
export default QuickSendPannel;