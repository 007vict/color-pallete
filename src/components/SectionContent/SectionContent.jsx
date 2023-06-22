import React, { forwardRef } from "react";
import cn from "classnames";
import styles from "./SectionContent.module.scss"

export const SectionContent = forwardRef(({children, style, classNamess}, ref) => {
  return <section ref={ref} style={style} className={cn(styles.wrapper, [classNamess])}>
      {children}
    </section>;
});