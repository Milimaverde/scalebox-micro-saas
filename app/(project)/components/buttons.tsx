export function Button({
  children,
  className = '',
  color = 'yellow, // Default color',
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`rounded-2xl px-8 py-4 text-midnight text-xl cursor-pointer ${className} bg-button${color} hover:bg-button${color}hover active:bg-button${color}active focus:bg-button${color}focus transition-colors duration-200 ease-in-out`}
      {...props}
    >
      {children}
    </button>
  )
}
