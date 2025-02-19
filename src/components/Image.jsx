import { useEffect, useState } from "react";
//https://image.tmdb.org/t/p/w130_and_h195_bestv2//geCRueV3ElhRTr0xtJuEWJt6dJ1.jpg
const ImageComponent = ({ src, width, height, className }) => {
  const [currentSrc, setCurrentSrc] = useState(
    `https://placehold.co/${width}x${height}?text=Loading`,
  );

  useEffect(() => {
    const img = new Image();
    if (src) {
      img.src = src;
      img.onload = () => {
        setCurrentSrc(src);
      };
      return;
    }
    setCurrentSrc(`https://placehold.co/${width}x${height}?text=No Image`);
    return () => {
      // clean up function
      img.onload = null;
    };
  }, [src, width, height]);

  return (
    <img
      className={
        currentSrc === src || !src ? className : `${className} blur-md`
      }
      src={currentSrc}
      width={width}
      height={height}
    />
  );
};
export default ImageComponent;
