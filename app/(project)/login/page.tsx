import { handleAuth } from "@/app/actions/handle-auth";
import { auth } from "@/app/lib/auth";
import { redirect } from "next/navigation";

export default async function Login() {
  const session = await auth();

  if (session) {
    redirect("/dashboard");
  }
  
  return (
    <form action={handleAuth}>
      <button type="submit">Signin with Google</button>
    </form>
  )
} 
