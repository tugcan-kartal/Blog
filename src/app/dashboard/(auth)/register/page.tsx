"use client"

import React, { ChangeEvent, useState } from "react";

const Register=()=>{

    const [infos,setInfos]=useState({username: "",email: "",password:""});
    const [errorMessages,setErrorMessages]=useState("");
    const [pending,setPending]=useState(false);

    const handleChange=(e: ChangeEvent<HTMLInputElement>)=>{
        const {name,value}=e.target;
        const newInfos={...infos,[name]:value};
        setInfos(newInfos);
        console.log(newInfos);
    }

    const handleSubmit=async(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();

        if(!infos.username || !infos.email || !infos.password){
            setErrorMessages("All fields are required");
            return;
        }

        try {
            setPending(true);
            const res=await fetch("/api/auth/register",{
                method:"POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(infos),
            })

            if(res.ok){
                console.log("User registered");
            }else{
                setErrorMessages("Something went wrong");
            }
        } catch (error) {
            setErrorMessages("Error occured");
        }finally{
            setPending(false);
        }


    }

    return(
        <div>
            <div>

                <form onSubmit={handleSubmit}>
                    <label>Username</label>
                    <input name="username"  onChange={handleChange} placeholder="username"/>

                    <label>Email</label>
                    <input name="email"  onChange={handleChange} placeholder="Email"/>

                    <label>Password</label>
                    <input name="password"  onChange={handleChange} placeholder="Password"/>
                    {errorMessages}
                    <button type="submit">Send</button>
                </form>

            </div>
        </div>
    )
}

export default Register;