import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import CompanyDashboard from "./pages/CompanyDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import UserDashboard from "./pages/UserDashboard";
import { useAuth } from "./AuthContext";


const ProtectedRoute = ({ element: Element }) => {
  const { authenticated } = useAuth();
  return authenticated ? <Element /> : <Navigate to="/login" replace />;
};

const router = createBrowserRouter([
  {
    path: "",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/Company_dashboard",
    element: <ProtectedRoute element={CompanyDashboard} />,
  },
  {
    path: "/Admin_dashboard",
    element: <ProtectedRoute element={AdminDashboard} />,
  },
  {
    path: "/Employee_dashboard",
    element: <ProtectedRoute element={UserDashboard} />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
