import { BlogCard } from "../../components/BlogCard"
import { useState, useEffect } from "react"
import {getPosts } from "../api"
import * as jwt_decode from 'jwt-decode'


export function Profile (){

    const [post, setPost]=useState([])
    const [user, setUser]=useState({})

    useEffect (()=>{
        async function loadUserData(){
            const token =sessionStorage.getItem("user")
            const decodedUser = jwt_decode.jwtDecode(token)
            const allPosts = await getPosts()
            const filteredPosts = allPosts.filter((post)=>post.author ==decodedUser._id)
            setPost(filteredPosts)
            setUser(decodedUser)
        }
        loadUserData()
        
    },[])

    return(
        <>
       <label> Name:</label>
       <h2>{user.name}</h2>
       <label> Email: </label>
       <h2>{user.email}</h2>
       <label> Join Date: </label>
       <h2>{user.joinDate}</h2>
        </>
    )
}