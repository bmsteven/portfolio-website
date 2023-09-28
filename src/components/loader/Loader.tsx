import styles from "./loader.module.css";
import { useUIState } from "../../context/context";
import { FC } from "react";

const Loader: FC = () => {
  const { mode } = useUIState();
  return (
    <div
      className={
        mode === "dark"
          ? `${styles.loader} ${styles.dark}`
          : `${styles.loader} ${styles.light}`
      }
    >
      <header />
    </div>
  );
};

export default Loader;
