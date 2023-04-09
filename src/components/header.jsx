import React from "react";

function Header() {
  return (
    <header>
      <nav className=" flex justify-center h-[5rem] pt-5 w-full">
        <p className="lg:w-1/2 mx-auto font-semibold text-xl">
          priyank<span className="text-yellow-500">.js</span>
        </p>
      </nav>
    </header>
  );
}

export default Header;
