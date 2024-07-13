import {
createBrowserRouter,
   } from "react-router-dom";
import MainLayout from './../Layouts/Main/MainLayout';
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/aboutUs',
        
        }
      ]
    },
  ]);
  export default router;