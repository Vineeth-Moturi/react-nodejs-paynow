import { useState, useEffect } from "react";
import {homeApi} from '../../Services/HomeService';

import './HomeStyles.css';
import BackgroundTemplate1 from '../GenericLayouts/BackgroundTemplate1/BackgroundTemplate1';
import TopNavToolbar from '../GenericLayouts/TopNavToolbar/TopNavToolbar';
import DashboardHeader from './DashboardHeader/DashboardHeader';
import DashboardBodyContent from './DashboardBodyContent/DashboardBodyContent';

function HomeComponent(){
  const [count, setCount] = useState('');

  useEffect(() => {
    const fetchHomeData = async ()=>{
      const res = await homeApi({});
      if(res){
        console.log('HomeComponent res', res)
      }
    }
    fetchHomeData();
  });

  return(
    <div className="d-flex layout">
      <BackgroundTemplate1 />

      {/* Main overlay */}
      <div style={{
        position: 'absolute',
        background: 'transparent',
        width: '100%',
        height: '100%'
        }}>

          <div className="d-flex row col-12 layout" style={{
            color: 'whitesmoke', 
            margin: '0px',}}
            >
              <div className="d-flex" style={{
                minHeight: '40px',
                maxHeight: '40px'}}
                >
                <TopNavToolbar />
              </div>

              <div className="d-flex" style={{
                minHeight: 'calc(25% - 40px)',
                maxHeight: 'calc(25% - 40px)',
                marginLeft: '3%',
                marginRight: '3%',
                width: '94%'}}
                >
                <DashboardHeader />
              </div>

              <div className="d-flex" style={{
                minHeight: '75%',
                maxHeight: '75%',
                marginLeft: '3%',
                marginRight: '3%',
                width: '94%'}}
                >
                <DashboardBodyContent />
              </div>
          </div>
        
      </div>
    </div>
  )
}
export default HomeComponent;