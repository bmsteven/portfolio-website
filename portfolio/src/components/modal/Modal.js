import { useEffect, useState } from "react"
import { useModalState, useModalDispatch, REMOVE_ARRAY } from "context/modal"
import { useUIState } from "context/context"
import styles from "./modal.module.css"

const Modal = () => {
  const { project, projects, gallery, open } = useModalState()
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
  const [isOpen, setIsOpen] = useState(true)
  const { mode } = useUIState()
  const dispatch = useModalDispatch()

  console.log(isOpen)

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
    // return document.body.classList.remove("no-scrolling")
  }, [open])

  console.log(details, !gallery?.active, gallery.active.length)

  return (
    <div
      className={
        mode === "dark" ? `${styles.modal} ${styles.dark}` : `${styles.modal}`
      }
    >
      <div className={styles.modal__container}>
        <div className={styles.img__container}>
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
              <img src={details.src} alt="" onClick={toggleOpen} />
            </div>
          ) : gallery?.list.length > 0 ? (
            <div className={`${styles.gallery} ${styles.item}`}>
              <div className={styles.backdrop} onClick={close} />
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
