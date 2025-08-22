import "./avatar.scss"

const Avatar = ({ size = "medium", src, alt = "Avatar", className = "" }) => {
  return (
    <div className={`avatar avatar-${size} ${className}`}>
      {src && <img src={src || "/placeholder.svg"} alt={alt} />}
    </div>
  )
}

export default Avatar
