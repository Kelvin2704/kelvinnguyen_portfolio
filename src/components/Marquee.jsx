import React from "react";
// import "./Marquee.css";

const Marquee = ({ items }) => {
    console.log(typeof(items));
    
  return (
    <div>
      {items.map((skill, index) => (
        <div key={index}>
          <h2>{skill.title}</h2>
          {/* <ul>
            {skill.icons.map((icon, i) => (
              <li key={i}>
                {icon}
              </li>
            ))}
          </ul> */}
        </div>
      ))}
    </div>
  );
};

export default Marquee;
