import { ReactNode } from "react";
import "./GreenButton.scss";

interface ButtonProps {
  children: ReactNode;
}

const GreenButton: React.FC<ButtonProps> = ({ children }) => {
  return <button className="Button">{children}</button>;
};

export default GreenButton;
