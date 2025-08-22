import "./card.scss"

const Card = ({ children, variant = "default", padding = "medium", className = "", unread = false, ...props }) => {
  const unreadClass = unread ? "unread" : ""

  return (
    <div className={`card card-${variant} padding-${padding} ${unreadClass} ${className}`} {...props}>
      {children}
    </div>
  )
}

export default Card
