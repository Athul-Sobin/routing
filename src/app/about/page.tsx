"use client";
import { useRouter } from 'next/navigation';
export default function About() {
  const router = useRouter();
  return (
    <div>
      <h1>About Page</h1>
      <p>Welcome to About Page</p>
      <button onClick={()=>router.push("/")}>Home</button>
    </div>
  );
}
