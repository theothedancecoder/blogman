
import { getPosts } from "../api"
import { useState, useEffect } from "react"
import { BlogCard } from "../../components/BlogCard"

export function Home(){

    const [posts, setPosts] =useState([])
    useEffect(()=>{
        async function loadAllPosts(){
            const data = await getPosts()
            data.sort((d1,d2)=>new Date(d2.dateCreated))
            setPosts(data)

        }
        loadAllPosts()

    },[])

    return(
        <div className="flex flex-col items-center w-full">{posts.map((post)=>{
            return(
                <div className="w-1/2 mt-4">
             
               <BlogCard key={post.id} post={post}/>

                </div>


            )
        })}</div>
    )
}