import {SectionContent} from "../SectionContent/SectionContent";
import React, {useRef} from "react";
import {Row, Col, Button} from "antd";

import styles from "./BlockRoof.module.scss"

export const BlockRoof = () => {
  const refAnimation = useRef(null)
  return (
    <div>
      <SectionContent ref={refAnimation} >
        <Row className={styles.roww}>
          <Col className={styles.images} span={13} >
            <div>
              <img className={styles.img1} src={process.env.PUBLIC_URL + "img/img32.jpg"} alt="img32" />
            </div>
            <div>
              <img className={styles.img2} src={process.env.PUBLIC_URL + "img/2023-06-0610.33.02.jpg"} alt="img30" />
            </div>
          </Col>
          <Col className={styles.desc} span={9} >
            <h2>Крыша</h2>
            <p>Построим вашу крышу любой сложности - двухскатную, ломанную и другие виды.</p>
            <Button type={'default'} ghost size={'large'} className={styles.btn1} style={{border: "2px solid #000000", color: "#000000"}}>
              <strong>Портфолио</strong>
            </Button>
          </Col>
        </Row>
      </SectionContent>
    </div>
  )
}