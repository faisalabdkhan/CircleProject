// sections/NotificationSettings.jsx
import React, { useState } from "react";
import { Box, Typography, Switch, Divider, Button } from "@mui/material";

const NotificationSettings = () => {
  const [notifications, setNotifications] = useState({
    posts: true,
    comments: true,
    requests: true,
    mentions: true,
    email: false,
  });

  const toggle = (key) => {
    setNotifications((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Notification Settings
      </Typography>
      <Typography variant="body2" gutterBottom color="text.secondary">
        Manage how and when you receive notifications.
      </Typography>

      <Box mt={3}>
        <Typography variant="subtitle1" fontWeight={600}>In-App Notifications</Typography>

        {[
          { key: "posts", label: "New posts in your circles", desc: "Get notified when someone posts in your circles" },
          { key: "comments", label: "Comments on your posts", desc: "Get notified when someone comments on your posts" },
          { key: "requests", label: "Friend requests", desc: "Get notified when someone sends you a friend request" },
          { key: "mentions", label: "Mentions", desc: "Get notified when someone mentions you in a post or comment" },
        ].map(({ key, label, desc }) => (
          <Box key={key} display="flex" justifyContent="space-between" alignItems="center" py={1}>
            <Box>
              <Typography fontWeight={500}>{label}</Typography>
              <Typography variant="body2" color="text.secondary">{desc}</Typography>
            </Box>
            <Switch checked={notifications[key]} onChange={() => toggle(key)} color="error" />
          </Box>
        ))}
      </Box>

      <Divider sx={{ my: 3 }} />

      <Box>
        <Typography variant="subtitle1" fontWeight={600}>Email Notifications</Typography>
        <Box display="flex" justifyContent="space-between" alignItems="center" py={1}>
          <Typography>Email notifications</Typography>
          <Switch checked={notifications.email} onChange={() => toggle("email")} />
        </Box>
      </Box>

      <Button variant="contained" sx={{ mt: 3, bgcolor: "error.main" }}>
        Save Changes
      </Button>
    </Box>
  );
};

export default NotificationSettings;
