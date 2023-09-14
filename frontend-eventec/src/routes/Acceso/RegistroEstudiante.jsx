import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { registerEstudiante, useAuthDispatch } from '../../context';
import styles from "./acceso.module.css"
import esCorreoEstudiantec from '../../util';

const RegistroEstudiante = () => {
  const [nombreCompleto, setNombreCompleto] = useState("");
  const [correoInstitucional, setCorreoInstitucional] = useState("");
  const [carnet, setCarnet] = useState("");
  const [contrasena, setContrasena] = useState("");
  const navigate = useNavigate()

  const dispatch = useAuthDispatch();

  const handleRegister = async (e) => {
    e.preventDefault();
    let payload = {nombreCompleto, correoInstitucional, carnet, contrasena}
    try {
      if (!correoInstitucional || !contrasena || !nombreCompleto || !carnet) {alert("Todos los datos deben ser rellenados"); return;}
      if (!esCorreoEstudiantec(correoInstitucional)) {alert("Debe utilizar un correo estudiantil"); return;}


      let response = await registerEstudiante(dispatch, payload)
      if (response.statusCode != 200) {alert("Usuario o contrasena incorrecta!"); return;}
      if (!response.user) return;
      navigate("/calendar")
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
        Regístrate como Estudiante
      </p>

      <div className={styles.cuadrado}>
        <Row>
          <Col xs={10} className={styles.col} style={{ top: "22px" }}>
            <Form.Control value={nombreCompleto} onChange={e => setNombreCompleto(e.target.value)} type="text" placeholder={"Nombre y Apellidos"} style={{ textAlign: "center" }}/>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col xs={10} className={styles.col} style={{ top: "22px" }}>
            <Form.Control value={correoInstitucional} onChange={e => setCorreoInstitucional(e.target.value)} type="text" placeholder={"Correo Institucional"} style={{ textAlign: "center" }}/>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col xs={10} className={styles.col} style={{ top: "22px" }}>
            <Form.Control value={carnet} onChange={e => setCarnet(e.target.value)} type="text" placeholder={"Carnet"} style={{ textAlign: "center" }}/>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col xs={10} className={styles.col} style={{ top: "22px" }}>
            <Form.Control value={contrasena} onChange={e => setContrasena(e.target.value)} type="text" placeholder={"Contraseña"} style={{ textAlign: "center" }}/>
          </Col>
        </Row>
        <br/>
        <br/>

        <Button className={styles.button} onClick={handleRegister}> Sign up </Button>
      </div>
    </div>
  )
}

export default RegistroEstudiante