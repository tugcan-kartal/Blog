"use client"
import React from "react";
import { signIn } from "next-auth/react";
import { useEffect,useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const Login=()=>{

    const router=useRouter();
    const {data: session,status}=useSession();
    const [isLoading,setIsLoading]=useState<boolean>(true)

    useEffect(()=>{
        if(status==="loading") return;

        if(session){
            router.push("/dashboard");
        }else{
            setIsLoading(false);
        }
    },[session,status,router]);

    if(isLoading){
        return <p>Loading...</p>
    }

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="p-8 rounded-lg shadow-lg max-w-md w-full">

                <h1 className="text-2xl font-bold text-center mb-6 text-gray-900">
                    Sign in to Your Account
                </h1>

                <form
                    onSubmit={ (e) => {
                        e.preventDefault();
                        signIn("google"); // Google ile giriş yap
                    }}
                    className="space-y-6">

                        <button type="submit" className="w-full bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors">
                            Sign in with Google
                        </button>
                </form>
            
            </div>
        </div>
    )
}

export default Login;