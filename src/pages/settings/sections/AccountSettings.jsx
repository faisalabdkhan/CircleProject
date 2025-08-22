import { TextField, Typography, Box, InputAdornment } from "@mui/material"
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail"
import Avatar from "../../../componentes/avatar/Avatar"
import Button from "../../../componentes/button/Button"
import "./account-settings.scss"

const AccountSettings = () => {
  return (
    <div className="account-settings">
      <Typography variant="h5">Account Settings</Typography>
      <Typography variant="body2" className="subtext">
        Update your account information and public profile.
      </Typography>

      <Box className="avatar-box">
        <Avatar size="large" />
        <Button variant="outline">Change Avatar</Button>
      </Box>

      <Box component="form" className="form-section">
        <TextField fullWidth label="Full Name" value="John Doe" />
        <TextField
          fullWidth
          label="Username"
          value="johndoe"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AlternateEmailIcon fontSize="small" />
              </InputAdornment>
            ),
          }}
        />
        <TextField fullWidth label="Email" value="john.doe@example.com" />
        <TextField
          fullWidth
          label="Bio"
          multiline
          rows={3}
          defaultValue="Software developer and tech enthusiast. Love building web applications and exploring new technologies."
        />
        <Button variant="primary">Save Changes</Button>
      </Box>
    </div>
  )
}

export default AccountSettings
