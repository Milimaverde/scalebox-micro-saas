import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ScaleBox - Micro SaaS",
  description: "ScaleBox é um micro SaaS construído com Next.js, NextAuth e Firebase, focado em escalabilidade e agilidade no desenvolvimento de produtos modernos e eficientes.",
};

export default function Home() {
  return (
  <div>
    <h1>Template ScaleBox</h1>
    <Link href="login">
      <button>Ver Aplicação</button>
    </Link>
  </div>
  )
}
