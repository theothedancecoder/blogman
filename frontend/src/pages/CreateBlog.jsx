import { useState } from "react"
import { createPost } from "../api"
export function CreateBlog(){

   async function handleSubmit(){ 
        let submitObject ={
            title:title,
            description:description,
            content:content,
            author:null,
            dateCreated: new Date()
        }
        createPost(submitObject)

   }

    const [title,setTitle] =useState("")
    const [description, setDescription] = useState("")
    const [content, setContent] = useState ("")



   

    return(
        <form onSubmit={handleSubmit}>
            <label>Blog Title </label>
            <input onChange ={(e) =>setTitle(e.target.value)} max maxLength ={100} required name="title"/>
            <label>Blog Description</label>
            <input onChange ={(e) =>setDescription(e.target.value)} maxLength = {200} required name="description"/>
            <label>Blog Content</label>
            <textarea onChange ={(e) =>setContent(e.target.value)}maxLength = {5000} required name="content"/>
                <button type="submit">submit</button>


        </form>
    )
}