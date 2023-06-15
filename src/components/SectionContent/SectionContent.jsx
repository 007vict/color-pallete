import React from "react";
import cn from "classnames";
import styles from "./SectionContent.module.scss"

export const SectionContent = ({children, style, classNamess}) => {
  return <section style={style} className={cn(styles.wrapper, [classNamess])}>
      {children}
    </section>;
};
