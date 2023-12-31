import React, {useEffect, useRef, useState} from 'react';
import { SectionContent } from "../SectionContent/SectionContent";
import {Row, Col, Image, Typography, Button} from 'antd'

import styles from "./BorderClinkers.module.scss"

export const BorderClinkers = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const refAnimation = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting)
      }, {
        rootMargin: "-20%"
      }, {

      }
    )
    console.log(isIntersecting)
    observer.observe(refAnimation.current)
    return () => observer.disconnect()
  }, [isIntersecting]);

  useEffect(() => {
    if(isIntersecting) {
      const boxes = refAnimation.current.querySelectorAll('img')
      boxes.forEach(box => box.classList.add(`${styles.image_animation}`))
    } else {
      const boxes = refAnimation.current.querySelectorAll('img')
      boxes.forEach(box => box.classList.remove(`${styles.image_animation}`))
    }
  }, [isIntersecting])


  return <div style={{backgroundColor: '#f5f5f5', display: 'block'}}>
    <SectionContent classNamess={styles.wrap} ref={refAnimation}>

            <Row className={styles.roww}>
              <Col className={styles.columnn}  lg={{span: 11}} md={{span: 23}} >
                <Image
                  height={'100%'}
                  width={'100%'}
                  src={process.env.PUBLIC_URL + 'images/img10.jpg'}
                  style={{objectFit: 'cover', objectPosition: '50% 50%', boxShadow: '5px 5px 20px 0 rgba(0,0,0,0.4)'}}
                />
              </Col>

              <Col className={[styles.columnn, styles.column2]} lg={{span: 11}} md={{span: 23}}>
                <h4 className={styles.title}>Заборы</h4>
                <Typography.Text style={{color: '#575757', lineHeight: 1.1}}>
                  Выкладываем заборы из кирпича по вашему дизайну любой сложности.
                </Typography.Text>
                <Button type={'default'} ghost size={'middle'} className={styles.btn1}>
                  <strong>Портфолио</strong>
                </Button>
              </Col>

              <Col className={[styles.columnn, styles.column3]} lg={{span: 11}} md={{span: 23}}>
                <h4 className={styles.title}>Облицовка дома</h4>
                <Typography.Text style={{color: '#575757', lineHeight: 1.1}}>
                  Облицовываем дома, бани и другие строения кирпичами качественно и в срок.
                </Typography.Text>
                <Button type={'default'} ghost size={'middle'}  className={styles.btn1}>
                  <strong>Портфолио</strong>
                </Button>
              </Col>

              <Col className={styles.columnn}  lg={{span: 11}} md={{span: 23}} >
                <Image
                  height={'100%'}
                  width={'100%'}
                  src={process.env.PUBLIC_URL + 'images/img03.jpg'}
                  style={{objectFit: 'cover', objectPosition: '50% 50%', boxShadow: '5px 5px 20px 0 rgba(0,0,0,0.4)'}}
                />
              </Col>
            </Row>

    </SectionContent>
  </div>;
};
