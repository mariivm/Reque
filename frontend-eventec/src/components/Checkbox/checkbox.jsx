import React from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom";
import styles from "./checkbox.module.css"

function Checkbox() {
  return (
    <Row className={styles.row}>
        <Col xs="auto">
        <Form.Check
            type="checkbox"
            label="Recuérdame"
        />
        </Col>
        <Col>
            <p className={styles.p} style={{ left: "10px" }} > <Link to="/colaboradores"><u>Olvidé mi contraseña</u></Link></p>
        </Col>
    </Row>
  )
}

export default Checkbox