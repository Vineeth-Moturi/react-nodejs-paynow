import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import AppRouter from './AppRouter';
import styled from 'styled-components';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const ApplicationContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

const  App = () => {
  return (
    <ApplicationContainer>
      <AppRouter />
    </ApplicationContainer>
  );
}
export default App
