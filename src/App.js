import React from 'react';
import AngryPage from "./layoutAngrypage";
import ModeCircles from './components/ModeCircles';
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Background from './components/background';
import Sad from './components/sadcomponents/sadPage';
import Normal from './components/normalcomponents/normalPage';
import NewLogin from './pages/loginpage';
import Signup from './pages/signuppage';
import OTPVerification from './pages/otppage';
import { useCheak_authQuery } from './redux/api/userApi';
import Loader from './components/loader';

const ProtectedRoute = ({ children, allowedRoles }) => {
  const navigate = useNavigate();
  const { data, error, isLoading } = useCheak_authQuery();

  if (isLoading) return <Loader />;

  console.log("user", data);
  const isAuthenticated = data?.success;
  const isVerified = data?.user?.isvarified;
  const role = data?.user?.role;

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  if (isAuthenticated && !isVerified) {
    return <Navigate to="/otp" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(role)) {
    return <Navigate to="/" replace />;
  }

  return children;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NewLogin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/otp" element={<OTPVerification />} />
      
      <Route 
        path="/modes" 
        element={
          <ProtectedRoute>
            <>
              <ModeCircles />
              <Background />
            </>
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/angry" 
        element={
          <ProtectedRoute>
            <AngryPage />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/sad" 
        element={
          <ProtectedRoute>
            <Sad />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/normal" 
        element={
          <ProtectedRoute>
            <Normal />
          </ProtectedRoute>
        } 
      />
    </Routes>
  );
};

export default App;
