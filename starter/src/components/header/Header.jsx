import React from "react";
import Container from "react-bootstrap/esm/Container";
import logo from "../../assets/logo.png";
import Image from "react-bootstrap/Image";
import headerStyle from "./Header.module.css";

const Header = () => {
  return (
    <Container>
      <Image src={logo} width={200} />
      <h1 className={`${headerStyle.title} my-2`}>Football Legends</h1>
    </Container>
  );
};

export default Header;
