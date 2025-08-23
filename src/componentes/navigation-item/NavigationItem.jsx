"use client"
import { NavLink } from "react-router-dom"
import "./navigation-item.scss"

const NavigationItem = ({
  to,
  icon: Icon,
  children,
  isBottomNav = false,
  isCreate = false,
  onClick,
  className = "",
}) => {
  const bottomNavClass = isBottomNav ? "bottom-nav" : ""
  const createClass = isCreate ? "create" : ""

  const handleClick = (e) => {
    if (onClick) {
      onClick(e)
    }
  }

  if (onClick) {
    return (
      <div className={`nav-item ${bottomNavClass} ${createClass} ${className}`} onClick={handleClick}>
        {Icon && <Icon fontSize="small" />}
        <span>{children}</span>
      </div>
    )
  }

  return (
    <NavLink
      to={to}
      className={({ isActive }) => `nav-item ${isActive ? "active" : ""} ${bottomNavClass} ${createClass} ${className}`}
    >
      {Icon && <Icon fontSize="small" />}
      <span>{children}</span>
    </NavLink>
  )
}

export default NavigationItem
