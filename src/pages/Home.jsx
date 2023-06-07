import {  Navbar, 
          Nav, 
          FlexboxGrid,
          Grid, Row, Col } from "rsuite";
import HomeIcon from '@rsuite/icons/legacy/Home';
import PhoneIcon from '@rsuite/icons/Phone';

export const Home = () => {
  return (
    <>
      <Navbar>
        <FlexboxGrid justify="space-around" align="middle">

          <FlexboxGrid.Item>
            <Navbar.Brand>
              <img src={process.env.PUBLIC_URL + "./img/logo-1.png"} alt="logo" />
            </Navbar.Brand>
          </FlexboxGrid.Item>

          <FlexboxGrid.Item>
            <Nav>
              <Nav.Item icon={<HomeIcon />}>Главная</Nav.Item>
              <Nav.Item icon={<HomeIcon />}>Дома</Nav.Item>
              <Nav.Item icon={<HomeIcon />}>Крыши</Nav.Item>
              <Nav.Item icon={<HomeIcon />}>Облицовка</Nav.Item>
              <Nav.Item icon={<HomeIcon />}>Заборы</Nav.Item>
            </Nav>
          </FlexboxGrid.Item>

          <FlexboxGrid.Item style={{display: 'flex', flexDirection: 'column'}}>
                  <div><PhoneIcon />+ 375-29-809-77-13</div>
                  <div><PhoneIcon />+ 375-33-606-37-05</div>
          </FlexboxGrid.Item>
          
        </FlexboxGrid>
      </Navbar>
    </>
  );
};