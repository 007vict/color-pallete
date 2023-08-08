import React, {useEffect, useRef, useState} from 'react';
import { SectionContent } from "../SectionContent/SectionContent";
import {Row, Col, Image, Typography, Button} from 'antd'

import styles from "./BorderClinkers.module.scss"

// eslint-disable-next-line no-unused-vars
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
                  src={process.env.PUBLIC_URL + 'img/img10.jpg'}
                  style={{objectFit: 'cover', objectPosition: '50% 50%', boxShadow: '5px 5px 20px 0 rgba(0,0,0,0.4)'}}
                />
              </Col>

              <Col className={[styles.columnn, styles.column2]} lg={{span: 11}} md={{span: 23}}>
                <Typography.Title className={styles.title}>Заборы</Typography.Title>
                <Typography.Text>
                  Выкладываем заборы из кирпича по вашему дизайну любой сложности.
                </Typography.Text>
                <Button type={'default'} ghost size={'large'} className={styles.btn1}>
                  <strong>Портфолио</strong>
                </Button>
              </Col>

              <Col className={[styles.columnn, styles.column3]} lg={{span: 11}} md={{span: 23}}>
                <Typography.Title className={styles.title}>Облицовка дома</Typography.Title>
                <Typography.Text>
                  Облицовываем дома, бани и другие строения кирпичами качественно и в срок.
                </Typography.Text>
                <Button type={'default'} ghost size={'large'}  className={styles.btn1}>
                  <strong>Портфолио</strong>
                </Button>
              </Col>

              <Col className={styles.columnn}  lg={{span: 11}} md={{span: 23}} >
                <Image
                  height={'100%'}
                  width={'100%'}
                  src={process.env.PUBLIC_URL + 'img/img03.jpg'}
                  style={{objectFit: 'cover', objectPosition: '50% 50%', boxShadow: '5px 5px 20px 0 rgba(0,0,0,0.4)'}}
                />
              </Col>
            </Row>

    </SectionContent>
  </div>;
};

// export BorderClinkers;
