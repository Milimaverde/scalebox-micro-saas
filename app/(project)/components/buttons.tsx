import { ReactNode } from "react"

type ColorVariants = 'yellow' | 'purple'
type HoverColorVariants = 'hoveryellow' | 'hoverpurple'

interface ButtonProps {
  children: ReactNode
  color?: ColorVariants
  hoverColor?: HoverColorVariants
  className?: string
}

export function Button({
  children,
  color = 'yellow',
  hoverColor = 'hoveryellow',
  className = ''
}: ButtonProps) {
  const colorVariants = {
    yellow: "bg-buttonyellow",
    purple: "bg-buttonpurple"
  }
  const hoverColorVariants = {
    hoveryellow: "bg-buttonyellow-hover",
    hoverpurple: "bg-buttonpurple-hover"
  }

  return (
    <button
      className={`rounded-2xl px-8  text-midnight text-lg cursor-pointer ${colorVariants[color]} hover:${hoverColorVariants[hoverColor]}  ${className}`}
    >
      {children}
    </button>
  )
}