import React from "react";
import {useState, useEffect} from 'react'
import {MdOutlineLightMode, MdOutlineDarkMode} from 'react-icons/md'

function Header() {
  const [theme, setTheme] = useState(localStorage.theme || "light")

  useEffect(() => {
    const root = window.document.documentElement
    // root is basically our html tag in index.html
    root.classList.remove('dark', 'light')
    root.classList.add(theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  function toggleTheme() {
    setTheme(() => (theme==='dark') ? 'light' : 'dark')
  }

  return (
    <header>
      <nav className="flex justify-center items-start h-[5rem] pt-5 w-full">
        <p className="lg:w-1/2 font-semibold text-xl">
          priyank<span className="text-yellow-500">.js</span>
        </p>
        <button onClick={toggleTheme} className="absolute right-0 mr-4 p-1 text-sm dark:bg-white dark:text-black bg-black text-white rounded-full dark:shadow-[0px_0px_12px_-1px_rgba(220,220,220,0.6)] shadow-[0px_0px_12px_-1px_rgba(0,0,0,0.4)]">
          {theme==="dark" ? <MdOutlineLightMode size={20}/> : <MdOutlineDarkMode size={20}/>}
        </button>
      </nav>
    </header>
  );
}

export default Header;
