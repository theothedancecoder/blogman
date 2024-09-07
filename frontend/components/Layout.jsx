import { Navbar} from "./Navbar";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function Layout(){
    let user = sessionStorage.getItem("user")
    const navigate =useNavigate()

    useEffect (()=>{
        if (!user){
            navigate ("/")
    
    
        }

        
    }, [navigate])
    


    return(
        <>
        <Navbar/>
        <main className="flex w-screen justify-center mt-24">
        <Outlet/>
        </main>
       
        </>
    )
}