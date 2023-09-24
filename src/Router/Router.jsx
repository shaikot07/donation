import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../mainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import DonateDitils from "../Component/DonateDitials/DonateDitils";




const myCreatedRouter = createBrowserRouter([
      {
            path:'/',
            element:<MainLayout></MainLayout>,
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
                        element:<Statistics></Statistics>
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