import {SectionContent} from "../SectionContent/SectionContent";
import {useRef} from "react";
import {Row, Col} from "antd";

import styles from "./BlockRoof.module.scss"

export const BlockRoof = () => {
  const refAnimation = useRef(null)
  return (
    <div>
      <SectionContent ref={refAnimation} >
        <Row className={styles.roww}>
          <Col className={styles.images}  span={13} >
            <div>
              <img className={styles.img1} src={process.env.PUBLIC_URL + "img/img32.jpg"} alt="img33" />
            </div>
            <div>
              <img className={styles.img2} src={process.env.PUBLIC_URL + "img/2023-06-0610.33.02.jpg"} alt="img30" />
            </div>
          </Col>
          <Col className={styles.desc} span={9} >
            <h1>Text</h1>
          </Col>
        </Row>
      </SectionContent>
    </div>
  )
}