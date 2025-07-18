import { ReactNode } from "react"

type ColorVariants = 'yellow' | 'purple'

interface ButtonProps {
  children: ReactNode
  color?: ColorVariants
  className?: string
}


export function  Button({
  children,
  color = 'yellow',
  className = ''
}: ButtonProps) {
  const colorVariants = {
    yellow: "bg-buttonyellow",
    purple: "bg-buttonpurple",
  }

  return (
    <button
      className={`rounded-2xl px-8  text-midnight text-lg cursor-pointer ${colorVariants[color]} ${className}`}
    >
      {children}
    </button>
  )
}
