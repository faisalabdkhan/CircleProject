import "./navbar.scss"
import Logo from "../logo/Logo"
import { useState } from "react"
import MenuIcon from "@mui/icons-material/Menu"

const Navbar = ({ onMenuToggle }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleMenuToggle = () => {
    const newState = !isMobileMenuOpen
    console.log("Menu toggle clicked, new state:", newState) // Debug log
    setIsMobileMenuOpen(newState)
    if (onMenuToggle) {
      onMenuToggle(newState)
    }
  }

  return (
    <div className="navbar">
      <header className="login-header">
        <button className="mobile-menu-toggle" onClick={handleMenuToggle}>
          <MenuIcon />
        </button>
        <Logo className="navbar-logo" />
      </header>
    </div>
  )
}

export default Navbar
