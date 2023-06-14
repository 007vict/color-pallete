import React from 'react'
import {
    Nav
  } from "rsuite";

const Burger = ({active, onSelect, ...props}) => {
  
  return (
    <Nav {...props} activeKey={active} onSelect={onSelect} >
      <Nav.Item style={{display: "block", width: "100%"}} eventKey="main" >Главная</Nav.Item>
      <Nav.Item style={{display: "block", width: "100%"}} eventKey="home" >Дома</Nav.Item>
      <Nav.Item style={{display: "block", width: "100%"}} eventKey="roof" >Крыши</Nav.Item>
      <Nav.Item style={{display: "block", width: "100%"}} eventKey="clinkers" >Облицовка</Nav.Item>
      <Nav.Item style={{display: "block", width: "100%"}} eventKey="border" >Заборы</Nav.Item>
    </Nav>
  )
}

export default Burger 