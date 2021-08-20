import styles from "./loader.module.css"
import { useUIState } from "context/context"

const Loader = () => {
  const { mode } = useUIState()
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
