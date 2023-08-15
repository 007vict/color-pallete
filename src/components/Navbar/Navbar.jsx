import React from "react";

import {
  Navbar,
  Nav,
  FlexboxGrid,
  Affix,
  Drawer,
  ButtonToolbar,
  IconButton
} from "rsuite";

import PhoneIcon from "@rsuite/icons/Phone";
import HomeIcon from "@rsuite/icons/legacy/Home";
import Burger from "../../components/UI/Burger/Burger";
import AlignJustifyIcon from '@rsuite/icons/legacy/AlignJustify';

import styles from "./Navbar.module.scss";

export const NavbarMain = () => {
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState("home");

  const styleSocialImg = {
    width: "20px",
    height: "20px",
  };

  return (
    <Affix>
      <Navbar
        style={{
          color: "#ffffff",
          backgroundColor: "#333333",
          padding: "15px 0",
          display: "block"
        }}
      >
        <FlexboxGrid justify="space-around" align="middle">
          <FlexboxGrid.Item>
            <Navbar.Brand
              style={{
                display: "flex",
                justifyContent: "center",
                ailignItems: "center",
              }}
            >
              <img
                src={process.env.PUBLIC_URL + "./img/logo-1.png"}
                alt="logo"
              />
            </Navbar.Brand>
          </FlexboxGrid.Item>

          <FlexboxGrid.Item className={styles.navbar__horinzotalShow}>
            <Nav vertical>
              <Nav.Item href={'/'} icon={<HomeIcon />}>Главная</Nav.Item>
              <Nav.Item href={'house'} icon={<HomeIcon />}>Дома</Nav.Item>
              <Nav.Item icon={<HomeIcon />}>Крыши</Nav.Item>
              <Nav.Item icon={<HomeIcon />}>Облицовка</Nav.Item>
              <Nav.Item icon={<HomeIcon />}>Заборы</Nav.Item>
            </Nav>
          </FlexboxGrid.Item>

          <FlexboxGrid.Item
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div>
              <PhoneIcon />+ 375-29-809-77-13
              <img
                src={process.env.PUBLIC_URL + "./img/Viber.png"}
                alt="Viber"
                style={styleSocialImg}
              />
            </div>
            <div>
              <PhoneIcon />+ 375-33-606-37-05
              <img
                src={process.env.PUBLIC_URL + "./img/Telegram.png"}
                alt="Telegram"
                style={styleSocialImg}
              />
            </div>
          </FlexboxGrid.Item>

          <FlexboxGrid.Item className={styles.navbar__verticalShow}>

            <ButtonToolbar>
              <IconButton icon={<AlignJustifyIcon  onClick={() => setOpen(true)} />} />
            </ButtonToolbar>

            <Drawer
              open={open}
              onClose={() => setOpen(false)}
              size={"xs"}
              placement={"left"}
            >
              <Drawer.Body
                style={{ backgroundColor: "#000000", color: "#ffffff" }}
              >
                <Burger vertical active={active} onSelect={setActive} />
              </Drawer.Body>
            </Drawer>
          </FlexboxGrid.Item>

        </FlexboxGrid>
      </Navbar>
    </Affix>
  );
};