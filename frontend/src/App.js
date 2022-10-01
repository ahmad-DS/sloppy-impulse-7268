
import "./App.css";
import { Box } from "@chakra-ui/react";

import UserPage from "./Pages/UserPage";
import Signup from "./Pages/authentication/Signup";
import Login from "./Pages/authentication/Login";


import UserNavbar from "./Components/UserNavbar";
import AllRoutes from "./Routes/AllRoutes";
import Home from "../src/Pages/Home/Home"


import SidebarRoutes from "./Planpage/Routes/SidebarRoutes";



import './App.css';
import SignUp from "./Pages/authentication/Signup";
import HomeNavbar from "./Pages/Home/HomeNavbar";
function App() {
  return (


    <Box>
      
       {/* <Home/> */}
       <AllRoutes/>

    </Box>

  );
}

export default App;
