import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppRouter from './AppRouter'

// const Footer=(props) => {
//   const current_year = new Date(); 
//   return (
//     <>
//       <div class="global-footer">
//         <p class="footer-text">{props.instance.application_name ? props.instance.application_name : ''} | All Rights Reserved@{current_year.getFullYear()}</p>
//       </div>
//     </>
//   )
// }


const  App = () => {
  // const [count, setCount] = useState(0)
  // const current_instance = {
  //   application_name: "PayNow",
  //   theme_base_color: "#cfcbcb",
  //   theme_primary_color: "#cfcbcb"
  // }
  return (
    <AppRouter />
  );
}
export default App
