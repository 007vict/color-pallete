import React from "react";
import { Stack } from "rsuite";
import { Parallax } from "react-scroll-parallax";

import styles from "./BlockMain.module.scss";
import { SectionContent } from "../SectionContent/SectionContent";

const BlockMain = () => {
  return (
    <Parallax speed={-15}>
      <section className={styles.wrapperBlock1}>
        <SectionContent>
          <Stack
            wrap
            direction="column"
            justifyContent="space-evenly"
            alignItems="center"
            style={{
              position: "relative",
              height: "100vh",
              color: "#fff",
            }}
          >
            <Stack.Item style={{ textAlign: "center" }}>
              <h1>
                Строительство загородных домов,
                <br />
                коттеджей в Бресте и <br />
                Бресткой области
              </h1>
            </Stack.Item>
            <Stack.Item style={{ textAlign: "center" }}>
              <h2>
                Наша бригада успешно выполняет работы в сфере строительства
                загородных домов и коттеджей с 2000 года. Мы делаем полный
                ко​мплекс строительных услуг: бетонные, кладочные, кровельные
                работы, работы по утеплению, обустройству фасада.
              </h2>
            </Stack.Item>
          </Stack>
        </SectionContent>
      </section>
    </Parallax>
  );
};

export default BlockMain;
