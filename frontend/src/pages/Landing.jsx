import { CreateUser } from "../../components/CreateUser"
import { Login } from "../../components/Login"
import { useState } from "react"
import { Button } from "@/components/ui/button"


export function Landing (){

    //if view== 0 --> login mode || if view ==1 --> create account mode
    const [view, setView] =useState(0)
    return(
        <div className ="flex justify-center items-center w-screen h-screen">

        {!view?
        <div className ="flex flex-col w-96">
        <Login/> 
        <Button onClick={()=> setView(!view)}>Create New Account</Button>
        
        </div>:

        <div className ="flex flex-col w-96 mb-2">
        <CreateUser/>
        <Button onClick={()=> setView(!view)}>Login to existing account </Button>
        
        </div>}
      
       
       </div>
    )
}