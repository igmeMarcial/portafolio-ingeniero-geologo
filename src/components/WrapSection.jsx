import React from "react";
import SectionComponent from "./SectionComponent";
import { fadeInX } from "../utils/AnimatedVariants";

function WrapSection({ heading, subHeading, data, imgPath }) {
  return (
    <SectionComponent
      variant={fadeInX("positive")}
      heading={heading}
      subHeading={subHeading}
      data={data}
      imgUrl={imgPath}
      section="pb-8 md:pb-56 pt-[3.25rem] lg:pt-[3.5rem] lg:pb-0"
      container="lg:flex-row-reverse lg:pl-36"
      img="lg:scale-[1.3] lg:translate-x-0 lg:translate-y-0 xl:translate-y-0 xl:translate-x-0"
      wrapper="lg:pt-24"
      textWrapper="lg:pb-[1rem]"
      title="text-[1.6rem] text-very-dark-blue lg:text-[2.35rem] text-center font-bold"
      description="px-4"
    />
  );
}

export default WrapSection;
