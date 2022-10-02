import "./App.css";
import { Box } from "@chakra-ui/react";
import AllRoutes from "./Routes/AllRoutes";
import "./App.css";
import SidebarRoutes from "./Planpage/Routes/SidebarRoutes";
function App() {
  return (
    <Box>

      {/* <Home/> */}
      <AllRoutes/>
      <SidebarRoutes/>
    </Box>
  );
}

export default App;
