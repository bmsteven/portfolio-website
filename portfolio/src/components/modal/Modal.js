import { useEffect, useState } from "react"
import { useModalState, useModalDispatch, REMOVE_ARRAY } from "context/modal"
import { FaAngleLeft, FaAngleRight, FaTimes } from "react-icons/fa"
import { useUIState } from "context/context"
import styles from "./modal.module.css"

const Modal = () => {
  const { project, projects, gallery, open } = useModalState()
  let lengthy = projects?.active
    ? projects?.list?.length
    : gallery?.active === 0 || gallery?.active
    ? gallery?.list?.length
    : 0

  let objectArray = projects?.active
    ? projects?.list
    : gallery?.active === 0 || gallery.active
    ? gallery?.list
    : 0
  const [details, setDetails] = useState(
    projects?.active
      ? projects?.list.find((el) => el.id === projects.active)
      : gallery?.active === 0
      ? gallery?.list[0]
      : gallery?.active
      ? gallery.list[gallery?.active]
      : project?.id
      ? project
      : {}
  )
  const [active, setActive] = useState(
    projects?.active
      ? projects?.list?.findIndex((el) => el.id === projects.active)
      : gallery?.active
      ? gallery.active
      : 0
  )
  const [isOpen, setIsOpen] = useState(true)
  const { mode } = useUIState()
  const dispatch = useModalDispatch()

  const close = () => {
    dispatch({
      type: REMOVE_ARRAY,
    })
    setDetails({})
    document.body.classList.remove("no-scrolling")
  }

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    if (open) document.body.classList.add("no-scrolling")
  }, [open])

  const next = () => {
    setActive((prev) => {
      if (prev >= lengthy) {
        return prev
      } else {
        return prev + 1
      }
    })
    setDetails((prev) => {
      let arr
      if (lengthy > 0) arr = objectArray.find((el, index) => index === active)
      if (arr) return arr
      return prev
    })
  }

  const prev = () => {
    setActive((prev) => {
      if (prev === 0) {
        return prev
      } else {
        return prev - 1
      }
    })
    setDetails((prev) => {
      let arr
      if (lengthy > 0) arr = objectArray.find((el, index) => index === active)
      if (arr) return arr
      return prev
    })
  }

  console.log(details, lengthy.find, objectArray, gallery)

  const Arrows = () => {
    return (
      <>
        <span
          className={styles.next}
          onClick={next}
          style={{
            background: active >= lengthy ? "#3e4c5130" : "#3E4C51",
            cursor: active >= lengthy ? "default" : "pointer",
            color: active >= lengthy ? "#ffffff50" : "#ffffff",
          }}
        >
          <FaAngleRight className={styles.icon} />
        </span>
        <span
          className={styles.prev}
          onClick={prev}
          style={{
            background: active === 0 ? "#3e4c5130" : "#3E4C51",
            cursor: active === 0 ? "default" : "pointer",
            color: active === 0 ? "#ffffff50" : "#ffffff",
          }}
        >
          <FaAngleLeft className={styles.icon} />
        </span>
      </>
    )
  }

  return (
    <div
      className={
        mode === "dark" ? `${styles.modal} ${styles.dark}` : `${styles.modal}`
      }
    >
      <div className={styles.modal__container}>
        <div className={styles.img__container}>
          <span className={styles.close} onClick={close}>
            <FaTimes className={styles.icon} />
          </span>
          {project?.id ? (
            <div
              className={
                isOpen && !gallery?.active
                  ? `${styles.project} ${styles.item}`
                  : `${styles.project} ${styles.item} ${styles.open}`
              }
            >
              <div className={styles.backdrop} onClick={close} />
              <img src={details.src} alt="" onClick={toggleOpen} />
            </div>
          ) : projects?.active ? (
            <div
              className={
                isOpen && !gallery?.active
                  ? `${styles.projects} ${styles.item}`
                  : `${styles.projects} ${styles.item} ${styles.open}`
              }
            >
              <div className={styles.backdrop} onClick={close} />
              <Arrows />
              <img src={details.src} alt="" onClick={toggleOpen} />
            </div>
          ) : gallery?.list.length > 0 ? (
            <div className={`${styles.gallery} ${styles.item}`}>
              <div className={styles.backdrop} onClick={close} />
              <Arrows />
              <img src={details} alt="" />
            </div>
          ) : (
            <div></div>
          )}
          {!gallery?.list.length > 0 && (
            <div
              className={
                isOpen
                  ? `${styles.details} ${styles.open}`
                  : `${styles.details}`
              }
            >
              {details.name}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Modal
