import { FC, ReactNode } from "react";

interface ResumeTemplateProps {
  title: string;
  classname: string;
  children: ReactNode;
}

const ResumeTemplate: FC<ResumeTemplateProps> = ({
  title,
  classname,
  children,
}) => {
  return (
    <section className={`resume-template ${classname}`}>
      <h2 className={`${classname}-header tertiary-header`}>
        <div></div>
        <span className="span"></span>
        <span className="title">{title}</span>
      </h2>
      {children}
    </section>
  );
};

export default ResumeTemplate;
