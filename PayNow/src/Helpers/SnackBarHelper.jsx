import React, { createContext, useState, useContext } from "react";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { Grow, Slide, Fade } from "@mui/material";

const SnackBarContext =  createContext();
export const useSnackBar = () => useContext(SnackBarContext);


/* Usage options:
  - severity: 'error'|'info'|'success'|'warning'|string
  - variant: 'filled'|'outlined'|'standard'|string
  
  - transition: 'SlideTransition'|'GrowTransitions'|'FadeTransition'
*/


const SnackBarHelper = ({ children }) => {
  const [snackbar, setSnackbar] = useState({
    open: false, 
    vertical: 'bottom', 
    horizontal: 'center',
    duration: 2000,
    message: '',
    severity: 'info',
    transition: Fade,
    variant: "filled"
  });


  const showSnackBar = (newState) => {
    let transition = ''
    if(newState.transition){
      // Handling transitions
      if(newState.transition == 'SlideTransition'){
        transition = SlideTransition
      }
      else if(newState.transition == 'GrowTransitions'){
        transition = GrowTransitions
      }
      else if (newState.transition == 'FadeTransition'){
        transition = Fade
      }
    }

    setSnackbar({
      open: true,
      vertical: newState.vertical || snackbar.vertical,
      horizontal: newState.horizontal || snackbar.horizontal,
      duration: newState.duration || snackbar.duration,
      message: newState.message || snackbar.message,
      severity: newState.severity || snackbar.severity,
      transition: transition || snackbar.transition
    });
  };

  const closeSnackBar = () => {
    setSnackbar({ ...snackbar, open: false});
  };

  return (
    <SnackBarContext.Provider value={showSnackBar}>
      {children}
      <Snackbar
        anchorOrigin={{ vertical: snackbar.vertical, horizontal: snackbar.horizontal }}
        open={snackbar.open}
        onClose={closeSnackBar}
        key={snackbar.vertical + snackbar.horizontal}
        autoHideDuration={snackbar.duration}
        TransitionComponent={snackbar.transition}
      >
        <Alert onClose={closeSnackBar} 
          severity={snackbar.severity}
          variant="filled"
          sx={{ width: '100%' }}
          >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </SnackBarContext.Provider>
  );

};
export default SnackBarHelper;




// Customisations

// Transitions
function SlideTransition(props){
  return <Slide {...props} direction="up" />
}

function GrowTransitions(props){
  return <Grow {...props} />
}

function FadeTransition(){
  return <Fade {...props} />
}

function assignTransitions(transition){

}