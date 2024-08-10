import React, { ReactNode, useState, useEffect, CSSProperties } from "react";

const GradientBg: React.FC<{ children: ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY + window.scrollY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  const gradientStyle: CSSProperties = {

    backgroundColor: 'rgb(15, 23, 42)',
    backgroundImage: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
    zIndex: 30,
    transition: "background-image 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)",

  };

  return (
    <div style={gradientStyle} className={className}>
      {children}
    </div>
  );
};

export default GradientBg;
