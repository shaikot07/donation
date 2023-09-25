import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../mainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import DonateDitils from "../Component/DonateDitials/DonateDitils";
import ErrorPage from "../Component/Error/ErrorPage";




const myCreatedRouter = createBrowserRouter([
      {
            path:'/',
            element:<MainLayout></MainLayout>,
            errorElement:<ErrorPage></ErrorPage>,
            children:[
                  {
                        path:'/',
                        element:<Home></Home>,
                        loader:()=> fetch('/demo.json')
                  },
                  {
                        path:'/donation',
                        element:<Donation></Donation>
                  },
                  {
                        path:'/statistics',
                        element:<Statistics></Statistics>,
                        loader:()=> fetch('/demo.json')
                  },
                  {
                        path:'/donationDiv/:id',
                        element:<DonateDitils></DonateDitils>,
                        loader:()=> fetch('/demo.json')
                  },
            ]
      }
])

export default myCreatedRouter;