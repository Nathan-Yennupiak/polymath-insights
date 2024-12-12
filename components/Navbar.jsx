import Image from "next/image"

const Navbar = () => {
  return (
    <header className="flex flex-row justify-between lg:px-40 px-4 mt-4 items-center border-b-2 border-gray-200 py-2">
        <div className="bg-primary-brand p-3 rounded-full">
            <Image src="/images/logo1.png" alt="logo" width={30} height={43} />   
        </div>
        <nav className="flex flex-row space-x-4">
            <p>Home</p>
            <p>Blog</p>
            <p>About</p>
            <p>Contact</p>
        </nav>

        <div>Get in Touch</div>

    </header>
  )
}

export default Navbar