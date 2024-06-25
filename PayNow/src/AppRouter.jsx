import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import HomeComponent from './Components/Home/HomeComponent';
import LoginComponent from './Components/Login/LoginComponent';
import SignUpComponent from './Components/SignUp/SignUpComponent';
import LogoutComponent from './Components/Logout/LogoutComponent';
import SomethingWentWrong from './Components/ErrorScreenComponents/SomethingWentWrong';

const appRouting = createBrowserRouter([
  {
    path: "/login",
    element: <LoginComponent />,
    errorElement: <SomethingWentWrong />
  },
  {
    path: "/signup",
    element: <SignUpComponent />,
    errorElement: <SomethingWentWrong />
  },
  {
    path: "/home",
    element: <HomeComponent />,
    errorElement: <SomethingWentWrong />
  },
  {
    path: "/logout",
    element: <LogoutComponent />,
    errorElement: <SomethingWentWrong />
  }
]);


const AppRouter = () => {
  return (
    <RouterProvider router={appRouting} />
  )
}
export default AppRouter