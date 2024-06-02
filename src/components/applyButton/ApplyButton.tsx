import { ReactNode } from "react";
import "./ApplyButton.scss";
interface ApplyButtonProps {
  children: ReactNode;
}

const ApplyButton: React.FC<ApplyButtonProps> = ({ children }) => {
  return <button className="ApplyButton">{children}</button>;
};

export default ApplyButton;
