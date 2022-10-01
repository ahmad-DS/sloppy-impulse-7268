import "./App.css";
import { Box } from "@chakra-ui/react";
import UserPage from "./Pages/UserPage";

import SidebarRoutes from "./Planpage/Routes/SidebarRoutes";

function App() {
  return (
    <Box>
      <SidebarRoutes />
    </Box>
  );
}

export default App;
