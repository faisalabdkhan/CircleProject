import "./logo.scss"

const Logo = ({ size = "medium", className = "" }) => {
  return (
    <div className={`logo ${size} ${className}`}>
      <div className="circle"></div>
      <span>Circle</span>
    </div>
  )
}

export default Logo
