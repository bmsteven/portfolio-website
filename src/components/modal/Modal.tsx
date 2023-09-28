import { useEffect, useState } from "react";
import { useModalState, useModalDispatch, REMOVE_ARRAY } from "../../context/modal";
import { Link } from "react-router-dom";
import { FaAngleLeft, FaAngleRight, FaTimes } from "react-icons/fa";
import { useUIState } from "../../context/context";
import styles from "./modal.module.css";

const Modal = () => {
  const { project, projects, gallery, open } = useModalState();
  let lengthy = projects?.active
    ? projects?.list?.length
    // @ts-ignore
    : gallery?.active === 0 || gallery?.active
    ? gallery?.list?.length
    : 0;

  let objectArray = projects?.active
    ? projects?.list
    // @ts-ignore
    : gallery?.active === 0 || gallery.active
    ? gallery?.list
    : 0;
  const [details, setDetails] = useState(
    projects?.active
      ? projects?.list.find((el) => el.id === projects.active)
      // @ts-ignore
      : gallery?.active === 0
      ? gallery?.list[0]
      : gallery?.active
      // @ts-ignore
      ? gallery.list[gallery?.active]
      : project?.id
      ? project
      : {}
  );
  const [active, setActive] = useState(
    projects?.active
      ? projects?.list?.findIndex((el) => el.id === projects.active)
      : gallery?.active
      ? gallery.active
      : 0
  );
  const [isOpen, setIsOpen] = useState(true);
  const { mode } = useUIState();
  const dispatch = useModalDispatch();

  const close = () => {
    dispatch({
      type: REMOVE_ARRAY,
    });
    setDetails({});
    document.body.classList.remove("no-scrolling");
  };

  const toggleOpen = () => {
    // @ts-ignore
    setIsOpen((prev) => setIsOpen(!prev));
  };

  useEffect(() => {
    if (open) document.body.classList.add("no-scrolling");
  }, [open]);

  const next = () => {
    setActive((prev) => {
      // @ts-ignore
      if (prev >= lengthy - 1) {
        return prev;
      } else {
        // @ts-ignore
        return prev + 1;
      }
    });
  };

  const prev = () => {
    setActive((prev) => {
      if (prev === 0) {
        return prev;
      } else {
        // @ts-ignore
        return prev - 1;
      }
    });
  };

  useEffect(() => {
    // @ts-ignore
    setDetails((prev) => {
      let arr;
      // @ts-ignore
      if (lengthy > 0) arr = objectArray.find((el, index) => index === active);
      if (arr) return arr;
      return prev;
    });
  }, [active, lengthy, objectArray]);

  // @ts-ignore
  const keydown = (e) => {
    if (e.key === "Escape") return close();

    if (e.key === "ArrowLeft") return prev();

    if (e.key === "ArrowRight") return next();

    if (e.key === "m" || e.key === "M") return toggleOpen();
  };

  useEffect(() => {
    document.addEventListener("keydown", keydown, false);
    return () => {
      document.removeEventListener("keydown", keydown, false);
    };
  }, []);

  const Arrows = () => {
    return (
      <>
        <span
          className={`${styles.next} ${styles.span}`}
          onClick={next}
          style={{
            // @ts-ignore
            background: active >= lengthy - 1 ? "#3e4c5130" : "#3E4C51",
            // @ts-ignore
            cursor: active >= lengthy - 1 ? "default" : "pointer",
            // @ts-ignore
            color: active >= lengthy - 1 ? "#ffffff50" : "#ffffff",
          }}
        >
          <FaAngleRight className={styles.icon} />
        </span>
        <span
          className={`${styles.prev} ${styles.span}`}
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
    );
  };

  return (
    <div
      className={
        mode === "dark" ? `${styles.modal} ${styles.dark}` : `${styles.modal}`
      }
    >
      <div className={styles.modal__container}>
        <div className={styles.img__container}>
          <span className={`${styles.close} ${styles.span}`} onClick={close}>
            <FaTimes className={styles.icon} />
          </span>
          {project?.id ? (
            <div
              className={
                isOpen && !gallery?.active
                  ? `${styles.project} ${styles.item}`
                  : `${styles.project} ${styles.item} ${styles.wide}`
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
                  : `${styles.projects} ${styles.item} ${styles.wide}`
              }
            >
              <div className={styles.backdrop} onClick={close} />
              <Arrows />
              <div
                className={styles.images}
                style={{
                  width: "100%",
                  overflow: "hidden",
                }}
              >
                <div
                  className={styles.image__showcase}
                  style={{
                    minWidth: 100 * lengthy + "%",
                    // @ts-ignore
                    transform: `translateX(-${(active * 100) / lengthy}%)`,
                  }}
                >
                  {projects.list.map(({ id, src }) => (
                    <article key={id}>
                      <img src={src} alt="" onClick={toggleOpen} />
                    </article>
                  ))}
                </div>
              </div>
            </div>
          ) : gallery?.list.length > 0 ? (
            <div className={`${styles.gallery} ${styles.item} ${styles.open}`}>
              <div className={styles.backdrop} onClick={close} />
              <Arrows />
              <div
                className={styles.images}
                style={{
                  width: "100%",
                  overflow: "hidden",
                }}
              >
                <div
                  className={styles.image__showcase}
                  style={{
                    minWidth: 100 * lengthy + "%",
                    // @ts-ignore
                    transform: `translateX(-${(active * 100) / lengthy}%)`,
                  }}
                >
                  {gallery.list.map((item, index) => (
                    <article key={index}>
                      <img src={item} alt="" />
                    </article>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div></div>
          )}
          {/* @ts-ignore */}
          {!gallery?.list?.length > 0 && (
            <div
              className={
                isOpen
                  ? `${styles.details} ${styles.open} project-info`
                  : `${styles.details} project-info`
              }
            >
              <div className="project-name">
                <h2>{details.name}</h2>
              </div>
              {details.about && <p>{details.about}</p>}
              {details.categories?.length > 0 && (
                <div className="categories-showcase">
                  <div
                    style={{
                      display: "none",
                    }}
                  >
                    {
                      (details.categories = details?.categories?.filter(
                        // @ts-ignore
                        (el) => el !== "All"
                      ))
                    }
                  </div>
                  {/* @ts-ignore */}
                  {details.categories?.map((category, index) => (
                    <span className="category" key={index}>
                      #{category}
                    </span>
                  ))}
                </div>
              )}
              <div className="btns">
                <Link
                  to={`/portfolio/${details.slug}`}
                  className="btn btn-secondary"
                >
                  <span>About</span>
                </Link>
                {details.demo && (
                  <a
                    href={details.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live App
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
