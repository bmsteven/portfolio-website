import { Outlet } from "react-router-dom";

import routes from "../data/routes";

// Components
import Nav from "../components/nav";
import Footer from "../components/footer";
import { FC } from "react";

interface PortfolioProps {
  // Define the prop types here, if any.
  // For example, you can define prop types like this:
  // someProp: string;
}

const Portfolio: FC<PortfolioProps> = ({ ...rest }) => {
  return (
    <div className="page portfolio-content">
      <Nav {...rest} navProps="nav-header" routes={routes} />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
