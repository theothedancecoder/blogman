import { Link } from "react-router-dom"
export function About(){

    return(
        <div className="w-1/2">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight mb-2 lg:text-5xl text-primary mt-4">About Us</h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6 whitespace-pre-wrap text-left">Welcome to BlogMan, your go-to platform for sharing thoughts, stories, and experiences with the world.</p> 
        <p className="leading-7 [&:not(:first-child)]:mt-6 whitespace-pre-wrap text-left">We empower writers of all levels to express themselves and connect with a vibrant community of readers.</p> 
        <p className="leading-7 [&:not(:first-child)]:mt-6 whitespace-pre-wrap text-left">Whether you're passionate about storytelling, keen to share your expertise, or just want a creative outlet </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6 whitespace-pre-wrap text-left"> BlogMan provides the tools and space you need. Start writing today and let your voice be heard!. Start to <Link to = "/createBlog">Create</Link> your blog now!</p>
   
       </div>
    )
}