"use client";

import { useRouter } from "next/navigation";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useSession } from "next-auth/react";

const Register = () => {
  const router = useRouter();
  // const {data: session,status}=useSession();
  const {data: session}=useSession();

  const [infos, setInfos] = useState({ username: "", email: "", password: "" });
  const [errorMessages, setErrorMessages] = useState("");
  const [pending, setPending] = useState(false);

  useEffect(()=>{
    if(session){
      router.push("/dashboard");
    }
  },[session,router])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInfos((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!infos.username || !infos.email || !infos.password) {
      setErrorMessages("All fields are required");
      return;
    }

    try {
      setPending(true);
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(infos),
      });

      if (res.ok) {
        console.log("User registered");
        router.push("/dashboard/login");
      } else {
        setErrorMessages("Something went wrong");
      }
    } catch (error) {
      console.log(error);
      setErrorMessages("Error occurred in register page");
    } finally {
      setPending(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md bg-gray-100 p-8 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Register</h2>
        {errorMessages && <p className="text-red-500 text-sm mb-4">{errorMessages}</p>}
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Username</label>
            <input
              type="text"
              name="username"
              onChange={handleChange}
              placeholder="Username"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="Email"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Password</label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              placeholder="Password"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            disabled={pending}
            className={`w-full py-2 mt-4 text-white font-semibold rounded-lg bg-blue-500 hover:bg-blue-600 transition-colors ${
              pending ? "cursor-not-allowed opacity-50" : ""
            }`}
          >
            {pending ? "Submitting..." : "Register"}
          </button>

          <div className="text-blue-600 cursor-pointer underline" onClick={()=>router.push("/dashboard/login")}>Already have a account?</div>
        </form>
      </div>
    </div>
  );
};

export default Register;
