import React from "react";
import {
  Modal,
  Box,
  Button,
  Typography,
  Stack,
  TextField,
  InputAdornment,
} from "@mui/material";
import { Sms } from "iconsax-react";

const AddCollaboratorForm = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Box
        sx={{
          background: "#ffffff",
          borderColor: "transparent",
          borderRadius: "1.6rem",
          outline: "none",
          p: 4,
        }}
      >
        <Stack>
          <Typography
            sx={{
              fontSize: "2.2rem",
              fontWeight: 500,
            }}
          >
            Invite Collaboraters
          </Typography>
          <Typography variant="subtitle2">
            Lorem ipsum dolor sit amet consectetur.
          </Typography>
          <Typography variant="subtitle2" mt={2} mb={1}>
            Name or Email
          </Typography>
          <TextField
            placeholder="e.g Ameen , ameen@gmail.com"
            sx={{
              "& input": {
                textIndent: "2rem",
                fontSize: "1.4rem",
              },
              "& input::placeholder": {
                color: "#222222",
                opacity: 1,
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="end">
                  <Sms size={20} color="#222222" variant="Bulk" />
                </InputAdornment>
              ),
            }}
          />
          <Box mt={3}>
            <Typography variant="subtitle2">
              This site is protected by reCAPTCHA and the Google
            </Typography>
            <Typography variant="subtitle2">
              <Typography
                display="inline"
                variant="subtitle2"
                sx={{ color: "#4D33EF" }}
              >
                Privacy Policy
              </Typography>{" "}
              and{" "}
              <Typography
                display="inline"
                variant="subtitle2"
                sx={{
                  color: "#4D33EF",
                }}
              >
                Terms of Service
              </Typography>{" "}
            </Typography>
          </Box>
          <Button
            variant="contained"
            size="medium"
            sx={{
              backgroundColor: "#5136FF",
              marginLeft: "auto",
              color: "#ffffff",
              fontSize: "1.4rem",
            }}
          >
            Add
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
};

export default AddCollaboratorForm;
