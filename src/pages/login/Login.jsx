import "./login.scss"
import Logo from "../../componentes/logo/Logo"
import Input from "../../componentes/input/Input"
import Button from "../../componentes/button/Button"
import { Link } from "react-router-dom"

const Login = () => {
  return (
    <div className="login-container">
      <header className="login-header">
        <Logo />
      </header>

      <main className="login-box">
        <h2>Welcome back</h2>
        <p>Enter your email and password to sign in to your account</p>
        <form>
          <Input type="email" placeholder="Email" required />
          <Input type="password" placeholder="Password" required />
          <div className="forgot-password">
            <button type="button" className="link-button">Forgot password?</button>
          </div>
          <Button type="submit" size="large" fullWidth>
            Sign in
          </Button>
        </form>
        <div className="signup-text">
          Don't have an account? <Link to="/register">Sign up</Link>
        </div>
      </main>

      <footer className="login-footer">
        <p>© 2025 Circle. All rights reserved.</p>
        <p>Where real life lives.</p>
      </footer>
    </div>
  )
}

export default Login
