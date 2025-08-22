import "./posts.scss"
import Avatar from "../avatar/Avatar"
import Card from "../card/Card"
import Button from "../button/Button"
import Input from "../input/Input"

import { FaCamera, FaImage, FaSmile, FaRegComment } from "react-icons/fa"
import { FiSend } from "react-icons/fi"
import { BsThreeDots } from "react-icons/bs"

const Posts = () => {
  const posts = [
    {
      id: 1,
      name: "John Doe",
      time: "about 2 years ago",
      text: "Just launched my new website! Check it out and let me know what you think.",
      tags: ["#webdev", "#design"],
      comments: 5,
    },
    {
      id: 2,
      name: "Sarah Miller",
      time: "about 2 years ago",
      text: "Beautiful day for a hike! 🌄",
      tags: ["#nature", "#outdoors"],
      comments: 8,
    },
    {
      id: 3,
      name: "Alex Johnson",
      time: "about 2 years ago",
      text: "Just finished reading an amazing book on artificial intelligence. It's fascinating how quickly this field is evolving. Would highly recommend to anyone interested in tech! ",
      tags: ["#ai", "reading", "#tech"],
      comments: 4,
    },
  ]

  return (
    <div className="home-feed">
      <h2>Home</h2>

      {/* Share Box */}
      <Card variant="post" padding="large" className="share-box">
        <div className="share-header">
          <Avatar />
          <Input variant="share" placeholder="Share something with your circle..." />
        </div>

        <hr className="divider" />

        <div className="share-footer">
          <div className="icons">
            <div className="icon-item">
              <FaImage />
            </div>
            <div className="icon-item">
              <FaCamera />
            </div>
            <div className="icon-item">
              <FaSmile />
            </div>
          </div>
          <Button variant="secondary" size="small" round>
            <FiSend />
            Share
          </Button>
        </div>
      </Card>

      {/* Posts */}
      {posts.map((post) => (
        <Card key={post.id} variant="post" padding="large" className="post-card">
          <div className="post-header">
            <Avatar />
            <div className="user-info">
              <span className="name">{post.name}</span>
              <span className="time">{post.time} •</span>
            </div>
            <BsThreeDots className="menu" />
          </div>

          <div className="post-body">
            {post.text}{" "}
            {post.tags.map((tag, i) => (
              <span key={i} className="tag">
                {tag}
              </span>
            ))}
          </div>

          <div className="post-footer">
            <FaRegComment />
            <span>{post.comments}</span>
          </div>
        </Card>
      ))}
    </div>
  )
}

export default Posts
