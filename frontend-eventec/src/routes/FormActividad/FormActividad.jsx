import NavbarEventec from "../../components/Navbar/Navbar"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import styles from './FormActividad.module.css'
import { useState, useEffect } from "react"
import { crearActividad } from "../../acciones/eventos"
import { useNavigate } from "react-router-dom"
import { useAuthState } from "../../context"

const FormActividad = () => {
    const [eventos, setEventos] = useState([])
    const userDetails = useAuthState();
    const navigate = useNavigate();
    const [evento, setEvento] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [horaInicio, setHoraInicio] = useState("")
    const [horaFinal, setHoraFinal] = useState("")
    const [lugar, setLugar] = useState("")
    const [capacidadStr, setCapacidad] = useState("")

    const setEventosEnPantalla = async (asociacion) => {
            // let data = await fetchEventosInscritos(userDetails.user.carne);
        let data = []
        setEventos(data);
    }

    useEffect(() => {
        if (!userDetails.user){
            navigate("/")
            return;
          }
        setEventosEnPantalla(userDetails.user.asociacionid)
    }, [])

    const handleCrearActividad = async (e) => {
        e.preventDefault();
        let capacidad = parseInt(capacidadStr);

        if (isNaN(capacidad)){
            alert("La capacidad debe ser un valor numerico");
            return;
        }

        if (!evento | !descripcion | !horaInicio | !horaFinal | !capacidadStr | !lugar) {alert("Todos los datos deben ser rellenados")}
        let payload = {
            evento, descripcion, horaInicio, horaFinal, capacidad, lugar, asociacionID: (userDetails.user.asociacionID)
        }
        try {
            let res = await crearActividad(payload);
            if (!res) {alert("No se pudo crear el evento"); return;}
            navigate("/calendar")
        } catch (e) {console.log(e)}
    }


  return (
    <>
        <NavbarEventec />
        <Container className={styles.container}>
            <Row>
                <Col>
                    <Form.Group className={styles.formGroup} controlId="Nombre">
                        <Form.Label>Seleccione el evento en el que se realizara la actividad</Form.Label>
                        <Form.Select value={evento} onChange={e => setEvento(e.target.value)} aria-label="Seleccione la carrera">
                            {eventos.map((eve, index) => (<option key={index}>{eve.nombre}</option>))}
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className={styles.formGroup} controlId="timeInit">
                        <Form.Label>Hora Inicio</Form.Label>
                        <Form.Control type="time" value={horaInicio} onChange={e => setHoraInicio(e.target.value)} />
                    </Form.Group>
                    
                    <Form.Group className={styles.formGroup} controlId="capacidad">
                        <Form.Label>Capacidad</Form.Label>
                        <Form.Control type="number" placeholder="Ingrese la capacidad de personas" value={capacidadStr} onChange={e => setCapacidad(e.target.value)} />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className={styles.formGroup} controlId="descrpcion">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control className={styles.textarea} type="text" placeholder="Ingrese la actividad" value={descripcion} onChange={e => setDescripcion(e.target.value)} />
                    </Form.Group>
                    <Form.Group className={styles.formGroup} controlId="timeFinal">
                        <Form.Label>Hora Final</Form.Label>
                        <Form.Control type="time" value={horaFinal} onChange={e => setHoraFinal(e.target.value)} />
                    </Form.Group>
                    <Form.Group className={styles.formGroup} controlId="lugar">
                        <Form.Label>Lugar</Form.Label>
                        <Form.Control type="text" placeholder="Ingrese el lugar de la actividad" value={lugar} onChange={e => setLugar(e.target.value)} />
                    </Form.Group>
                </Col>
            </Row>
            <Row>

                <Col className={styles.centerContent}>
                    <Button className={styles.button} onClick={handleCrearActividad}>Programar Actividad</Button>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default FormActividad