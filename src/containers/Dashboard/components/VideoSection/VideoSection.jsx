import React, { useState } from "react";
import { Box, Typography, Stack, Grid, Hidden } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import collaboratorImage1 from "assets/collaborator1.svg";
import VideoCard from "components/VideoCard/VideoCard";
import Tabs from "components/Tabs";
import { StyledAvatar } from "./VideoSection.styles";

const VideoSection = ({ setOpen }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [tabs, setTabs] = useState([
    {
      id: 1,
      title: "All",
      active: true,
    },
    {
      id: 2,
      title: "Ads video",
      active: false,
    },
    {
      id: 3,
      title: "Ai generated video",
      active: false,
    },
    {
      id: 4,
      title: "Marketing video",
      active: false,
    },
  ]);

  const handleTabs = (id) => {
    const items = [...tabs];
    items.forEach((item, index) => {
      if (item.id === id) items[index].active = true;
      else items[index].active = false;
    });
    setTabs(items);
  };

  const handleMouseEnter = (index) => {
    setIsHovered(index);
  };

  const handleMouseLeave = () => {
    setIsHovered(null);
  };
  return (
    <Box
      sx={{
        background: "#F9F9F9",
        borderRadius: "3.2rem",
        p: 3,
        mt: 4,
      }}
    >
      <Stack direction="row">
        <Typography variant="h4">Recent Videos</Typography>
      </Stack>
      <Stack direction="row" alignItems="center" mt={1} gap={2}>
        <Typography
          variant="subtitle2"
          sx={{
            color: "#838383",
          }}
        >
          Recently created videos
        </Typography>
        <Box
          sx={{
            background: "#25AE3B",
            color: "#ffffff",
            fontSize: "1.3rem",
            fontWeight: 500,
            px: 1.5,
            py: 0.5,
            borderRadius: "2rem",

            "&:hover": {
              background: "#25AE3B",
            },
          }}
        >
          10 Sep, 2023
        </Box>
      </Stack>
      <Stack
        mt={4}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box>
          <Tabs tabs={tabs} handleTabs={handleTabs} />
        </Box>

        <Hidden mdDown>
          <Stack direction="row" alignItems="center" gap={2}>
            <Typography
              sx={{
                fontSize: "1.2rem",
                fontWeight: 500,
                color: "#474747",
              }}
            >
              Collaboraters:
            </Typography>
            <Stack direction="row" position="relative">
              <Box position="relative">
                {Array(2)
                  .fill("")
                  .map((_, index) => (
                    <StyledAvatar
                      src={collaboratorImage1}
                      alt="avatar"
                      zIndex={4 - index}
                    />
                  ))}
              </Box>
            </Stack>

            <Typography
              variant="subtitle2"
              sx={{
                color: "#725DFF",
                cursor: "pointer",
              }}
              onClick={() => setOpen(true)}
            >
              + Add new
            </Typography>
          </Stack>
        </Hidden>
      </Stack>

      <Grid container mt={5} gap={1.5} justifyContent="center">
        {Array(12)
          .fill("")
          .map((_, index) => (
            <Grid sx={{ width: { xs: "100%", sm: "auto" } }} key={uuidv4()}>
              <Box
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <VideoCard
                  isHovered={isHovered === index}
                  hoverBgColor="#725DFF"
                  hoverContentColor="#ffffff"
                  title="First Project"
                  createdAt="13 Aug, 2023"
                />
              </Box>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default VideoSection;
