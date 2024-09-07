import { createUser } from "../src/api"
import { useState } from "react"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function CreateUser(){



    const [user, setUser] = useState({
        name:"",
        email: "",
        password: ""
    });

    const [isLoading, setIsLoading] = useState(false)

   function handleChange(e){
        setUser({...user, [e.target.name]: e.target.value})// use spread notation ... to keep what we already have




    }

    async function handleSubmit(e){
        e.preventDefault()
        setIsLoading(true)
        try {
       let response = await createUser(user)
       
       if (response.data && response.data.message){
        if (response.data.message === "the email is taken"){
            alert("The email is already in use. Please use a different email")
           
        } else {
        alert(`Error:${response.data.message}`)}


       }else if(response.status === 200){ 
       alert("user created successfully, Please log back in ")
       
       }else {  alert("user not created :(, please try again :)")
       } 

       } catch (error) {
        alert(`Error: ${error.message}`);
    } finally {
        setIsLoading(false);
    }
}


    return(
        <form onSubmit={handleSubmit} className ="flex flex-col mb-2">
            
            <Input  placeholder={"Name"} onChange ={handleChange} name ="name" required maxLength={20} className ="mb-2"/> 
            <Input placeholder={"Email"} onChange={handleChange}name ="email" required maxLength={40} className ="mb-2"/>
            <Input placeholder={"Password"} onChange={handleChange} name = "password" type="password"required maxLength={40} disabled ={isLoading} className ="mb-2"/>
            <Button type="submit" disabled ={isLoading}>{isLoading? "creating..." :"Create Account"}</Button>

        
        
        </form>
    )
}