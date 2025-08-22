import "./input.scss"

const Input = ({ type = "text", placeholder, variant = "default", className = "", icon: Icon, ...props }) => {
  if (variant === "search") {
    return (
      <div className="search-box">
        {Icon && <Icon />}
        <input
          type={type}
          placeholder={placeholder}
          className={`input-field input-${variant} ${className}`}
          {...props}
        />
      </div>
    )
  }

  return (
    <input type={type} placeholder={placeholder} className={`input-field input-${variant} ${className}`} {...props} />
  )
}

export const InputGroup = ({ children, className = "" }) => {
  return <div className={`input-group ${className}`}>{children}</div>
}

export default Input
