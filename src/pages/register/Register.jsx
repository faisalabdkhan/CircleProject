import "./register.scss"
import Logo from "../../componentes/logo/Logo"
import Input, { InputGroup } from "../../componentes/input/Input"
import Button from "../../componentes/button/Button"
import { Link } from "react-router-dom"

const Register = () => {
  return (
    <div className="signup-container">
      <header className="signup-header">
        <Logo />
      </header>

      <main className="signup-box">
        <h2>Create an account</h2>
        <p>Join Circle, your private space for people who matter</p>
        <form>
          <InputGroup>
            <Input type="text" placeholder="First name" />
            <Input type="text" placeholder="Last name" />
          </InputGroup>
          <Input type="email" placeholder="Email" />
          <Input type="text" placeholder="Username" />
          <Input type="password" placeholder="Password" />
          <div className="terms">
            By creating an account, you agree to our <button type="button" className="link-button">Terms of Service</button> and <button type="button" className="link-button">Privacy Policy</button>
            .
          </div>
          <Button type="submit" size="large" fullWidth>
            Create account
          </Button>
        </form>
        <div className="login-link">
          Already have an account? <Link to="/login">Sign in</Link>
        </div>
      </main>

      <footer className="signup-footer">
        <p>© 2025 Circle. All rights reserved.</p>
        <p>Where real life lives.</p>
      </footer>
    </div>
  )
}

export default Register
