import React, { useMemo } from "react";

const Image = ({ image }) => {
  const Image = useMemo(() => {
    return image;
  });
  return <img src={Image} alt="" className="object-contain" />;
};

export default Image;
