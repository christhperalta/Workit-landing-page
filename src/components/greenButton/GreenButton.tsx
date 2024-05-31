import { ReactNode } from "react";
import "./Button.scss";

interface ButtonProps {
  color?: string;
  children: ReactNode;
}

const GreenButton: React.FC<ButtonProps> = ({ children, color }) => {
  return (
    <button className="Button" style={{ backgroundColor: color }}>
      {children}
    </button>
  );
};

export default GreenButton;
