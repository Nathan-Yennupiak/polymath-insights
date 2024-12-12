import BlogCard from "./BlogCard"

const BlogSection = () => {
  return (
    <div className="flex flex-col lg:px-40 px-4 mb-10">
        <div className="flex justify-center my-4">
            <h1 className="capitalize text-5xl font-bold">Blogs</h1>
        </div>
        <ul className="flex flex-row flex-wrap justify-evenly mt-4 gap-4 lg:gap-2">
            <li><BlogCard /></li>
            <li><BlogCard /></li>
            <li><BlogCard /></li>
            <li><BlogCard /></li>
        </ul>
    </div>
  )
}

export default BlogSection