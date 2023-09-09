import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Checkbox from '../assets/checkbox';

const root = () => {
  return (
    <div>
      <span style={{ left: "20px", top: "10px" }}>EVEN</span>
      <span style={{ color: "#22AAA1", left: "20px", top: "10px" }}>TEC</span>

      <h1 style={{ textAlign: "center", top: "40px" }}>
        Iniciar Sesión
      </h1>
      <p style={{ textAlign: "center", color: "#22AAA1", top: "50px" }}>
        Ingresa a la plataforma como asociación
      </p>
      <div class="cuadrado" style={{ margin: "auto", textAlign: "center", top: "80px" }}>
        <Row>
          <Col xs={10} style={{ position: "relative", margin: "auto", top: "30px" }}>
            <Form.Control type="text" placeholder={"Correo de Asociación"} style={{ textAlign: "center" }}/>
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
      </div>
    </div>
  )
}

export default root