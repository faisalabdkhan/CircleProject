// sections/PrivacySettings.jsx
import React, { useState } from "react";
import {
  Box,
  Typography,
  Switch,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Divider,
  Button,
} from "@mui/material";

const PrivacySettings = () => {
  const [visibility, setVisibility] = useState("friends");
  const [settings, setSettings] = useState({
    friendRequests: true,
    onlineStatus: true,
    tagging: true,
  });

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Privacy Settings
      </Typography>
      <Typography variant="body2" gutterBottom color="text.secondary">
        Control who can see your profile and content.
      </Typography>

      <Box mt={3}>
        <Typography variant="subtitle1" fontWeight={600}>Profile Visibility</Typography>
        <FormControl fullWidth sx={{ mt: 1 }}>
          <InputLabel>Visibility</InputLabel>
          <Select value={visibility} onChange={(e) => setVisibility(e.target.value)} label="Visibility">
            <MenuItem value="everyone">Everyone</MenuItem>
            <MenuItem value="friends">Friends Only</MenuItem>
            <MenuItem value="onlyme">Only Me</MenuItem>
          </Select>
        </FormControl>

        {[
          { key: "friendRequests", label: "Allow Friend Requests", desc: "Allow others to send you friend requests" },
          { key: "onlineStatus", label: "Show Online Status", desc: "Show when you're active on Circle" },
          { key: "tagging", label: "Allow Tagging", desc: "Allow others to tag you in posts and comments" },
        ].map(({ key, label, desc }) => (
          <Box key={key} display="flex" justifyContent="space-between" alignItems="center" py={1}>
            <Box>
              <Typography fontWeight={500}>{label}</Typography>
              <Typography variant="body2" color="text.secondary">{desc}</Typography>
            </Box>
            <Switch
              checked={settings[key]}
              onChange={() => setSettings((prev) => ({ ...prev, [key]: !prev[key] }))}
              color="error"
            />
          </Box>
        ))}
      </Box>

      <Divider sx={{ my: 3 }} />

      <Typography variant="subtitle1" fontWeight={600}>Data & Privacy</Typography>
      <Box display="flex" flexDirection="column" gap={1} mt={1}>
        <Button variant="outlined">Download your data</Button>
        <Button variant="outlined">Manage cookies</Button>
        <Button variant="outlined" color="error">Delete account</Button>
      </Box>

      <Button variant="contained" sx={{ mt: 3, bgcolor: "error.main" }}>
        Save Changes
      </Button>
    </Box>
  );
};

export default PrivacySettings;
