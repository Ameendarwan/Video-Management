import React, { useState } from "react";
import { Layout } from "./Dashboard.styles";
import menu from "assets/menu.svg";
import { Grid, Box, Stack, Typography, Hidden } from "@mui/material";

import {
  SearchNormal1,
  MicrophoneSlash1,
  Activity,
  Add,
  Send2,
} from "iconsax-react";
import dashboardIcon from "assets/dashboard.svg";
import userImage from "assets/user.svg";
import frame from "assets/frame.svg";
import Sidebar from "components/Sidebar/";
import VideoSection from "./components/VideoSection/VideoSection";
import AddCollaboratorForm from "./components/CollaboratorsSection/AddCollaboratorForm";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  return (
    <Layout>
      <Sidebar />
      <Grid container>
        <AddCollaboratorForm open={open} setOpen={setOpen} />
        <Hidden lgDown>
          <Grid md={2.5} lg={2.5} xl={2.5}>
            <Box
              sx={{
                height: "100vh",
                pt: 3.5,
                overflowY: "hidden",
                px: 3,
                boxSizing: "border-box",
              }}
            >
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Box component="img" src={dashboardIcon} alt="dashboard" />
                <Stack direction="row" alignItems="center" gap={4}>
                  <SearchNormal1 size={20} color="#222222" />
                  <MicrophoneSlash1 size={20} color="#725DFF" variant="Bulk" />
                </Stack>
              </Stack>

              <Typography variant="subtitle2" sx={{ color: "#676767", mt: 4 }}>
                Overview
              </Typography>
              <Stack
                direction="row"
                alignItems="center"
                gap={2}
                mt={3}
                sx={{ cursor: " pointer" }}
              >
                <Activity size={24} color="#292D32" />
                <Typography sx={{ color: "#000000" }} variant="subtitle1">
                  Recent Videos
                </Typography>
              </Stack>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                mt={4}
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  gap={2}
                  sx={{ cursor: " pointer" }}
                >
                  <Send2 size={26} color="#292D32" variant="Outline" />
                  <Typography sx={{ color: "#000000" }} variant="subtitle1">
                    Collaboraters
                  </Typography>
                </Stack>
                <Box
                  sx={{
                    display: "flex",
                    borderRadius: "50%",
                    p: 0.5,
                    background:
                      " linear-gradient(90deg, #725DFF -0.12%, #B265FF 100%)",
                  }}
                >
                  <Add
                    size={20}
                    color="#FFFFFF"
                    cursor="pointer"
                    onClick={() => setOpen(true)}
                  />
                </Box>
              </Stack>
            </Box>
          </Grid>
        </Hidden>
        <Grid xs={12} sm={12} md={12} lg={9.5} xl={9.5}>
          <Box
            sx={{
              height: "100vh",
              width: "100%",
              background: "#ffffff",
              pt: 2,
              px: 3,
              overflowY: "auto",
              boxSizing: "border-box",
            }}
          >
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Stack direction="row" alignItems="center" gap={2}>
                <Hidden mdUp>
                  <Box
                    sx={{
                      borderRadius: "1.6rem",
                      border: "0.1rem solid #F3F3F3",
                      background: "rgba(242, 242, 242, 0.20)",
                    }}
                  >
                    <Box component="img" src={menu} alt="menu" />
                  </Box>
                </Hidden>

                <Box component="img" src={frame} alt="frame" />
                <Stack direction="row" alignItems="center" gap={0.5}>
                  <Typography
                    sx={{
                      fontSize: "1.6rem",
                      fontWeight: 500,
                    }}
                  >
                    Hi,
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: "#7B7B7B",
                    }}
                  >
                    Ameen
                  </Typography>
                </Stack>
              </Stack>
              <Stack direction="row" alignItems="center" gap={2}>
                <Hidden smDown>
                  <Stack mt={0.5}>
                    <Typography
                      sx={{
                        fontSize: "1.6rem",
                        fontWeight: 500,
                        lineHeight: "1.5rem",
                      }}
                    >
                      Ameen Darwan
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "1.4rem",
                        fontWeight: 300,
                        color: "#8D8D8D",
                      }}
                    >
                      ameen@gmail.com
                    </Typography>
                  </Stack>
                </Hidden>
                <Box component="img" src={userImage} alt="frame" />
              </Stack>
            </Stack>
            <VideoSection setOpen={setOpen} />
          </Box>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Dashboard;
