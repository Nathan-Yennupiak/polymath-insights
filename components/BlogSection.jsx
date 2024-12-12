
import BlogCard from "./BlogCard"
import { getPosts } from "@/lib/client"

const BlogSection = async() => {
  const posts = await getPosts();
  return (
    <div className="flex flex-col lg:px-40 px-4 mb-10">
        <div className="flex justify-center my-4">
            <h1 className="capitalize text-5xl font-bold">Blog Posts</h1>
        </div>
        <ul className="flex flex-row flex-wrap justify-evenly mt-4 gap-4 lg:gap-2">

          {posts.map((post)=>(
            <li key={post.id}>
              <BlogCard postData = {post}/>
              </li>
          ))}
            
        </ul>
    </div>
  )
}

export default BlogSection