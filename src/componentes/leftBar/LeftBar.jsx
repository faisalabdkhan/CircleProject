import "./leftBar.scss"
import Logo from "../logo/Logo"
import NavigationItem from "../navigation-item/NavigationItem"
import Button from "../button/Button"
import { useNavigate } from "react-router-dom"
import { forwardRef } from "react"

import HomeIcon from "@mui/icons-material/Home"
import PeopleIcon from "@mui/icons-material/People"
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth"
import NotificationsIcon from "@mui/icons-material/Notifications"
import SettingsIcon from "@mui/icons-material/Settings"
import AddIcon from "@mui/icons-material/Add"

const LeftBar = forwardRef(({ className = "", onMenuClose }, ref) => {
  const navigate = useNavigate()

  const handleNavigation = (path) => {
    console.log("Navigating to:", path) // Debug log
    navigate(path)
    // Close mobile menu if it's open
    if (onMenuClose) {
      onMenuClose()
    }
  }

  const handleCreateCircle = () => {
    // Handle create circle functionality
    console.log("Create Circle clicked")
    if (onMenuClose) {
      onMenuClose()
    }
  }

  return (
    <div ref={ref} className={`leftbar ${className}`}>
      <Logo />

      <nav className="nav-links">
        <div className="nav-item" onClick={() => handleNavigation("/")}>
          <HomeIcon fontSize="small" />
          <span>Home</span>
        </div>

        <div className="nav-item" onClick={() => handleNavigation("/circles")}>
          <PeopleIcon fontSize="small" />
          <span>My Circles</span>
        </div>

        <div className="nav-item" onClick={() => handleNavigation("/memories")}>
          <CalendarMonthIcon fontSize="small" />
          <span>Memories</span>
        </div>

        <div className="nav-item" onClick={() => handleNavigation("/notifications")}>
          <NotificationsIcon fontSize="small" />
          <span>Notifications</span>
        </div>

        <div className="nav-item" onClick={() => handleNavigation("/settings")}>
          <SettingsIcon fontSize="small" />
          <span>Settings</span>
        </div>
      </nav>

      <Button variant="primary" onClick={handleCreateCircle}>
        <AddIcon fontSize="small" />
        Create Circle
      </Button>
    </div>
  )
})

LeftBar.displayName = 'LeftBar'

export default LeftBar
