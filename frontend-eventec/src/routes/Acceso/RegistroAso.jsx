import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import { registerAso, useAuthDispatch } from '../../context';
import styles from "./acceso.module.css";

const RegistroAso = () => {
  const [nombreAsociacion, setNombreAsociacion] = useState("");
  const [correoAsociacion, setCorreoAsociacion] = useState("");
  const [contrasena, setContrasena] = useState("");
  const navigate = useNavigate()

  const dispatch = useAuthDispatch();

  const handleRegister = async (e) => {
    e.preventDefault();
    let payload = {nombreAsociacion, correoAsociacion, contrasena}
    try {
      let response = await registerAso(dispatch, payload)
      if (!response.user) return;
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }

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
            <Form.Control value={nombreAsociacion} onChange={e => setNombreAsociacion(e.target.value)} type="text" placeholder={"Nombre de Asociación"} style={{ textAlign: "center" }}/>
            </Col>
        </Row>
        <br/>
        <Row>
          <Col xs={10} className={styles.col}>
            <Form.Control value={correoAsociacion} onChange={e => setCorreoAsociacion(e.target.value)} type="text" placeholder={"Correo de Asociación"} style={{ textAlign: "center" }}/>
            </Col>
        </Row>
        <br/>
        <Row>
          <Col xs={10} className={styles.col}>
            <Form.Control value={contrasena} onChange={e => setContrasena(e.target.value)} type="text" placeholder={"Contraseña"} style={{ textAlign: "center" }}/>
            </Col>
        </Row>
        <br/>
        <br/>
        <br/>

        <Button className={styles.button} onClick={handleRegister}> Sign up </Button>
      </div>
    </div>
  )
}

export default RegistroAso