import { ReactNode, useEffect, useRef, useState, FC } from "react";
import routes from "../data/routes";
import Nav from "./nav";
import Banner from "./banner";

interface HeaderProps {
  children: ReactNode;
  headerClass: string;
}

function useOnScreen(options: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [intersect, setIntersect] = useState<boolean | undefined>();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersect(entry.isIntersecting);
    }, options);

    const el = ref.current;

    if (el) {
      observer.observe(el);
    }

    return () => {
      if (el) {
        observer.unobserve(el);
      }
    };
  }, [ref, options]);

  return [ref, intersect] as const;
}

const Header: FC<HeaderProps> = ({ children, headerClass, ...rest }) => {
  const [ref, intersect] = useOnScreen({
    rootMargin: "-200px",
    // threshold: [1],
  });

  return (
    <header ref={ref} className={`page-header ${headerClass}`}>
      <Nav
        {...rest}
        routes={routes}
        navProps={!intersect ? `nav__sticky` : `nav__static`}
      />
      <Banner>{children}</Banner>
    </header>
  );
};

export default Header;
