import * as React from "react";
import * as classnames from "classnames";
import * as Styles from "./Section.pcss";
import Container from "@utils/Container";
type SectionProps = {
  title?: string,
  dark?: boolean
};
const Section: React.SFC<SectionProps> = ({ title, dark, children }) => {
  const classes = classnames({
    [Styles.dark]: dark,
    [Styles.section]: true
  });
  return (
    <div className={classes}>
      {title && <h2 className={Styles.title}>{title}</h2>}
      <Container>{children}</Container>
    </div>
  );
};
Section.defaultProps = {
  title: null,
  dark: false
};
export default Section;