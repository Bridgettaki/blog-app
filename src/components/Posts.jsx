//Dummy-posts-data..................
import { DummyPosts } from "../data/data"
import { useState } from "react"

import PostItems from "./PostItems"

export default function Posts(){
    const [posts, setPosts] = useState(DummyPosts)
    return(
        <section className="posts">
            { posts.length > 0 ?
           <div className="container posts-container">
           {
            posts.map(({id,Image, authorId, category, title, des}, index)=> 
                <PostItems key={index} Image={Image} category={category} authorId={authorId} title={title} 
                des={des} postId={id}/>)
            }
           </div> : <h2 className="error-center">No posts found</h2>
            }
        </section>
    )
}