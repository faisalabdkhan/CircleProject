import "./myCircles.scss"
import Card from "../../componentes/card/Card"
import Button from "../../componentes/button/Button"

import AddIcon from "@mui/icons-material/Add"
import GroupIcon from "@mui/icons-material/Group"

const MyCircles = () => {
  const circles = [
    {
      title: "Family Time",
      desc: "A private space for our family to share moments and stay connected.",
      members: 6,
      active: "today",
    },
    {
      title: "College Buddies",
      desc: "For our study group and campus adventures. Share notes, events, and memories.",
      members: 8,
      active: "yesterday",
    },
    {
      title: "Close Friends",
      desc: "Our inner circle. Share life updates, plan meetups, and stay connected.",
      members: 5,
      active: "2 days ago",
    },
    {
      title: "Book Club",
      desc: "Discuss our monthly reads and share literary recommendations.",
      members: 12,
      active: "3 days ago",
      isNew: true,
    },
  ]

  return (
    <div className="myCircles-page">
      <div className="layout">
        <div className="right-content">
          <div className="myCircles">
            <div className="header">
              <h2>My Circles</h2>
              <Button variant="primary" round>
                <AddIcon fontSize="small" /> Create Circle
              </Button>
            </div>

            <div className="circlesGrid">
              {circles.map((circle, idx) => (
                <Card key={idx} variant="circle" padding="none" className="circleCard">
                  <div className="imgWrapper">
                    <div className="imgPlaceholder" />
                    {circle.isNew && <span className="newTag">New</span>}
                  </div>

                  <div className="content">
                    <h3>{circle.title}</h3>
                    <p>{circle.desc}</p>
                    <div className="info">
                      <GroupIcon className="groupIcon" />
                      <span>{circle.members} members</span>
                    </div>
                  </div>

                  <div className="footer">
                    <span className="activeText">Active {circle.active}</span>
                    <a href="#">View Circle</a>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyCircles
