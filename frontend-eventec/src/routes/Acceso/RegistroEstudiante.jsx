import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';
import styles from "./acceso.module.css"

const RegistroEstudiante = () => {
  return (
    <div>
      <span className={styles.span} style={{ color: "#FFFFFF", left: "20px", top: "10px" }}>EVEN</span>
      <span className={styles.span} style={{ left: "20px", top: "10px" }}>TEC</span>

      <h1 className={styles.h1}>
        Crear una cuenta
      </h1>

      <p className={styles.p}>
        Regístrate como Estudiante
      </p>

      <div className={styles.cuadrado}>
        <Row>
          <Col xs={10} className={styles.col} style={{ top: "22px" }}>
            <Form.Control type="text" placeholder={"Nombre y Apellidos"} style={{ textAlign: "center" }}/>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col xs={10} className={styles.col} style={{ top: "22px" }}>
            <Form.Control type="text" placeholder={"Correo Institucional"} style={{ textAlign: "center" }}/>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col xs={10} className={styles.col} style={{ top: "22px" }}>
            <Form.Control type="text" placeholder={"Carnet"} style={{ textAlign: "center" }}/>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col xs={10} className={styles.col} style={{ top: "22px" }}>
            <Form.Control type="text" placeholder={"Contraseña"} style={{ textAlign: "center" }}/>
          </Col>
        </Row>
        <br/>
        <br/>

        <Button className={styles.button}> Sign up </Button>
      </div>
    </div>
  )
}

export default RegistroEstudiante