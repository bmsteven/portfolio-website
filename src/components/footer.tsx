import { ReactNode, FC } from "react";

interface FooterProps {
  children?: ReactNode;
}

const Footer: FC<FooterProps> = ({ children }) => {
  return (
    <footer>
      <div className="container">
        {children}
        <span>&copy; bm dev</span>
      </div>
    </footer>
  );
};

export default Footer;
