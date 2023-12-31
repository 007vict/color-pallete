import {SectionContent} from "../SectionContent/SectionContent";
import React, {useRef} from "react";
import {Row, Col, Button} from "antd";

import styles from "./BlockRoof.module.scss"

export const BlockRoof = () => {
  const refAnimation = useRef(null)
  return (
    <div>
      <SectionContent style={{display: 'flex'}} ref={refAnimation} >
        <Row className={styles.roww}>
          <Col className={styles.images} lg={13} md={24} >
            <div>
              <img className={styles.img1} src={process.env.PUBLIC_URL + "images/img32.jpg"} alt="img32" />
            </div>
            <div>
              <img className={styles.img2} src={process.env.PUBLIC_URL + "images/2023-06-0610.33.02.jpg"} alt="img33.02" />
            </div>
          </Col>
          <Col className={styles.desc} lg={9} md={24}>
            <h4>Крыша</h4>
            <p>Построим вашу крышу любой сложности - двухскатную, ломанную и другие виды.</p>
            <Button type={'default'} ghost size={'middle'} className={styles.btn1}>
              <strong>Портфолио</strong>
            </Button>
          </Col>
        </Row>
      </SectionContent>
    </div>
  )
}