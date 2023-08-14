import { useState } from "react";
import { Link } from 'react-router-dom';

import HomeIcon from '@rsuite/icons/legacy/Home';
import FlexboxGridItem from "rsuite/esm/FlexboxGrid/FlexboxGridItem";
import { 
  Header, 
  Nav,
  Container, 
  Sidebar, 
  Button, 
  Message,  
  Panel,
  Radio,
  Stack, 
  Slider, 
  Toggle,
  Input, 
  Divider, 
  Content, 
  Footer, 
  Checkbox,
  FlexboxGrid } from "rsuite";

function Example() {
  const [type, setType] = useState("warning");
  const [placement, setPlacement] = useState("right");
  const [active, setActive] = useState('home');

  const message = (
    <Message showIcon type={type} closable>
      {type}: The message appears on the {placement}.
    </Message>
  );

  const containerMain = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '100vh',
  }


  const Navbar = ({ active, onSelect, ...props }) => {
    return (
      <Nav {...props} activeKey={active} onSelect={onSelect} style={{ marginBottom: 5 }}>
        <Nav.Item eventKey="home" icon={<HomeIcon />}>
          <Link to="/home">Home</Link>
        </Nav.Item>
        <Nav.Item eventKey="news">News</Nav.Item>
        <Nav.Item eventKey="solutions">Solutions</Nav.Item>
        <Nav.Item eventKey="products">Products</Nav.Item>
        <Nav.Item eventKey="about">About</Nav.Item>
      </Nav>
    );
  };

  const CustomNav = ({ active, onSelect, ...props }) => {
    return (
      <Nav {...props} vertical activeKey={active} onSelect={onSelect} >
        <Nav.Item eventKey="home" icon={<HomeIcon />}>
          <Link to="/home">Home</Link>
        </Nav.Item>
        <Nav.Item eventKey="news">News</Nav.Item>
        <Nav.Item eventKey="solutions">Solutions</Nav.Item>
        <Nav.Item eventKey="products">Products</Nav.Item>
        <Nav.Item eventKey="about">About</Nav.Item>
      </Nav>
    );
  };

  return (
    <div className="App">
      <Container style={containerMain}>
        <Sidebar style={{background: '#469597'}}>
          <CustomNav appearance="subtle" active={active} onSelect={setActive}/>
        </Sidebar>
      <Container>
        <Header style={{background: '#BBC6C8'}}>
          <Navbar appearance='subtle' active={active} onSelect={setActive} />
        </Header>
          <Content style={{ alignItems: 'center', background: '#5BA199', textAlign: 'center', padding: '10px', position: 'relative'}}>
            <Panel bordered style={{border: '1px solid #a4a9b3', height: '100%'}}>
            <FlexboxGrid>
              
              <FlexboxGridItem>
                <h3>Preview</h3>
              </FlexboxGridItem>

              <FlexboxGridItem style={{ width: '100%'}}>
                <Divider style={{backgroundColor: '#999999' }}/>
              </FlexboxGridItem>

              <FlexboxGridItem>
                <Stack direction="row" spacing={20} alignItems="flex-start" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                  <Button appearance="default" bordered>Default</Button>
                  <Button appearance="primary">Primary</Button>
                  <Button appearance="link">Link</Button>
                  <Button appearance="subtle">Subtle</Button>
                  <Button appearance="ghost">Ghost</Button>
                </Stack>
              </FlexboxGridItem>

              <FlexboxGridItem style={{ width: '100%'}}>
                <Divider style={{backgroundColor: '#999999' }}/>
              </FlexboxGridItem>

              <FlexboxGridItem>
                <Stack spacing={20}>
                  Labels: <Input />
                </Stack>
              </FlexboxGridItem>

              <FlexboxGridItem style={{ width: '100%'}}>
                <Divider style={{backgroundColor: '#999999' }}/>
              </FlexboxGridItem>

              <FlexboxGridItem>
                <Checkbox>JavaScript</Checkbox>
                <Checkbox>Css</Checkbox>
                <Checkbox defaultChecked>HTML</Checkbox>
              </FlexboxGridItem>

              <FlexboxGridItem style={{ width: '100%'}}>
                <Divider style={{backgroundColor: '#999999' }}/>
              </FlexboxGridItem>

              <FlexboxGridItem>
                <Radio> Radio</Radio>
                <Radio checked> Checked Radio</Radio>
              </FlexboxGridItem>

              <FlexboxGridItem style={{ width: '100%'}}>
                <Divider style={{backgroundColor: '#999999' }}/>
              </FlexboxGridItem>

              <FlexboxGridItem style={{ flex: 1 }}>
                <Input placeholder="Default Input" />
              </FlexboxGridItem>

              <FlexboxGridItem style={{ width: '100%'}}>
                <Divider style={{backgroundColor: '#999999' }}/>
              </FlexboxGridItem>

              <FlexboxGridItem>
                <Toggle defaultChecked />
              </FlexboxGridItem>

              <FlexboxGridItem style={{ width: '100%'}}>
                <Divider style={{backgroundColor: '#999999' }}/>
              </FlexboxGridItem>

              <FlexboxGridItem style={{ width: '100%'}}>
                <Slider/>
              </FlexboxGridItem>

              <FlexboxGridItem style={{ width: '100%'}}>
                <Divider style={{backgroundColor: '#999999' }}/>
              </FlexboxGridItem>

            </FlexboxGrid>
            </Panel>
          </Content>
          <Footer style={{background: '#BBC6C8'}}><h3>Footer</h3></Footer>
        </Container>
      </Container>
    </div>
  );
}

export default Example;
