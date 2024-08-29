import { createUser } from "../src/api"
import { useState } from "react"

export function CreateUser(){



    const [user, setUser] = useState({
        name:"",
        email: "",
        password: ""
    })

   function handleChange(e){
        setUser({...user, [e.target.name]: e.target.value})// use spread notation ... to keep what we already have




    }

    async function handleSubmit(e){
        e.preventDefault()
       let response = await createUser(user)
       if (response.status !== 200){
        alert("user not created :(")
       }


    }


 


    return(
        <form onSubmit={handleSubmit}>
            
            <input  placeholder={"Name"} onChange ={handleChange} name ="name" required maxLength={20}/> 
            <input placeholder={"Email"} onChange={handleChange}name ="email" required maxLength={40}/>
            <input placeholder={"Password"} onChange={handleChange} name = "password" type="password"required maxLength={40}/>
            <button type="submit">Create Account</button>

        
        
        </form>
    )
}