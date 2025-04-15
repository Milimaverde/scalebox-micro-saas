import { handleAuth } from "@/app/actions/handle-auth";

export default function Login() {
  
  return (
    <form action={handleAuth}>
      <button type="submit">Signin with Google</button>
    </form>
  )
} 
