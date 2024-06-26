import { useState, useEffect } from "react"
import {homeApi} from '../../Services/HomeService';

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
}
export default HomeComponent;