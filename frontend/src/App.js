
import "./App.css";
import { Box } from "@chakra-ui/react";
import UserPage from "./Pages/UserPage";
import Signup from "./Pages/authentication/Signup";
import Login from "./Pages/authentication/Login";



function App() {
  return (
    <Box>
      <Signup/>
      {/* <br/>
      <br/>
      <br/>
      <Login/> */}
    </Box>


  );
}

export default App;
