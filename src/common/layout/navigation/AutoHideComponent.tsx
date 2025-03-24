import { useState, useEffect } from "react";
interface AutoHideComponentProps {
  children?: React.ReactNode;
}
const AutoHideComponent: React.FC<AutoHideComponentProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  let timeoutId: ReturnType<typeof setTimeout>;
  const handleMouseMove = () => {
    setIsVisible(true);
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      setIsVisible(false);
    }, 3000);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div
      className={`fixed left-1 top-1/2 transform -translate-y-1/2 transition-all duration-500 z-10 ${
        isVisible ? "translate-x-0" : "translate-x-[-120%]"
      }`}
    >
      {children}
    </div>
  );
};

export default AutoHideComponent;
