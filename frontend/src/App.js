
import "./App.css";
import { Box } from "@chakra-ui/react";

import UserPage from "./Pages/UserPage";
import Signup from "./Pages/authentication/Signup";
import Login from "./Pages/authentication/Login";


import UserNavbar from "./Components/UserNavbar";
import AllRoutes from "./Routes/AllRoutes";






function App() {
  return (
    <Box>

      <UserNavbar />
      <AllRoutes />

    </Box>


  );
}

export default App;
