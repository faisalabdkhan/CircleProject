"use client"

import "./bottombar.scss"
import NavigationItem from "../navigation-item/NavigationItem"

import HomeIcon from "@mui/icons-material/Home"
import GroupIcon from "@mui/icons-material/Group"
import PhotoAlbumIcon from "@mui/icons-material/PhotoAlbum"
import NotificationsIcon from "@mui/icons-material/Notifications"
import SettingsIcon from "@mui/icons-material/Settings"
import AddCircleIcon from "@mui/icons-material/AddCircle"

const BottomBar = () => {
  return (
    <div className="bottomBar">
      <nav className="nav-links">
        <NavigationItem to="/" icon={HomeIcon} isBottomNav>
          Home
        </NavigationItem>

        <NavigationItem to="/circles" icon={GroupIcon} isBottomNav>
          My Circles
        </NavigationItem>

        <NavigationItem to="/memories" icon={PhotoAlbumIcon} isBottomNav>
          Memories
        </NavigationItem>

        <NavigationItem to="/notifications" icon={NotificationsIcon} isBottomNav>
          Notifications
        </NavigationItem>

        <NavigationItem to="/settings" icon={SettingsIcon} isBottomNav>
          Settings
        </NavigationItem>

        <NavigationItem icon={AddCircleIcon} isBottomNav isCreate onClick={() => console.log("Create clicked")}>
          Create
        </NavigationItem>
      </nav>
    </div>
  )
}

export default BottomBar
