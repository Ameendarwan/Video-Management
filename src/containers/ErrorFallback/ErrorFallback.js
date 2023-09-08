import React from "react";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  const navigate = useNavigate();

  const refresh = () => {
    resetErrorBoundary();
    navigate("/");
  };

  return (
    <>
      <section>
        <div>
          <Typography variant="h1" sx={{ mb: 2 }}>
            Oops...
          </Typography>
          <Typography variant="h4" sx={{ mb: 2 }}>
            An unexpected error occured.
          </Typography>
          <Typography variant="body1" sx={{ mb: 7 }}>
            We’re sorry for any inconveinience caused. If you keep experiencing
            this issue then please let us know.
          </Typography>
          <Button variant="contained" onClick={refresh}>
            Return to the homepage
          </Button>
        </div>
        {/* <img src={ErrorImg} alt="Unknown error occured" /> */}
      </section>
      <footer>
        <Typography variant="subtitle2">Error message</Typography>
        <pre>
          <code>
            {error.name}: {error.message}
          </code>
        </pre>
        {error.stack && (
          <>
            <Typography variant="subtitle2">Stack trace</Typography>
            <pre>
              <code>{JSON.stringify(error.stack)}</code>
            </pre>
          </>
        )}
      </footer>
    </>
  );
};

export default ErrorFallback;
