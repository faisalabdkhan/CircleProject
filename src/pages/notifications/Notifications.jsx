"use client"

import "./notifications.scss"
import { useState } from "react"
import Avatar from "../../componentes/avatar/Avatar"
import Card from "../../componentes/card/Card"
import Button from "../../componentes/button/Button"

import GroupIcon from "@mui/icons-material/Group"
import MoreHorizIcon from "@mui/icons-material/MoreHoriz"

const initialNotifications = [
  {
    id: 1,
    user: "Emily Davis",
    type: "invite",
    message: 'invited you to join the circle "Book Club"',
    time: "about 2 years ago",
    unread: true,
    actions: ["Accept", "Decline"],
    responded: false,
  },
  {
    id: 2,
    user: "Alex Johnson",
    type: "comment",
    message: 'commented on your post "Study group was productive today!"',
    time: "about 2 years ago",
    unread: true,
  },
  {
    id: 3,
    user: "Sarah Miller",
    type: "comment",
    message: 'mentioned you in a comment "Family Time"',
    time: "about 2 years ago",
  },
  {
    id: 4,
    user: "Circle",
    type: "memory",
    message: 'You have a memory from 1 year ago "Our first apartment together!"',
    time: "about 2 years ago",
  },
  {
    id: 5,
    user: "John Smith",
    type: "update",
    message: 'shared a new post in "Family Time"',
    time: "about 2 years ago",
  },
  {
    id: 6,
    user: "Michael Brown",
    type: "invite",
    message: "sent you a friend request",
    time: "about 2 years ago",
    unread: false,
    actions: ["Accept", "Decline"],
    responded: false,
  },
  {
    id: 7,
    user: "Lisa Wilson",
    type: "invite",
    message: "accepted your friend request",
    time: "about 2 years ago",
  },
]

const Notifications = () => {
  const [filter, setFilter] = useState("All")
  const [notifications, setNotifications] = useState(initialNotifications)

  const handleAction = (id, action) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, responded: true, response: action, unread: false } : n)),
    )
  }

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, unread: false })))
  }

  const unreadCount = notifications.filter((n) => n.unread).length

  const filteredNotifications = notifications.filter((notif) => {
    if (filter === "All") return true
    if (filter === "Unread") return notif.unread
    if (filter === "Invites") return notif.type === "invite"
    if (filter === "Comments") return notif.type === "comment"
    return true
  })

  return (
    <div className="notifications">
      <div className="top">
        <h2>Notifications</h2>
        <Button variant="outline" size="small" onClick={markAllAsRead}>
          <span>✓</span> Mark all as read
        </Button>
      </div>

      <div className="tabs">
        {["All", "Unread", "Invites", "Comments"].map((tab) => (
          <button key={tab} className={filter === tab ? "active" : ""} onClick={() => setFilter(tab)}>
            {tab}
            {tab === "Unread" && unreadCount > 0 && <span className="badge">{unreadCount}</span>}
          </button>
        ))}
      </div>

      <div className="notifList">
        {filteredNotifications.map((n) => (
          <Card key={n.id} variant="notification" unread={n.unread} className="notifCard">
            <Avatar />
            <div className="details">
              <p>
                <strong>{n.user}</strong> {n.message}
              </p>
              <div className="meta">
                <GroupIcon className="metaIcon" />
                <span>{n.time}</span>
              </div>
            </div>
            <div className="actions">
              {n.actions && !n.responded && (
                <>
                  <Button variant="primary" size="small" onClick={() => handleAction(n.id, "Accept")}>
                    Accept
                  </Button>
                  <Button variant="outline" size="small" onClick={() => handleAction(n.id, "Decline")}>
                    Decline
                  </Button>
                </>
              )}
              <MoreHorizIcon className="moreIcon" />
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Notifications
