export function  Button({

  children,
  color = 'yellow',
  className = ''
}: {
  children: React.ReactNode
  color?: 'yellow' | 'purple'
  className?: string
}) {

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
