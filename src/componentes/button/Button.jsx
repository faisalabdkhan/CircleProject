import "./button.scss"

const Button = ({
  children,
  variant = "primary",
  size = "medium",
  round = false,
  fullWidth = false,
  className = "",
  ...props
}) => {
  const roundClass = round ? "btn-round" : ""
  const fullWidthClass = fullWidth ? "btn-full-width" : ""

  return (
    <button className={`btn btn-${variant} btn-${size} ${roundClass} ${fullWidthClass} ${className}`} {...props}>
      {children}
    </button>
  )
}

export default Button
