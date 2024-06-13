import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import AppRouter from './AppRouter';
import styled from 'styled-components';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const  App = () => {
  return (
    <div className='d-flex h-100 w-100 p-0'>
      <AppRouter />
    </div>
  );
}
export default App
