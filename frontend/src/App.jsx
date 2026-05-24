import { Routes, Route } from "react-router-dom";

import ProtectedRoute from "./routes/ProtectedRoute";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

import CreateInterview from "./pages/CreateInterview";
import InterviewDetails from "./pages/InterviewDetails";
import Reports from "./pages/Reports";



function App() {

  return (

    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />



      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />



      <Route
        path="/create-interview"
        element={
          <ProtectedRoute>
            <CreateInterview />
          </ProtectedRoute>
        }
      />



      <Route
        path="/reports"
        element={
          <ProtectedRoute>
            <Reports />
          </ProtectedRoute>
        }
      />



      <Route
        path="/interview/:id"
        element={
          <ProtectedRoute>
            <InterviewDetails />
          </ProtectedRoute>
        }
      />

    </Routes>

  );

}

export default App;