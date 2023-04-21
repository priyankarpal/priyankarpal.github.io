import React from "react";

function Skills({ image, name }) {
  return (
    <section>
      <div className="lg:max-w-sm p-6  flex justify-center relative">
        <img src={image} alt={name} className="peer h-10" />
      <span className="opacity-0 peer-hover:opacity-100 text-center text-xs text-gray-400 absolute -bottom-1 transition-opacity">{name}</span>
      </div>
    </section>
  );
}

export default Skills;
