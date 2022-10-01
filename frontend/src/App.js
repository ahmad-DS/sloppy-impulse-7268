
import "./App.css";
import { Box } from "@chakra-ui/react";

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
