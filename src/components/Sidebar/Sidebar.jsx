import React from "react";
import { SidebarContainer } from "./Sidebar.styles";
import userImage from "assets/user.svg";
import { Stack, Box, Hidden } from "@mui/material";

const Sidebar = () => {
  return (
    <Hidden mdDown>
      <Stack direction="row">
        <SidebarContainer>
          <Box mt={2}>
            <Box component="img" src={userImage} alt="user" />
          </Box>
        </SidebarContainer>
      </Stack>
    </Hidden>
  );
};

export default Sidebar;
