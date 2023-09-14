import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Checkbox from '../../components/Checkbox/checkbox';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import { loginAso, useAuthDispatch } from '../../context';
import styles from "./acceso.module.css";
import esCorreoEstudiantec from '../../util';

const Root = () => {
  const [correoAsociacion, setCorreoAsociacion] = useState("");
  const [contrasena, setContrasena] = useState("");
  const navigate = useNavigate()

  const dispatch = useAuthDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    let payload = {correoAsociacion, contrasena}
    try {
      if (!correoAsociacion || !contrasena) {alert("Todos los datos deben ser rellenados"); return;}
      if (!esCorreoEstudiantec(correoAsociacion)) {alert("Debe utilizar un correo estudiantil"); return;}

      let response = await loginAso(dispatch, payload)
      if (response.statusCode == 400) {alert("Usuario o contrasena incorrecta!"); return;}
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
        Iniciar Sesión
      </h1>

      <p className={styles.p}>
        Ingresa a la plataforma como asociación
      </p>

      <div className={styles.cuadrado}>
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

      <Checkbox/>

      <Button className={styles.button} onClick={handleLogin}> Ingresar </Button>
      <br/>
      <br/>

      <span className={styles.span} style={{ color: "gray"}}>¿No tienes una cuenta?</span>
      <span className={styles.span}> <Link to="/registroAso"> <u>Regístrate</u></Link> </span>

      <br/>

      <span className={styles.span}> <Link to="/loginEstudiante"><u>Iniciar sesión como estudiante</u></Link> </span>
      </div>
    </div>
  )
}

export default Root