import React from "react";
import styles from "./Section.module.scss"

export const Section = ({children, style}) => {
  return <section style={style} className={styles.wrapper}>
      {children}
    </section>;
};
