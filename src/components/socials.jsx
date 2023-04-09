import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

function Socials() {
  return (
    <>
      <a href="https://github.com/priyankarpal" target="_blank">
        <FaGithub />
      </a>
      <a href="https://twitter.com/priyankarpal" target="_blank">
        <FaTwitter />
      </a>
      <a href="https://www.linkedin.com/in/priyankarpal" target="_blank">
        <FaLinkedin />
      </a>
    </>
  );
}

export default Socials;
