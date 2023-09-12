import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Checkbox from '../assets/checkbox';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom"
import { useState } from 'react';
import { loginAso, useAuthDispatch } from '../context';

const Root = () => {
  const [correoAsociacion, setCorreoAsociacion] = useState("");
  const [contrasena, setContrasena] = useState("");
  const navigate = useNavigate()

  const dispatch = useAuthDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    let payload = {correoAsociacion, contrasena}
    try {
      let response = await loginAso(dispatch, payload)
      if (!response.user) return;
      navigate("/calendar")
    } catch (error) {
      console.log(error)
    }

  }
  return (
    <div>
      <span style={{ left: "20px", top: "10px" }}>EVEN</span>
      <span style={{ color: "#22AAA1", left: "20px", top: "10px" }}>TEC</span>

      <h1 style={{ color: "#FFFFFF", textAlign: "center", top: "40px" }}>
        Iniciar Sesión
      </h1>

      <p style={{ textAlign: "center", color: "#22AAA1", top: "50px" }}>
        Ingresa a la plataforma como asociación
      </p>

      <div class="cuadrado" style={{ margin: "auto", textAlign: "center", top: "80px" }}>
        <Row>
          <Col xs={10} style={{ position: "relative", margin: "auto", top: "30px" }}>
            <Form.Control value={correoAsociacion} onChange={e => setCorreoAsociacion(e.target.value)} type="text" placeholder={"Correo de Asociación"} style={{ textAlign: "center" }}/>
            </Col>
        </Row>
        <br/>
        <Row>
          <Col xs={10} style={{ position: "relative", margin: "auto", top: "30px" }}>
            <Form.Control value={contrasena} onChange={e => setContrasena(e.target.value)} type="text" placeholder={"Contraseña"} style={{ textAlign: "center" }}/>
            </Col>
        </Row>
        <br/>
        <br/>

        <Checkbox/>

        <Button style={{ backgroundColor: "#22AAA1", width: "380px", height: "50px" }} onClick={handleLogin}> Ingresar </Button>
        <br/>
        <br/>

        <span style={{ color: "gray"}}>¿No tienes una cuenta?</span>
        <span> <Link to="/registroAso" style={{ color: "#22AAA1" }}> <u>Regístrate</u></Link> </span>

        <br/>

        <span> <Link to="/loginEstudiante" style={{color: "#22AAA1"}}><u>Iniciar sesión como estudiante</u></Link> </span>
      </div>
    </div>
  )
}

export default Root