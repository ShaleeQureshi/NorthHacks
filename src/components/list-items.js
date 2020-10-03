import React from "react";
import { Col } from "react-bootstrap";

/* Props in this component 
- customclass
- srcfile
- srcalt
- header
- subtitle
- listelements
*/

const ListItems = (props) => {
  return (
    <Col lg={4} className={`list-items  text-center ${props.customclass}`}>
      <img src={props.srcfile} alt={props.srcalt} />
      <h4>{props.header}</h4>
      <p>{props.subtitle}</p>
      {props.listelements}
    </Col>
  );
};
export default ListItems;
