import { createBrowserRouter, RouterProvider, Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";

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
  // const { currentUser } = useContext(AuthContext);
  // const { darkMode } = useContext(DarkModeContext);

  // 🔒 Protect Routes
  // const ProtectedRoute = ({ children }) => {
  //   if (!currentUser) {
  //     return <Navigate to="/login" />;
  //   }
  //   return children;
  // };

  // 🧩 Layout with Navbar + LeftBar
  const Layout = () => {
    return (
      <div>
        <Navbar />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <div style={{ flex: 1 }}>
            <Outlet />
          </div>
          <BottomBar/>
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
