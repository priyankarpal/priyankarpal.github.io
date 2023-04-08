import React from "react";

function Footer() {
  return (
    <footer className="flex h-[5rem] pt-5 w-full">
      <div className=" w-1/2 mx-auto">
        <p className="text-sm">
          Made with{" "}
          <span role="img" aria-label="love">
            ❤️
          </span>{" "}
          by html dev
        </p>
        <p className="text-sm">
          © {new Date().getFullYear()}{" "}
          <a href="/" target="_blank" rel="noopener noreferrer">
            priyankar
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
