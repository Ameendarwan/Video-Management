import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "containers/ErrorFallback";
import { theme } from "./theme/mui";
import GlobalStyle from "./styles/globalStyle";
import "fontsource-poppins";
import "@mui/material/styles";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ErrorBoundary FallbackComponent={ErrorFallback} />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
