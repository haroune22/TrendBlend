"use client"

import { ThemeContext } from "@/context/ThemeContext";
import Image from "next/image"
import { useContext } from "react";



const ThemeToggle = () => {
  const { toggle, theme } = useContext(ThemeContext);
  return (
    <div onClick={toggle}
    style={
      theme === "dark" ? { backgroundColor: "white" } : { backgroundColor: "#0f172a" }
    } className="w-10 h-5 relative rounded-2xl cursor-pointer flex items-center justify-between" >
      <Image src="/moon.png" alt="themeToogle" width={15} height={15}/>
      <div   style={
          theme === "dark"
            ? { left: 1, background: "#0f172a" }
            : { right: 1, background: "white" }
        } className="w-4 h-4 rounded-full absolute"></div>
      <Image src="/sun.png" alt="themeToogle" width={15} height={15}/>
    </div>
  )
}

export default ThemeToggle