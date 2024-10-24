"use client";

import Image from "next/image";
import React,{useState} from "react";
import ContactImage from "@/../public/ContactPage-Contact.svg";

const Contact:React.FC=()=>{

    const [formData,setFormData]=useState({
        username: "",
        email: "",
        message: "",

    })
    
    const handleSubmit=async(e: React.FormEvent)=>{
        e.preventDefault();

        try {
            const response=await fetch("/api/contact",{
                method: "POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(formData),
            })

            if(response.status===200){
                alert("Email sent successfully");
            }else{
                alert("Email couldnt sent successfully");
            }
        } catch (error) {
            console.log(error);
            alert("Email sent got error");
        }
    }

    const handleChange=(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        })
    }


    return(
        <div>
            <div>
                
                <div>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="username">Username</label>
                            <input id="username" value={formData.username} onChange={(e)=>handleChange(e)} placeholder="Enter your username" type="text"/>
                        </div>

                        <div>
                            <label htmlFor="email">E-mail</label>
                            <input id="email" value={formData.email} onChange={(e)=>handleChange(e)} placeholder="Enter your e-mail" type="email"/>
                        </div>

                        <div>
                            <label htmlFor="message">Message</label>
                            <input id="message" value={formData.message} onChange={(e)=>handleChange(e)} placeholder="Enter your message" type="text"/>
                        </div>

                        <div>
                            <button type="submit">Send</button>
                        </div>
                    </form>
                </div>

                <div>
                    <Image src={ContactImage} alt="not found"/>
                </div>

            </div>
        </div>
    )
}

export default Contact;