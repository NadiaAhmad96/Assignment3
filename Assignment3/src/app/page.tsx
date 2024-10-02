import Image from "next/image";
import ayisha from "./profile.png";
export default function Home() {
  return (
    <div className = "box flex bg-black	background-color: rgb(0 0 0)">
      <div className="box1  flex-auto w-55 ml-8 mt-4 text-xl">
      <h1 className="text-pink-500">NAME</h1>
      <p className="text-blue-400">Nadia</p>
      <h1 className="text-pink-500">EMAIL Address</h1>
      <p className="text-blue-400">nadia2276@gmail.com</p>
      <h1 className="text-pink-500">GIT Repository</h1>
      <p className="text-blue-400"><a href="https://github.com/NadiaAhmad96">Nadia</a></p>
        </div> 
        <div className="box2 flex mr-3">
        <Image src={profile} alt="img" width={200} className="h-40 mt-3"/>
        </div>
    </div>
  );
}
