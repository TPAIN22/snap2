"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

export default function Signup() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    cpassword: "",
  });
  
  const onsugnup = async () => {
    
    try {
      const response = await axios.post("/api/users/signup", user)
      console.log(response.data)
      toast('signed up successfully')
    }catch (error:any) {
      throw error     
    }
  };

  return (
    <div className="Containor flex w-9/12 justify- items-center ">
      <div className="Signup flex flex-col gap-8 flex-1 items-center">
      <div><Toaster toastOptions={{
    className: '',
    style: {
      backgroundColor: '#91EBA4FF',},
      }}/>
  
      </div>
        <div className="grid gap-2 w-3/5">
          <label
            className="text-sm font-semibold text-gray-500"
            htmlFor="username"
          >
            USER NAME
          </label>
          <input
            className="w-full py-2 px-4 border border-gray-500 rounded-lg"
            type="text"
            name="username"
            id="usename"
            placeholder="Enter user name"
            value={user.username}
            onChange={(e)=>setUser({...user , username:e.target.value})}
          />
        </div>

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
            value={user.password}
            onChange={(e)=>setUser({...user , password:e.target.value})}
          />
        </div>

        <div className="grid gap-2 w-3/5">
          <label
            className="text-sm font-semibold text-gray-500"
            htmlFor="Cpassord"
          >
            CONFIRM PASSWORD
          </label>
          <input
            className="w-full py-2 px-4 border border-gray-500 rounded-lg"
            type="text"
            name="Cpassword"
            id="Cpassord"
            placeholder="confirm your Password"
            value={user.cpassword}
            onChange={(e)=>setUser({...user , cpassword:e.target.value})}
          />
        </div>

        <div className="flex justify-between  gap-4 items-center w-3/5">
          <button onClick={onsugnup}
          className="bg-yellow-500 hover:bg-yellow-300 px-6 py-2 rounded-lg text-white font-semibold">
            Signup
          </button>
          
          <Link
            href="/Login"
            className="rounded-lg font-semibold text-yellow-500 pl-5"
          >
            Go to login page{" "}
          </Link>
        </div>
      </div>
      <Image src="/signup.jpg" alt="#" width={500} height={0} />
    </div>
  );
}
