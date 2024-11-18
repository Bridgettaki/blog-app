import React from 'react'

export default function CreatePosts(){
        const [posts, setPosts] = useState(DummyPosts)
        return(
            <section className="authorPosts">
                { posts.length > 0 ?
               <div className="container authorPosts-container">
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