"use client"

import { useState } from "react"
import "./settings.scss"
import Card from "../../componentes/card/Card"

import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import NotificationsIcon from "@mui/icons-material/Notifications"
import LockIcon from "@mui/icons-material/Lock"
import SecurityIcon from "@mui/icons-material/Security"
import LogoutIcon from "@mui/icons-material/Logout"

import AccountSettings from "./sections/AccountSettings"
import NotificationSettings from "./sections/NotificationSettings"
import PrivacySettings from "./sections/PrivacySettings"
import SecuritySettings from "./sections/SecuritySettings"

const Settings = () => {
  const [selected, setSelected] = useState("account")

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

  return (
    <div className="settings-page">
      <div className="settings-container">
        <Card variant="settings" className="settings-sidebar">
          <ul>
            <li className={selected === "account" ? "active" : ""} onClick={() => setSelected("account")}>
              <AccountCircleIcon className="icon" />
              Account
            </li>
            <li className={selected === "notifications" ? "active" : ""} onClick={() => setSelected("notifications")}>
              <NotificationsIcon className="icon" />
              Notifications
            </li>
            <li className={selected === "privacy" ? "active" : ""} onClick={() => setSelected("privacy")}>
              <LockIcon className="icon" />
              Privacy
            </li>
            <li className={selected === "security" ? "active" : ""} onClick={() => setSelected("security")}>
              <SecurityIcon className="icon" />
              Security
            </li>
            <li className="signout">
              <LogoutIcon className="icon" />
              Sign out
            </li>
          </ul>
        </Card>
        <Card variant="settings" className="settings-content">
          {renderSection()}
        </Card>
      </div>
    </div>
  )
}

export default Settings
