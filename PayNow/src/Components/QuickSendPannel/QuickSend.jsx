import { Button, Card, Drawer, IconButton } from "@mui/material";
import { createContext, useContext, useEffect, useState } from "react";
import { Box, Paper, Typography, TextField } from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';
import HourglassTopOutlinedIcon from '@mui/icons-material/HourglassTopOutlined';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Avatar from "@mui/material/Avatar";
import Grid from '@mui/material/Grid';
import KeyRoundedIcon from '@mui/icons-material/KeyRounded';

import quickSendBg from '../../assets/paynow.jpg'
import { searchUser } from "../../Services/QuickSendService";
import RecieverListComponent from './RecieverListComponent/RecieverListComponent';
import { usrPrep} from '../../Services/FileHandlerService';



const GlobalContext = createContext();

function QuickSendPannel(){
  const [openQuickPannel, setOpenQuickPannel] = useState(false);
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState(query);
  const [recieverList, setRecieverList] = useState([]);
  const [apiStatus, setApiStatus] = useState(false);
  const [selectedReciever, setSelectedReciever] = useState(null);
  const [toggleTransactionPannel, setToggleTransactionPannel] = useState(false);

  const toggleQuickPannel = (newState) => () =>{
    setOpenQuickPannel(newState)
  }

  // call API when the debounced query changes
  useEffect(() => {
    if(debouncedQuery){
      const getRecieverDetails = async ()=>{
        setApiStatus(true)
        try {
          let res = await searchUser({queryString: debouncedQuery});
          console.log('result', res)
          if(res?.data?.userDetails){
            setRecieverList(res.data.userDetails)
            setApiStatus(false)
          }else{
            setApiStatus(false);
            setRecieverList([]);
          }
        }catch(err){
          console.error("Error fetching receiver details:", error);
          setRecieverList([]);
        }
      }
      getRecieverDetails()
    }else{
      setRecieverList([])
    }
  }, [debouncedQuery])


  // Update the debounced query after 500ms of no input change
  useEffect(() => {
    const handler = setTimeout(()=>{
      setDebouncedQuery(query)
    }, 1000);

    return ()=>{
      clearTimeout(handler)
    }
  }, [query]);


  const selectedRecieverHandler = (userDetails) => {
    console.log(userDetails)
    setSelectedReciever(userDetails);
    setToggleTransactionPannel(true);
    
  }


  return(
    <div style={{height: '96%'}}>
      <Button className="d-flex"
        variant="outlined" 
        onClick={() => toggleQuickPannel(true)()}
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
      <Drawer open={openQuickPannel} onClose={() => toggleQuickPannel(false)()} anchor="right">
        <Box sx={{ width: 400, height: '100%', background: 'transparent', overflow: 'hidden !important' }} role="presentation">
          <Paper className="d-flex" elevation={3} sx={{height: '100%', margin: '6px', overflow: 'hidden !important'}}>
            { !toggleTransactionPannel ?  (
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
                        InputProps={{
                          endAdornment: apiStatus && (
                            <InputAdornment position="end">
                              <HourglassTopOutlinedIcon />
                            </InputAdornment>
                          )
                        }}
                        >
                      </TextField>
                    </div>

                    <div style={{height: '80%'}}>
                      <RecieverListComponent data={recieverList} selectedRecieverHandler={selectedRecieverHandler} />
                    </div>
                  </div>
                </Card>
              ) : (
                // Below using context approch to act as global value provider
                <GlobalContext.Provider value={{toggleTransactionPannel, setToggleTransactionPannel,selectedReciever}}>
                  <TransactionPage />
                </GlobalContext.Provider>
              )
            }
          </Paper>
        </Box>
      </Drawer>
    </div>
  )
}
export default QuickSendPannel;



export function TransactionPage({userDetails}){
  const {toggleTransactionPannel, setToggleTransactionPannel,selectedReciever} = useContext(GlobalContext);
  const array = Array.from({length: 9}, (_,i)=> i+1);
  const [amount, setAmount] = useState();
  const [passcode, setPasscode] = useState();


  // Need to add paying functionality


  const handleKeys = (key) =>{
    setAmount(amount + '' + key)
  }

  // const handlePssCdKeys = (key) =>{
  //   setPasscode(passcode + '' + key)
  // }

  return(
    <Card sx={{ minWidth: 275, width: '100%' }}>
      <div className="d-flex flex-column" style={{height: '100%', margin: '4px'}}>
        <div style={{height: '10%'}}>
          <Typography variant='h6' sx={{
            color: '#353b4e', 
            fontWeight: 'bolder',
            justifyContent: 'start', 
            display: 'flex',
            fontFamily: 'system-ui',
            fontSize: "30px",
            letterSpacing: '0 !important'
            }}>
              <IconButton onClick={() => setToggleTransactionPannel(false)}>
                <ArrowBackIosNewIcon />
              </IconButton>
              Quick Send 
          </Typography>
        </div>
        
        <div style={{height: '30%'}} className='d-flex row justify-content-center'>
          <div className='d-flex justify-content-center'>
            <Avatar 
              id={'txn-prfl'}
              sx={{height: 100, width: 100}}
              src={usrPrep(selectedReciever?.userInfo?.profile_image_url)}
              >
              {(selectedReciever?.username) ? selectedReciever?.username[0] : "D"} 
            </Avatar>
          </div>
          <div className='d-flex justify-content-center'>
            {selectedReciever.username}
          </div>
          <div className='d-flex justify-content-center'>
            {selectedReciever?.userInfo?.phone}
          </div>
        </div>

        <div style={{height: '20%'}}>
          <TextField id="amount-field" 
            placeholder="Enter Amount" 
            type="number"
            sx={{
              width: '100%',
              '& input': { 
                textAlign: "center"
              }
            }}
            InputLabelProps={{
              sx: {
                width: '100%',
                textAlign: 'center'
              }
            }}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            >
          </TextField>

          <TextField id="psscd-field" 
            placeholder="PassCode" 
            type="password"
            sx={{
              width: '100%',
              marginTop:'1%',
              '& input': { 
                textAlign: "center"
              }
            }}
            InputLabelProps={{
              sx: {
                width: '100%',
                textAlign: 'center'
              }
            }}
            value={passcode}
            onChange={(e) => setPasscode(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <KeyRoundedIcon />
                </InputAdornment>
              )
            }}
            >
          </TextField>
        </div>

        <div style={{height: '30%', marginLeft: '3%', marginRight: '3%'}} className='d-flex row justify-content-center'>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container sx={{ flexGrow: 1 }}>
              { array.map((i)=> (
                <Grid item xs={4} sx={{ flexGrow: 1 }} key={"lay-"+i}>
                  <Button variant='text' id={"pad-"+i} 
                    sx={{width:'100%', height: '100%', fontSize: '22px', color: '#383e51'}}
                    onClick={() => handleKeys(i)}
                    > 
                    {i} 
                  </Button>
                </Grid>
              ))}
              <Grid item xs={4} sx={{ flexGrow: 1 }} key={"lay-a"}></Grid>
              <Grid item xs={4} sx={{ flexGrow: 1 }} key={"lay-0"}>
                <Button variant='text' id={"pad-0"} 
                  sx={{width:'100%', height: '100%', fontSize: '22px', color: '#383e51'}}
                  > 
                  0
                </Button>
              </Grid>
              <Grid item xs={4} sx={{ flexGrow: 1 }} key={"lay-c"}></Grid>
            </Grid>
          </Box>
        </div>

        <div className="d-flex justify-content-center" style={{height: '20%', marginTop: '1%'}}>
          <Button variant="contained" sx={{width:'70%', height: '50%', fontSize: '22px', borderRadius:'30px' ,background: '#383e51', color: 'whitesmoke'}}>
            PayNow
          </Button>
        </div>
      </div>
    </Card>
  )
}