import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../mainLayout/MainLayout";
import Home from "../assets/Pages/Home/Home";


const myCreatedRouter = createBrowserRouter([
      {
            path:'/',
            element:<MainLayout></MainLayout>,
            children:[
                  {
                        path:'/',
                        element:<Home></Home>
                  },
            ]
      }
])

export default myCreatedRouter;