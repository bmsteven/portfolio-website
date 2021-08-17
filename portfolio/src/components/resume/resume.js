const ResumeTemplate = ({ title, classname, children }) => {
  return (
    <section className={`resume-template ${classname}`}>
      <h2 className={`${classname}-header tertiary-header`}>
        <div></div>
        <span className="span"></span>
        <span className="title">{title}</span>
      </h2>
      {children}
    </section>
  )
}

export default ResumeTemplate
