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
          <Col className={styles.images} lg={13} md={24} >
            <div>
              <img className={styles.img1} src={process.env.PUBLIC_URL + "img/img32.jpg"} alt="img33" />
            </div>
            <div>
              <img className={styles.img2} src={process.env.PUBLIC_URL + "img/2023-06-0610.33.02.jpg"} alt="img30" />
            </div>
          </Col>
          <Col className={styles.desc} lg={9} md={24}>
            <h4>Крыша</h4>
            <p style={{fontSize: 14}}>Построим вашу крышу любой сложности - двухскатную, ломанную и другие виды.</p>
            <Button type={'default'} ghost size={'middle'} className={styles.btn1}>
              <strong>Портфолио</strong>
            </Button>
          </Col>
        </Row>
      </SectionContent>
    </div>
  )
}