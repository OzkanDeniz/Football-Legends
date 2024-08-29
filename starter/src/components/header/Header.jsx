import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import logo from "../../assets/logo.png"
import Image from "react-bootstrap/Image"

const Header = () => {
  return(
    <Container>
    <Image src={logo} width={200} />
<h1>Football Legends</h1>
  </Container>
    
  ) 
  
}

export default Header
