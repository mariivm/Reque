import React from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom";

function Checkbox() {
  return (
    <Row style={{ position: "relative", left: "30px" }}>
        <Col xs="auto">
        <Form.Check
            type="checkbox"
            label="Recuérdame"
        />
        </Col>
        <Col>
            <p style={{ color: "#22AAA1", left: "10px" }} > <Link to="/foro"><u>Olvidé mi contraseña</u></Link></p>
        </Col>
    </Row>
  )
}

export default Checkbox