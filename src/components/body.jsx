import React from "react";
import Projectscard from "./projectscard";

function Body() {
  return (
    <div className="flex h-screen w-screen">
      <div className="w-1/2 mx-auto">
        <div className="flex flex-wrap items-center gap-5">
          <img
            src="https://github.com/priyankarpal.png"
            alt="priyankarpal"
            className="h-20 rounded-full"
          />
          <h1 className="text-3xl font-semibold">hi there!</h1>
        </div>
        <p className=" text-gray-700 pt-5">
          <span className="text-green-400"> -</span> 👶 I'm Priyankar Pal a
          front-end web developer from India.
        </p>
        <p className="text-gray-700">
          {" "}
          <span className="text-green-400"> -</span> 👨‍💻 A Open Source
          contributor became a Maintainer.
        </p>
        <p className="text-gray-700">
          {" "}
          <span className="text-green-400"> -</span> ⚒️ Mainly I work with
          JavaScript and TailWind CSS on a daily basis.
        </p>
        <p className="text-gray-700">
          {" "}
          <span className="text-green-400"> -</span> 🤡 Also, I create memes on
          code
        </p>
        <div className="pt-5">
          <Projectscard />
        </div>
      </div>
    </div>
  );
}

export default Body;
