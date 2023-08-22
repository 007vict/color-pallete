import React from 'react';

import styles from './Navbar_ants.module.scss'
import {Menu, Layout} from "antd";
import {TbBrandTelegram} from "react-icons/tb";
import {FaViber} from "react-icons/fa";
import {RiHomeOfficeLine} from "react-icons/ri";
const { Header } = Layout;

export const NavbarAntd = () => {
  return (
    <Header className={styles.header}>
      <div className={styles.logo}></div>
      <Menu theme={'dark'} mode={'horizontal'} defaultSelectedKeys={['Main']} style={{ flex: "auto", minWidth: 0, justifyContent: 'center' }}>
        <Menu.Item key="Main" icon={<RiHomeOfficeLine />}>Главная</Menu.Item>
        <Menu.Item key="House" icon={<RiHomeOfficeLine />}>Дома</Menu.Item>
        <Menu.Item key="Roof" icon={<RiHomeOfficeLine />}>Крыши</Menu.Item>
        <Menu.Item key="Clinker" icon={<RiHomeOfficeLine />}>Облицовка</Menu.Item>
        <Menu.Item key="Border" icon={<RiHomeOfficeLine />}>Заборы</Menu.Item>
      </Menu>
      <div>
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
      </div>
    </Header>
  );
};