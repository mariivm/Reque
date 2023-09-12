import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Checkbox from '../assets/checkbox';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom"

const LoginEstudiante = () => {
  return (
    <div>
      <span style={{ left: "20px", top: "10px" }}>EVEN</span>
      <span style={{ color: "#22AAA1", left: "20px", top: "10px" }}>TEC</span>

      <h1 style={{ color: "#FFFFFF", textAlign: "center", top: "40px" }}>
        Iniciar Sesión
      </h1>

      <p style={{ textAlign: "center", color: "#22AAA1", top: "50px" }}>
        Ingresa a la plataforma como estudiante
      </p>

      <div class="cuadrado" style={{ margin: "auto", textAlign: "center", top: "80px", height: "320px" }}>
        <Row>
          <Col xs={10} style={{ position: "relative", margin: "auto", top: "30px" }}>
            <Form.Control type="text" placeholder={"Correo Institucional"} style={{ textAlign: "center" }}/>
            </Col>
        </Row>
        <br/>
        <Row>
          <Col xs={10} style={{ position: "relative", margin: "auto", top: "30px" }}>
            <Form.Control type="text" placeholder={"Contraseña"} style={{ textAlign: "center" }}/>
            </Col>
        </Row>
        <br/>
        <br/>

        <Checkbox/>

        <Button style={{ backgroundColor: "#22AAA1", width: "380px", height: "50px" }}> Ingresar </Button>
        <br/>
        <br/>

        <span style={{ color: "gray"}}>¿No tienes una cuenta?</span>
        <span> <Link to="/registroEstudiante" style={{ color: "#22AAA1" }}> <u>Regístrate</u> </Link> </span>
      </div>
    </div>
  )
}

export default LoginEstudiante