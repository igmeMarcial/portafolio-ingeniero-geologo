import React from "react";
import AnimatedComponent from "./AnimatedComponent";
import { fadeInY, stagger } from "../utils/AnimatedVariants";

export default function SectionComponent({
  heading,
  subHeading,
  data,
  variant,
  imgUrl,
  ...classNames
}) {
  return (
    <section
      className={`${classNames.section} text-very-dark-grayish-blue lg:overflow-hidden`}
    >
      <AnimatedComponent
        tag="h2"
        variants={fadeInY(0.25)}
        className={classNames.title}
      >
        {heading}
      </AnimatedComponent>
      <p
        style={{
          lineHeight: "25px",
          width: "50%",
          margin: "0 auto",
          textAlign: "center",
        }}
        className=" secondaryText flexCenter"
      >
        {subHeading}
      </p>
      <div className={`${classNames.container} lg:flex lg:items-start `}>
        <AnimatedComponent tag="div" variants={variant}>
          {imgUrl.map((img) => (
            <div key={img.id} className={`${classNames.wrapper} text-center`}>
              <picture>
                <source media="(min-width: 1024px)" srcSet={img.path} />
                <img
                  src={img.path}
                  alt=""
                  className={`m-auto py-14  ${classNames.img}`}
                />
              </picture>
              <span className="secondaryText">{img.title}</span>
            </div>
          ))}
        </AnimatedComponent>
        <div
          className={`${classNames.wrapper} md:m-auto md:max-w-md lg:m-0 lg:text-left xl:max-w-xl`}
        >
          {data.map((content, index) => (
            <AnimatedComponent
              tag="div"
              variants={stagger("negative")}
              key={content.id}
              className={`${classNames.textWrapper} px-4 pb-5 md:pb-10 pt-1 leading-loose `}
            >
              <h3 className="pb-2.5 pl-14 pr-12 text-[1.2rem] font-bold leading-[1.1] tracking-tight lg:px-0 lg:pb-0 text-center md:text-left">
                {content.title}
              </h3>
              <AnimatedComponent
                tag="p"
                variants={fadeInY(0.8)}
                className={`${index === 1 ? "pt-2 lg:pt-0" : ""} ${
                  classNames.description
                } lg:px-0 w-[80%] leading-6  mx-auto md:mx-0 text-center md:text-left`}
              >
                {content.description}
              </AnimatedComponent>
            </AnimatedComponent>
          ))}
        </div>
      </div>
    </section>
  );
}
