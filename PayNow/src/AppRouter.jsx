import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import HomeComponent from './Components/Home/HomeComponent';
import LoginComponent from './Components/Login/LoginComponent';
import SignUpComponent from './Components/SignUp/SignUpComponent';



const appRouting = createBrowserRouter([
  {
    path: "/login",
    element: <LoginComponent />
  },
  {
    path: "/signup",
    element: <SignUpComponent />
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