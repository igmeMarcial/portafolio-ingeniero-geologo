import React from "react";
import WrapSection from "./WrapSection";
import MoreContent from "./List/MoreContent";

function MineContainer({
  title = "",
  subTitle = "",
  properties = [],
  agreementTitle = "",
  agreement = [],
  imgUrl,
}) {
  return (
    <>
      <WrapSection
        heading={title}
        subHeading={subTitle}
        data={properties}
        imgPath={imgUrl}
      />
      <MoreContent data={agreement} />
    </>
  );
}

export default MineContainer;
