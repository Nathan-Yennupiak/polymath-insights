import category from "@/polimath-insights-database/schemaTypes/category"
import Image from "next/image"

const BlogCard = ({postData }) => {
  return (
    <div className="flex flex-col space-y-2 bg-primary-bg w-72 hover:scale-105 transition-transform duration-200 ease-out  overflow-hidden  rounded-xl shadow-sm shadow-gray-400 py-2">
        <div className=" rounded">
    <Image src={postData.image}
        width={400} height={200} alt="blog" 
        className=" object-cover rounded"/>
        </div>
        <div className="flex flex-col p-3 gap-2">
            <div className="flex flex-row justify-between">
            <p className="font-semibold text-sm bg-primary-gray px-3 py-2">{postData.author.name}</p>
            <p className="font-semibold text-sm"> {new Date(postData.publishedAt).toLocaleDateString('en-US')}</p>
            </div>
            <div>
                <h1 className="text-xl font-bold line-clamp-1"> {postData.title}</h1>
            </div>
            <div>
                <p className="line-clamp-2">
                {postData.body}
                </p>
            </div>
            <div className="flex flexrow flex-wrap space-x-2">
                {postData.categories.map((category)=>(
                    <p key={category._id} className="bg-primary-dark px-3 py-2 text-sm rounded-md text-primary-bg">{category.name}</p>
                ))}
            
            </div>
        </div>
    </div>
  )
}

export default BlogCard