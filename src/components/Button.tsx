interface ButtonProps {
  size?: "small" | "medium" | "large";
  variant?: "primary" | "secondary";
  onClick?: () => void;
  children: React.ReactNode;
  className?: string
}

export function Button({
  size = "medium",
  variant = "primary",
  onClick,
  className,
  children
}: ButtonProps) {
  const buttonClass = `btn btn--${size} btn--${variant} ${className || ''}`
  return <button className={buttonClass} onClick={onClick}>{children}</button>
}
