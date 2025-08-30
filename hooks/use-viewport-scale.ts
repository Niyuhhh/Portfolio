import * as React from "react";

export function useViewportScale(baseWidth: number, baseHeight: number) {
  const [scale, setScale] = React.useState(1);

  React.useEffect(() => {
    const updateScale = () => {
      const { innerWidth, innerHeight } = window;
      const s = Math.min(innerWidth / baseWidth, innerHeight / baseHeight);
      setScale(s);
      document.documentElement.style.setProperty("--viewport-scale", s.toString());
    };
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, [baseWidth, baseHeight]);

  return scale;
}
