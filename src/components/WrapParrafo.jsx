import React from "react";
import css from "../components/Works/Work.module.scss";
import Parrafo from "./Parrafo";
function WrapParrafo({ info }) {
  const leftSections = info.filter((item) => item.position === "left");
  const rightSections = info.filter((item) => item.position === "right");

  console.log(leftSections);
  console.log(rightSections);
  return (
    <div
      style={{ alignItems: "start", paddingTop: "0px" }}
      className={`paddings yPaddings flexCenter innerWidth ${css.container} items-start gap-8 flex-col md:flex-row`}
    >
      <div style={{ flex: "1" }}>
        {leftSections.map((section, index) => (
          <div key={`left-${index}`}>
            {section.title && (
              <h2 className="text-[20px] font-bold mt-6">{section.title}</h2>
            )}
            {section.content.map((comp) => (
              <Parrafo
                key={comp.id}
                title={comp.title}
                description={comp.description}
              />
            ))}
          </div>
        ))}
      </div>
      <div style={{ flex: "1" }}>
        {rightSections.map((section, index) => (
          <div key={`right-${index}`}>
            {section.title && (
              <h2 className="text-[20px] font-bold mt-6">{section.title}</h2>
            )}
            {section.content.map((comp) => (
              <Parrafo
                key={comp.id}
                title={comp.title}
                description={comp.description}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default WrapParrafo;
