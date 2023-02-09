import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import reactLogo from "./assets/react.svg";
import "./App.css";

// Pages

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Unauthorized from "./pages/Unauthorized";
import PrivateRoute from "./helpers/PrivateRoute";

const ROLES = {
  hr_manager: "hr_manager",
};
function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Login />} />
            {/* private routes */}
            <Route element={<PrivateRoute allowedRoles={[ROLES.hr_manager]} />}>
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
            <Route path="/unauthorize" element={<Unauthorized />} />
          </Routes>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
