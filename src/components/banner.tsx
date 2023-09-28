import { ReactNode, FC } from "react";
import hero from "../images/hero.jpg";

interface BannerProps {
  children: ReactNode;
}

const Banner: FC<BannerProps> = ({ children }) => {
  return (
    <div className="banner">
      <div className="content">{children}</div>
      <div className="hero-bg">
        <img src={hero} alt="hero-bg" loading="lazy" />
      </div>
    </div>
  );
};

export default Banner;
