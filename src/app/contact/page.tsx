"use client";
import { useRouter } from 'next/navigation';
export default function Contact() {
  const router = useRouter();
  return (
    <div>
      <h1>Contact Page</h1>
      <p>Welcome to Contact Page</p>
      <button onClick={()=>router.push("/")}>Home</button>
    </div>
  );
}