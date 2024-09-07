import { getPost } from "../api"
import { useNavigate, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function ReadBlog(){
    const [post, setPost]= useState({})

    let params = useParams()
    const navigate = useNavigate()
    let id = params.id


     useEffect(()=>{
        
        async function loadPost(){
            let data = await getPost(id)
            let date = new Date(data.dateCreated)
            data.dateCreated = date.toString()
            
            setPost(data)
            

        }
        loadPost()

    },[id])

    return(
        <div className="flex flex-col items-center w-1/2"> 
        <Button onClick={()=>navigate(-1)} className ="W-48 my-8">Back</Button>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight mb-2 lg:text-5xl text-primary">{post.title}</h1>
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mb-2">{post.description}</h2>
        <div className="flex w-full justify-center">
        <img src={post.image?.data }className= "max-h-96"></img>
        </div>
       
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">{post.dateCreated?.slice(4,15)}</h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6 whitespace-pre-wrap text-left">{post.content}</p>
      
        </div>
    )
}


