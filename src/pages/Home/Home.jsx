import {Header, Content, Footer, Container} from 'rsuite'

import Navbar from "../../components/Navbar/Navbar";
import Block1 from "../../components/Block1/Block1";
import Block2 from "../../components/Block2/Block2";


export const Home = () => {
  return (
    <Container>
      <Header><Navbar/></Header>
      <Content>
        <Block1/>
        <Block2/>
      </Content>
      <Footer></Footer>
    </ Container>
  );
};