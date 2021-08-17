import styles from "./loader.module.css"
import { useUIContext } from "context/context"

const Loader = () => {
  const { mode } = useUIContext()
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
  )
}

export default Loader
