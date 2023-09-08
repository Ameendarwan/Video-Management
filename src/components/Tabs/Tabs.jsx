import React from "react";
import { Stack, Button } from "@mui/material";

function Tabs({ tabs, handleTabs }) {
  return (
    <Stack direction="row" flexWrap="wrap" gap={2}>
      {tabs.map((tab) => (
        <Button
          key={tab.id}
          onClick={() => handleTabs(tab.id)}
          sx={{
            border: `0.1rem solid #C5C5C5`,
            padding: "0.5rem 1.6rem",
            background: tab.active ? "#191B1C" : "#ffffff",
            color: tab.active ? "#ffffff" : "#616161",
            borderRadius: "2.7rem",
            fontSize: "1.4rem",
            "&:hover": {
              background: tab.active ? "#191B1C" : "#ffffff",
            },
          }}
        >
          {tab.title}
        </Button>
      ))}
    </Stack>
  );
}

export default Tabs;
