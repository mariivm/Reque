import React from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

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
            <p style={{ color: "#22AAA1", left: "10px" }} > <u>Olvidé mi contraseña</u></p>
        </Col>
    </Row>
  )
}

export default Checkbox