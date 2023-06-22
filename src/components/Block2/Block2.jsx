import React, {useEffect, useState, useRef} from "react";
import { Button, Container, Stack } from "rsuite";
import { SectionContent } from "../SectionContent/SectionContent";

import styles from "./Block2.module.scss"
import cn from "classnames"

const ImageBlock2 = () => {
  return (
    <div>
      <img className={cn(styles.imgBlock2)} 
                        src={process.env.PUBLIC_URL + "/img/homeBlock2.jpeg"} 
                        alt="Home" />
    </div>
  )
}

const DescriptionBlock2 = () => {
  return (
    <React.Fragment>
      <Stack wrap
        className={styles.descriptionBlock2}
        alignItems="flex-start"
        direction="column"
        justifyContent="space-around"
        id={styles.mobile}
      >
        <h2>Коттеджи и дома</h2>
        <p>Мы строим дома и коттеджи или выполним отдельные строительные работы по заливке фундаментов, возведению стен и кровли, отделке фасадов из различных материалов..</p>
        <Button size="lg" appearance="ghost" id={styles.btn}>Порфолио</Button>
      </Stack>
    </React.Fragment>
  )
}

const Block2 = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: "-50%" }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [isIntersecting]);

  useEffect(() => {
    if (isIntersecting) {
      ref.current.querySelector(`img`).classList.add(`${styles.slidein}`);
    } else {
      ref.current.querySelector(`img`).classList.remove(`${styles.slidein}`);
    }
  }, [isIntersecting]);


  return (
    <Container className={styles.wrapper}>
      <SectionContent ref={ref}>
        <ImageBlock2/>
        <DescriptionBlock2/>
      </SectionContent>
    </Container>
  )
};
 export default Block2