import Image from "next/image"

const BlogCard = () => {
  return (
    <div className="flex flex-col space-y-2 bg-primary-bg w-72 hover:scale-105 transition-transform duration-200 ease-out  overflow-hidden  rounded-xl shadow-sm shadow-gray-400">
        <div className=" rounded">
        <Image src="/images/programmer.webp" width={300} height={200} alt="blog" className="rounded"/>
        </div>
        <div className="flex flex-col p-3 gap-2">
            <p className="font-semibold text-sm text-primary-brand">Nathan, December 12 2024</p>
            <div>
                <h1 className="text-xl font-bold"> How to become a Programmer</h1>
            </div>
            <div>
                <p className="line-clamp-2">
                This Blog is perfect if you have a blog idea and you want to share. Using its high-quality sections and components you can showcase your blog articles in a very beautiful and unique way.
                </p>
            </div>
            <div className="flex flexrow flex-wrap space-x-2">
                <p className="border bg-primary-dark text-primary-bg p-2 text-xs rounded-md ">Programming</p>
                <p className="border bg-primary-dark text-primary-bg p-2 text-xs rounded-md ">Cloud</p>
                
            </div>
        </div>
    </div>
  )
}

export default BlogCard