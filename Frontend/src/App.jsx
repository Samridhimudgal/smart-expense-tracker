import React from 'react'
import{
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Auth/Auth/Login";
import SignUp from "./pages/Auth/Auth/SignUp";
import Home from "./pages/Auth/dashboard/Home";
import Income from "./pages/Auth/dashboard/Income";
import Expense from "./pages/Auth/dashboard/Expense";
import UserProvider from './context/userContext';
import { Toaster } from "react-hot-toast";
import AIInsights from './components/Dashboard/AIInsights';

const App = () => {
  return (
    <UserProvider>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Root />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/signUp" exact element={<SignUp />} />
            <Route path="/dashboard" exact element={<Home />} />
            <Route path="/income" exact element={<Income />} />
            <Route path="/expense" exact element={<Expense />} />
            <Route path="/ai-insights" element={<AIInsights />} />
          </Routes>
        </Router>
      </div>

      <Toaster
        toastOptions={{
          className: "",
          style: {
            fontSize: "13px"
          },
        }}
      />
    </UserProvider>
  );
};

export default App

const Root = () => {
  //Check if token exists in the LocalStorage
  const isAuthenticated = !!localStorage.getItem("token");

  //Redirected to dashboard if authenticated, otherwise to Login
  return isAuthenticated ? (<Navigate to="/dashboard" />) : (<Navigate to="/login" />);
};