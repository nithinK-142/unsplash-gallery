import { useEffect, useState } from "react";

const Orientation = () => {
  const [orientation, setOrientation] = useState("portrait");

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 426;
      setOrientation(isMobile ? "portrait" : "landscape");
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return orientation;
};

export default Orientation;
