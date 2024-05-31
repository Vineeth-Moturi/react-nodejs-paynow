import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import HomeComponent from './Components/Home/HomeComponent';
import LoginComponent from './Components/Login/LoginComponent';



const appRouting = createBrowserRouter([
  {
    path: "/login",
    element: <LoginComponent />
  },
  {
    path: "/home",
    element: <HomeComponent />
  }
]);


const AppRouter = () => {
  return (
    <RouterProvider router={appRouting} />
  )
}
export default AppRouter