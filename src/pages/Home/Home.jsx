import {Header, Content, Footer, Container} from 'rsuite'

import Navbar from "../../components/Navbar/Navbar";
import BlockMain from "../../components/BlockMain/BlockMain";
import BlockHouse from "../../components/BlockHouse/BlockHouse";
import {BorderClinkers} from '../../components/BlockBorderClinker/BorderClinkers';
import {BlockRoof} from "../../components/BlockRoof/BlockRoof";

export const Home = () => {
  return (
    <Container>
      <Header><Navbar/></Header>
      <Content>
        <BlockMain/>
        <BlockHouse/>
        <BorderClinkers />
        <BlockRoof />
      </Content>
      <Footer> </Footer>
    </ Container>
  );
};