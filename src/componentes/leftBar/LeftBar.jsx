import "./leftBar.scss"
import Logo from "../logo/Logo"
import NavigationItem from "../navigation-item/NavigationItem"
import Button from "../button/Button"

import HomeIcon from "@mui/icons-material/Home"
import PeopleIcon from "@mui/icons-material/People"
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth"
import NotificationsIcon from "@mui/icons-material/Notifications"
import SettingsIcon from "@mui/icons-material/Settings"
import AddIcon from "@mui/icons-material/Add"

const LeftBar = () => {
  return (
    <div className="leftbar">
      <Logo />

      <nav className="nav-links">
        <NavigationItem to="/" icon={HomeIcon}>
          Home
        </NavigationItem>

        <NavigationItem to="/circles" icon={PeopleIcon}>
          My Circles
        </NavigationItem>

        <NavigationItem to="/memories" icon={CalendarMonthIcon}>
          Memories
        </NavigationItem>

        <NavigationItem to="/notifications" icon={NotificationsIcon}>
          Notifications
        </NavigationItem>

        <NavigationItem to="/settings" icon={SettingsIcon}>
          Settings
        </NavigationItem>
      </nav>

      <Button variant="primary">
        <AddIcon fontSize="small" />
        Create Circle
      </Button>
    </div>
  )
}

export default LeftBar
