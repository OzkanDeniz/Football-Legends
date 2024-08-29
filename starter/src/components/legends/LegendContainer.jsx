import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { data } from "../../helpers/data";
import Row from "react-bootstrap/Row";
import LegendCard from "./LegendCard";
import Form from 'react-bootstrap/Form';

const LegendContainer = () => {
const [Search,setSearch] = useState("")

const handleChange=(e)=>{
    setSearch(e.target.value)
}

const filteredData = data.filter(legends=> legends.name.toLocaleLowerCase().includes(Search.trim().toLocaleLowerCase()))

  return (
    <>
    <Form.Control type="Search" onChange={(e)=>handleChange(e)} placeholder="Search Legends..." />
    <Container>
      <Row>
        {filteredData.map((legends) => (
          <LegendCard key={legends.id} legends={legends} />
        ))}
      </Row>
    </Container>
    </>
  );
};

export default LegendContainer;
