import React from "react";
import { Box, CloseButton, MenuIcon } from "@chakra-ui/react";

const MenuToggle({toggle, isOpen})=> {
    return (
        <Box display={{base: "block", md:"none"}} onClick={toggle}>
                {isOpen ? <CloseButton/> : <MenuIcon/>} 
        </Box>
    )
}

export default MenuIcon;