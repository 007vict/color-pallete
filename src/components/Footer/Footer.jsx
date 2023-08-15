import React from 'react';
import {SectionContent} from "../SectionContent/SectionContent";
import {Col, Row} from "antd";

import styles from './Footer.module.scss'
import {TbBrandTelegram} from "react-icons/tb";
import {FaViber} from "react-icons/fa";

export const Footer = () => {
  return (
    <div style={{background: '#000000'}}>
      <SectionContent style={{minHeight: 145, display: 'flex', alignContent: 'center', padding: '10px 0'}}>
        <Row className={styles.roww}>
          <Col lg={6} md={6} className={styles.img_view}>
            <div>
              <img src={process.env.PUBLIC_URL + "/images/logo-1.png"} alt={'logo'}/>
            </div>
          </Col>
          <Col lg={{span: 10}} md={{span: 10, offset: 0}} sm={{span: 16, offset: 4}}>
            <p className={styles.p}>© 2023 Все права зарегистрированы.</p>
            <p style={{paddingBottom: 10}} className={styles.p}>Информация размещенная на сайте не является публичной офертой в соответствии со ст.407 гражданского кодекса РБ и носит справочный характер.</p>
          </Col>
          <Col sm={12} xs={3} className={styles.img_hide}>
            <div>
              <img src={process.env.PUBLIC_URL + "/images/logo-1.png"} alt={'logo'}/>
            </div>
          </Col>
          <Col lg={6} md={8} sm={12} xs={18} style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <div className={styles.phone}>
              <a href="tel:+375-29-809-77-13">
                <TbBrandTelegram size={20} color={'#FFFFFF'}/>
                <FaViber size={20} color={'#FFFFFF'}/>
              <span>
                &nbsp;+375-29-809-77-13
              </span>
              </a>
              <a href="tel:+375-29-606-37-05">
                <TbBrandTelegram size={20} color={'#FFFFFF'}/>
                <FaViber size={20} color={'#FFFFFF'}/>
                <span>
                &nbsp;+375-29-606-37-05
              </span>
              </a>
            </div>
          </Col>
        </Row>
      </SectionContent>
    </div>
  );
};