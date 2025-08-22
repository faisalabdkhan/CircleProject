import "./register.scss"
import Logo from "../../componentes/logo/Logo"
import Input, { InputGroup } from "../../componentes/input/Input"
import Button from "../../componentes/button/Button"

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
            By creating an account, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
            .
          </div>
          <Button type="submit" size="large" fullWidth>
            Create account
          </Button>
        </form>
        <div className="login-link">
          Already have an account? <a href="#">Sign in</a>
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
