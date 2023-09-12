import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom"

const registroEstudiante = () => {
  return (
    <div>
      <span style={{ left: "20px", top: "10px" }}>EVEN</span>
      <span style={{ color: "#22AAA1", left: "20px", top: "10px" }}>TEC</span>

      <h1 style={{ color: "#FFFFFF", textAlign: "center", top: "40px" }}>
        Crear una cuenta
      </h1>

      <p style={{ textAlign: "center", color: "#22AAA1", top: "50px" }}>
        Regístrate como Estudiante
      </p>

      <div class="cuadrado" style={{ margin: "auto", textAlign: "center", top: "80px" }}>
        <Row>
          <Col xs={10} style={{ position: "relative", margin: "auto", top: "22px" }}>
            <Form.Control type="text" placeholder={"Nombre y Apellidos"} style={{ textAlign: "center" }}/>
            </Col>
        </Row>
        <br/>
        <Row>
          <Col xs={10} style={{ position: "relative", margin: "auto", top: "22px" }}>
            <Form.Control type="text" placeholder={"Correo Institucional"} style={{ textAlign: "center" }}/>
            </Col>
        </Row>
        <br/>
        <Row>
          <Col xs={10} style={{ position: "relative", margin: "auto", top: "22px" }}>
            <Form.Control type="text" placeholder={"Carnet"} style={{ textAlign: "center" }}/>
            </Col>
        </Row>
        <br/>
        <Row>
          <Col xs={10} style={{ position: "relative", margin: "auto", top: "22px" }}>
            <Form.Control type="text" placeholder={"Contraseña"} style={{ textAlign: "center" }}/>
            </Col>
        </Row>
        <br/>
        <br/>

        <Button style={{ backgroundColor: "#22AAA1", width: "380px", height: "50px" }}> Sign up </Button>
      </div>
    </div>
  )
}

export default registroEstudiante