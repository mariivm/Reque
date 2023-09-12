import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';
import styles from "./acceso.module.css"

const RegistroAso = () => {
  return (
    <div>
      <span className={styles.span} style={{ color: "#FFFFFF", left: "20px", top: "10px" }}>EVEN</span>
      <span className={styles.span} style={{ left: "20px", top: "10px" }}>TEC</span>

      <h1 className={styles.h1}>
        Crear una cuenta
      </h1>

      <p className={styles.p}>
        Regístrate como Asociación
      </p>

      <div className={styles.cuadrado}>
        <Row>
          <Col xs={10} className={styles.col}>
            <Form.Control type="text" placeholder={"Nombre de Asociación"} style={{ textAlign: "center" }}/>
            </Col>
        </Row>
        <br/>
        <Row>
          <Col xs={10} className={styles.col}>
            <Form.Control type="text" placeholder={"Correo de Asociación"} style={{ textAlign: "center" }}/>
            </Col>
        </Row>
        <br/>
        <Row>
          <Col xs={10} className={styles.col}>
            <Form.Control type="text" placeholder={"Contraseña"} style={{ textAlign: "center" }}/>
            </Col>
        </Row>
        <br/>
        <br/>
        <br/>

        <Button className={styles.button}> Sign up </Button>
      </div>
    </div>
  )
}

export default RegistroAso