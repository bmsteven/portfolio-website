import { useEffect, useState } from "react"
import { useModalState, useModalDispatch, REMOVE_ARRAY } from "context/modal"
import { useUIState } from "context/context"
import styles from "./modal.module.css"

const Modal = () => {
  const { project, projects, gallery, open } = useModalState()
  const [details, setDetails] = useState(
    projects?.active
      ? projects?.list.find((el) => el.id === projects.active)
      : gallery?.active
      ? gallery?.list.find((el) => el.id === gallery.active)
      : project?.id
      ? project
      : {}
  )
  const [isOpen, setIsOpen] = useState(true)
  const { mode } = useUIState()
  const dispatch = useModalDispatch()

  const close = () => {
    dispatch({
      type: REMOVE_ARRAY,
    })
    setDetails({})
  }

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    if (open) document.body.classList.add("no-scrolling")
    // return document.body.classList.remove("no-scrolling")
  }, [open])

  return (
    <div
      className={
        mode === "dark" ? `${styles.modal} ${styles.dark}` : `${styles.modal}`
      }
    >
      <div className={styles.modal__container}>
        <div
          className={
            isOpen
              ? `${styles.img__container} ${styles.img__container__wide}`
              : `${styles.img__container}`
          }
        >
          {project?.id ? (
            <div className={`${styles.project} ${styles.item}`}>
              <div className={styles.backdrop} onClick={close} />
              <img src={details.src} alt="" onClick={toggleOpen} />
            </div>
          ) : projects?.active ? (
            <div className={`${styles.projects} ${styles.item}`}>
              <div className={styles.backdrop} onClick={close} />
              <img src={details.src} alt="" onClick={toggleOpen} />
            </div>
          ) : gallery?.active ? (
            <div className={`${styles.gallery} ${styles.item}`}>
              <div className={styles.backdrop} onClick={close} />
              <img src={details.src} alt="" />
            </div>
          ) : (
            <div></div>
          )}
          {/* <div
            className={
              isOpen && !gallery.active
                ? `${styles.details} ${styles.open}`
                : `${styles.details}`
            }
          >
            {details.name}
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Modal
