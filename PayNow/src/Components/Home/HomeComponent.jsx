import { useState, useEffect } from "react";
import {homeApi} from '../../Services/HomeService';

import './HomeStyles.css';
import BackgroundTemplate1 from '../GenericLayouts/BackgroundTemplate1/BackgroundTemplate1';
import TopNavToolbar from '../GenericLayouts/TopNavToolbar/TopNavToolbar';

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
                maxHeight: '40px',
                }}
                >
                <TopNavToolbar />
              </div>

              <div className="d-flex" style={{
                minHeight: 'calc(30% - 40px)',
                maxHeight: 'calc(30% - 40px)',
                }}
                >
                test 1
              </div>

              <div className="d-flex" style={{
                minHeight: '70%',
                maxHeight: '70%',}}
                >
                test2
              </div>
          </div>
        
      </div>
    </div>
  )
}
export default HomeComponent;