"use client"

import { useState } from "react"
import "./settings.scss"
import Card from "../../componentes/card/Card"

import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import NotificationsIcon from "@mui/icons-material/Notifications"
import LockIcon from "@mui/icons-material/Lock"
import SecurityIcon from "@mui/icons-material/Security"
import LogoutIcon from "@mui/icons-material/Logout"
import MenuIcon from "@mui/icons-material/Menu"

import AccountSettings from "./sections/AccountSettings"
import NotificationSettings from "./sections/NotificationSettings"
import PrivacySettings from "./sections/PrivacySettings"
import SecuritySettings from "./sections/SecuritySettings"

const Settings = () => {
  const [selected, setSelected] = useState("account")
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  const renderSection = () => {
    switch (selected) {
      case "account":
        return <AccountSettings />
      case "notifications":
        return <NotificationSettings />
      case "privacy":
        return <PrivacySettings />
      case "security":
        return <SecuritySettings />
      default:
        return <AccountSettings />
    }
  }

  const handleSectionSelect = (section) => {
    setSelected(section)
    setShowMobileMenu(false) // Close mobile menu when section is selected
  }

  return (
    <div className="settings-page">
      <div className="settings-container">
        {/* Mobile Menu Toggle */}
        <div className="mobile-menu-toggle">
          <button onClick={() => setShowMobileMenu(!showMobileMenu)}>
            <MenuIcon />
            Settings Menu
          </button>
        </div>

        {/* Settings Sidebar */}
        <Card variant="settings" className={`settings-sidebar ${showMobileMenu ? 'mobile-open' : ''}`}>
          <ul>
            <li className={selected === "account" ? "active" : ""} onClick={() => handleSectionSelect("account")}>
              <AccountCircleIcon className="icon" />
              Account
            </li>
            <li className={selected === "notifications" ? "active" : ""} onClick={() => handleSectionSelect("notifications")}>
              <NotificationsIcon className="icon" />
              Notifications
            </li>
            <li className={selected === "privacy" ? "active" : ""} onClick={() => handleSectionSelect("privacy")}>
              <LockIcon className="icon" />
              Privacy
            </li>
            <li className={selected === "security" ? "active" : ""} onClick={() => handleSectionSelect("security")}>
              <SecurityIcon className="icon" />
              Security
            </li>
            <li className="signout">
              <LogoutIcon className="icon" />
              Sign out
            </li>
          </ul>
        </Card>

        {/* Settings Content */}
        <Card variant="settings" className="settings-content">
          {renderSection()}
        </Card>
      </div>
    </div>
  )
}

export default Settings
