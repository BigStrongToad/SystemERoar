// src/app/page.tsx

import UserProfile from "@/components/UserProfile"

export const metadata = { title: "Home" };

export default function Home() {

  return (
    <div>
      <h1>Home Page</h1>
      <UserProfile></UserProfile>
    </div>

  )
}