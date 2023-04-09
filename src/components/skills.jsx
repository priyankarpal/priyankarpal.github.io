import React from "react";

function Skills({ image, name }) {
  return (
    <section>
      <div className="max-w-sm p-6 ">
        <img src={image} alt={name} className="h-10" />
      </div>
    </section>
  );
}

export default Skills;
