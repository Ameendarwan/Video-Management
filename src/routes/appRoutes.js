import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routeNames } from "./routeNames";

const Dashboard = lazy(() => import("containers/Dashboard"));

function AppRoutes() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={routeNames.dashboard} element={<Dashboard />} />
          <Route path="*" element={<p>There's nothing here: 404!</p>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default AppRoutes;
