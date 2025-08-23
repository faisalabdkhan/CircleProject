"use client"

import { useState } from "react"
import Avatar from "../../componentes/avatar/Avatar"
import Card from "../../componentes/card/Card"
import Input from "../../componentes/input/Input"
import Button from "../../componentes/button/Button"

import MoreHorizIcon from "@mui/icons-material/MoreHoriz"
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline"
import LockIcon from "@mui/icons-material/Lock"
import FilterListIcon from "@mui/icons-material/FilterList"
import SearchIcon from "@mui/icons-material/Search"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import "./memories.scss"

const allPostsData = [
  {
    id: 4,
    timeAgo: "0 years ago today",
    user: "John Doe",
    posted: "about 2 years ago",
    audience: "Close Friends",
    text: "Weekend getaway with the crew! Can't wait to disconnect and enjoy nature for a few days.",
    images: 1,
    comments: 8,
  },
  {
    id: 5,
    timeAgo: "0 years ago today",
    user: "John Doe",
    posted: "about 2 years ago",
    audience: "Book Club",
    text: "Just finished reading an amazing book on personal growth. Highly recommend!",
    images: 0,
    comments: 3,
  },
]

const memoriesData = [
  {
    id: 1,
    timeAgo: "1 year ago today",
    user: "John Doe",
    posted: "about 3 years ago",
    audience: "Close Friends",
    text: "Our first apartment together! So many great memories in this place.",
    images: 1,
    comments: 12,
  },
  {
    id: 2,
    timeAgo: "2 years ago today",
    user: "John Doe",
    posted: "almost 4 years ago",
    audience: "Close Friends",
    text: "First day at the new job! Excited for this new chapter.",
    images: 0,
    comments: 10,
  },
  {
    id: 3,
    timeAgo: "2 years ago today",
    user: "Sarah Miller",
    posted: "about 4 years ago",
    audience: "Family Time",
    text: "Baby's first steps! Can't believe how fast time flies. 👣",
    images: 2,
    comments: 8,
  },
]

const Memories = () => {
  const [activeTab, setActiveTab] = useState("memories")
  const [filterOpen, setFilterOpen] = useState(false)

  const dataToRender = activeTab === "memories" ? memoriesData : allPostsData

  return (
    <div className="memories-page">
      <div className="memories-container">
        <div className="memories-top">
          <h2>Memories</h2>

          <div className="search-filter">
            <Input variant="search" icon={SearchIcon} placeholder="Search memories..." />
            <div className="filter-dropdown">
              <Button variant="outline" onClick={() => setFilterOpen(!filterOpen)} className="filter-button">
                <FilterListIcon />
                <span>Filter</span>
                <ExpandMoreIcon fontSize="small" />
              </Button>

              {filterOpen && (
                <div className="filter-menu">
                  <div className="filter-group">
                    <p>Filter by Circle</p>
                    <ul>
                      <li>All Circles</li>
                      <li>Family Time</li>
                      <li>Close Friends</li>
                      <li>College Buddies</li>
                      <li>Book Club</li>
                    </ul>
                  </div>
                  <div className="filter-group">
                    <p>Sort by Date</p>
                    <ul>
                      <li>Newest first</li>
                      <li>Oldest first</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="memories-tabs">
            <button
              className={`tab ${activeTab === "memories" ? "active" : ""}`}
              onClick={() => setActiveTab("memories")}
            >
              Memories
            </button>
            <button
              className={`tab ${activeTab === "allPosts" ? "active" : ""}`}
              onClick={() => setActiveTab("allPosts")}
            >
              All Posts
            </button>
          </div>
        </div>

        {dataToRender.map((item) => (
          <Card key={item.id} variant="memory" className="memory-card">
            <div className="memory-header">
              <div className="memory-date">📅 {item.timeAgo}</div>
            </div>
            <div className="memory-content">
              <div className="memory-user-info">
                <Avatar />
                <div className="user-details">
                  <span className="user-name">{item.user}</span>
                  <span className="user-meta">
                    {item.posted} · <LockIcon fontSize="inherit" className="lock-icon" /> {item.audience}
                  </span>
                </div>
                <MoreHorizIcon className="more-icon" />
              </div>
              <p className="memory-text">{item.text}</p>
              {item.images > 0 && (
                <div className={`memory-images images-${item.images}`}>
                  {[...Array(item.images)].map((_, idx) => (
                    <div className="image-placeholder" key={idx}></div>
                  ))}
                </div>
              )}
              <div className="memory-footer">
                <ChatBubbleOutlineIcon fontSize="small" />
                <span>{item.comments}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Memories
