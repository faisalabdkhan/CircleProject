import { Typography, Divider, Box, Chip } from "@mui/material"
import Button from "../../../componentes/button/Button"
import "./security-settings.scss"

const SecuritySettings = () => {
  return (
    <div className="security-settings">
      <Typography variant="h5">Security Settings</Typography>
      <Typography variant="body2" className="subtext">
        Manage your account security and login preferences.
      </Typography>

      <div className="password-section">
        <Typography variant="subtitle1" className="label">
          Password
        </Typography>
        <Button variant="primary">Change Password</Button>
      </div>

      <Divider className="divider" />

      <Typography variant="subtitle1" className="label">
        Login Activity
      </Typography>
      <Box className="session-box">
        <div>
          <strong>Current session</strong>
          <p>MacBook Pro - San Francisco, CA</p>
        </div>
        <Chip label="Active" color="success" size="small" />
      </Box>

      <Box className="session-box">
        <div>
          <strong>iPhone 13</strong>
          <p>San Francisco, CA – Last active 2 hours ago</p>
        </div>
        <span className="signout-text">Sign out</span>
      </Box>

      <Button variant="outline">Sign out of all sessions</Button>

      <Divider className="divider" />

      <Typography variant="subtitle1" className="label">
        Two-Factor Authentication
      </Typography>
      <Typography variant="body2" className="note">
        Add an extra layer of security to your account by requiring both your password and a verification code.
      </Typography>
      <Button variant="primary">Enable two-factor authentication</Button>
    </div>
  )
}

export default SecuritySettings
