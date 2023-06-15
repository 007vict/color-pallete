import React from "react";
import { Button, Container, Stack } from "rsuite";
import { SectionContent } from "../SectionContent/SectionContent";

import styles from "./Block2.module.scss"

const ImageBlock2 = () => {
  return (
    <React.Fragment>
      <img className={styles.imgBlock2} src={process.env.PUBLIC_URL + "/img/homeBlock2.jpeg"} alt="Home" />
    </React.Fragment>
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
  return (
    <Container className={styles.wrapper}>
      <SectionContent>
        <ImageBlock2/>
        <DescriptionBlock2/>
      </SectionContent>
    </Container>
  )
};
 export default Block2