import React from "react";

function Skills({ image, name }) {
  return (
    <section>
      <div className="lg:max-w-sm p-6  flex justify-center ">
        <img src={image} alt={name} className="h-10" />
      </div>
    </section>
  );
}

export default Skills;
