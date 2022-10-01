import { extendTheme } from "@chakra-ui/react";
import Box from "./Box"
import Heading from "./Heading";
// import Text from "./Text";
// import FormLabel from "./FormLabel";
const theme = extendTheme({
    components:{
        Heading,
        Box
    }
})

export default theme;