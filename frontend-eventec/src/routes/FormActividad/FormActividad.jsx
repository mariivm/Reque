import NavbarEventec from "../../components/Navbar/Navbar"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import styles from './FormEvento.module.css'
import { useState, useEffect } from "react"
import { crearActividad } from "../../acciones/eventos"
import { useNavigate } from "react-router-dom"
import { useAuthState } from "../../context"

const FormActividad = () => {
    const [eventos, setEventos] = useState([])
    const userDetails = useAuthState();
    const navigate = useNavigate();
    const [nombre, setNombre] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [fecha, setFecha] = useState("")
    const [hora, setHora] = useState("")
    const [duracionStr, setDuracion] = useState("")
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
        let duracion = parseInt(duracionStr);
        let capacidad = parseInt(capacidadStr);

        if (isNaN(duracion) | isNaN(capacidad)){
            alert("Duracion y capacidad deben ser valores numericos");
            return;
        }

        if (!nombre | !descripcion | !fecha | !hora | !duracionStr | !capacidadStr | !lugar) {alert("Todos los datos deben ser rellenados")}
        let fechaHora = fecha + " " + hora;
        let payload = {
            nombre, descripcion, fechaHora, duracion, capacidad, lugar, asociacionID: (userDetails.user.asociacionID)
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
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder="Ingrese el nombre del evento" value={nombre} onChange={e => setNombre(e.target.value)} />
                    </Form.Group>
                    <Form.Group className={styles.formGroup} controlId="descrpcion">
                        <Form.Label>Descripcion</Form.Label>
                        <Form.Control className={styles.textarea} type="text" placeholder="Ingrese la descripcion" value={descripcion} onChange={e => setDescripcion(e.target.value)} />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className={styles.formGroup} controlId="date">
                        <Form.Label>Fecha</Form.Label>
                        <Form.Control type="date" value={fecha} onChange={e => setFecha(e.target.value)} />
                    </Form.Group>
                    <Form.Group className={styles.formGroup} controlId="time">
                        <Form.Label>Hora</Form.Label>
                        <Form.Control type="time" value={hora} onChange={e => setHora(e.target.value)} />
                    </Form.Group>
                    <Form.Group className={styles.formGroup} controlId="duracion">
                        <Form.Label>Duracion</Form.Label>
                        <Form.Control type="number" placeholder="Ingrese la duracion del evento en horas" value={duracionStr} onChange={e => setDuracion(e.target.value)} />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group className={styles.formGroup} controlId="lugar">
                        <Form.Label>Lugar</Form.Label>
                        <Form.Control type="text" placeholder="Ingrese el lugar del evento" value={lugar} onChange={e => setLugar(e.target.value)} />
                    </Form.Group>
                    <Form.Group className={styles.formGroup} controlId="capacidad">
                        <Form.Label>Capacidad</Form.Label>
                        <Form.Control type="number" placeholder="Ingrese la capacidad de personas" value={capacidadStr} onChange={e => setCapacidad(e.target.value)} />
                    </Form.Group>
                </Col>
                <Col className={styles.centerContent}>
                    <Button className={styles.button} onClick={handleCrearActividad}>Crear Evento</Button>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default FormActividad