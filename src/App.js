import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Navbar from "./componentes/navbar/Navbar";
import LeftBar from "./componentes/leftBar/LeftBar";
import BottomBar from "./componentes/bottomBar/BottomBar"
import Home from "./pages/home/Home";
// import Profile from "./pages/profile/Profile";
import Memories from "./pages/memories/Memories";
import Setting from "./pages/settings/Settings";
import MyCircles from "./pages/mycircles/MyCircles"
import Notifications from "./pages/notifications/Notifications"

// import { DarkModeContext } from "./context/darkModeContext";
// import { AuthContext } from "./context/authContext";

import "./style.scss";
// import { Settings } from "@mui/icons-material";

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  
  // const { currentUser } = useContext(AuthContext);
  // const { darkMode } = useContext(DarkModeContext);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Debug log for menu state changes
  useEffect(() => {
    console.log("Mobile menu state changed:", isMobileMenuOpen);
  }, [isMobileMenuOpen]);

  // 🔒 Protect Routes
  // const ProtectedRoute = ({ children }) => {
  //   if (!currentUser) {
  //     return <Navigate to="/login" />;
  //   }
  //   return children;
  // };

  // 🧩 Layout with Navbar + LeftBar
  const Layout = () => {
    const handleMenuToggle = (isOpen) => {
      console.log("App received menu toggle:", isOpen); // Debug log
      setIsMobileMenuOpen(isOpen);
    };

    const handleMenuClose = () => {
      console.log("App closing menu"); // Debug log
      setIsMobileMenuOpen(false);
    };

    return (
      <div className="app-layout">
        <Navbar onMenuToggle={handleMenuToggle} />
        <div className="main-content">
          <LeftBar 
            ref={mobileMenuRef}
            className={`hide-mobile ${isMobileMenuOpen ? 'mobile-open' : ''}`} 
            onMenuClose={handleMenuClose}
          />
          <div className="content-area">
            <Outlet />
          </div>
          <BottomBar className="show-mobile" />
        </div>
      </div>
    );
  };

  // 🌐 Define routes
  const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/memories', element: <Memories /> },
      { path: '/settings', element: <Setting /> },
      { path: '/circles', element: <MyCircles /> },
      { path: '/notifications', element: <Notifications /> },
    ],
  },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
