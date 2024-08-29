
import { getPosts } from "../api"
import { useState, useEffect } from "react"

export function Home(){

    const [posts, setPosts] =useState([])
    useEffect(()=>{
        async function loadAllPosts(){
            const data = await getPosts()
            setPosts(data)

        }
        loadAllPosts()

    },[])

    return(
        <>{posts.map((post)=>{
            return(
                <>
               <h1>{post.title}</h1>
               <h1>{post.description}</h1>
               <h1>{post.dateCreated}</h1>
               

                </>


            )
        })}</>
    )
}