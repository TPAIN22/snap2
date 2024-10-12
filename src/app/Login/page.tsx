'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Lognin() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    passowrd: "",
  });
  
 
  return (
    <div className="Containor flex w-9/12 justify- items-center ">

      <div className="Signup flex flex-col gap-8 flex-1 items-center">
        
        <div className="grid gap-2 w-3/5">
          <label
            className="text-sm font-semibold text-gray-500"
            htmlFor="email"
          >
            EMAIL
          </label>
          <input
            className="w-full py-2 px-4 border border-gray-500 rounded-lg"
            type="text"
            name="email"
            id="email"
            placeholder="Enter Email"
            value={user.email}
            onChange={(e)=>setUser({...user , email:e.target.value})}
          />
        </div>

        <div className="grid gap-2 w-3/5">
          <label
            className="text-sm font-semibold text-gray-500"
            htmlFor="passord"
          >
            PASSWORD
          </label>
          <input
            className="w-full py-2 px-4 border border-gray-500 rounded-lg"
            type="text"
            name="password"
            id="passord"
            placeholder="Enter Password"
            value={user.passowrd}
            onChange={(e)=>setUser({...user , passowrd:e.target.value})}
          />
        </div>

        <div className="flex flex-col gap-4 items-start w-3/5">
          <button 
          
          className="bg-yellow-500 hover:bg-yellow-300 px-6 py-2 rounded-lg text-white font-semibold">
            Login
          </button>
          
          <Link
            href="/Signup"
            className="rounded-lg font-semibold text-yellow-500 pl-5"
          >
            <span className="text-black font-light">New here  ... </span>
             Go to Signup
          </Link>
        </div>
      </div>
      <Image src="/login.svg" alt="#" width={500} height={0} />
    </div>
  );
}
