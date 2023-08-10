import {Header, Content, Container} from 'rsuite'


import {NavbarMain, BlockMain, BlockHouse, BorderClinkers, BlockRoof, Footer} from './../../components/index'

export const Home = () => {
  return (
    <Container>
      <Header><NavbarMain/></Header>
      <Content>
        <BlockMain/>
        <BlockHouse/>
        <BorderClinkers />
        <BlockRoof />
      </Content>
      <Footer />
    </ Container>
  );
};