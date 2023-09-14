import NavbarEventec from "../../components/Navbar/Navbar"
import { Container, Row, Col, Form, Button, Spinner } from "react-bootstrap"
import styles from './FormActividad.module.css'
import { useState, useEffect } from "react"
import { crearActividad, fetchEventosPropios } from "../../acciones/eventos"
import { useNavigate } from "react-router-dom"
import { useAuthState } from "../../context"

const FormActividad = () => {
    const [eventos, setEventos] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const userDetails = useAuthState();
    const navigate = useNavigate();
    const [evento, setEvento] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [horaInicio, setHoraInicio] = useState("")
    const [horaFinal, setHoraFinal] = useState("")
    const [lugar, setLugar] = useState("")

    const setEventosEnPantalla = async (asociacionid) => {
        let data = await fetchEventosPropios({asociacionid: asociacionid});
        setEventos(data.res);
        setIsLoading(false);
    }

    useEffect(() => {
        if (!userDetails.user){
            navigate("/")
            return;
          }
        setEventosEnPantalla((userDetails.user.asociacionid ? userDetails.user.asociacionid : 3))
    }, [userDetails, navigate])

    const handleCrearActividad = async (e) => {
        e.preventDefault();

        if (!evento | !descripcion | !horaInicio | !horaFinal | !lugar) {alert("Todos los datos deben ser rellenados"); return;}
        let payload = {
            evento, descripcion, horaInicio, horaFinal, ubicacion: lugar
        }
        try {
            let res = await crearActividad(payload);
            if (!res) {alert("No se pudo crear la actividad"); return;}
            navigate("/calendar")
        } catch (e) {console.log(e)}
    }

    if (isLoading) return (<Spinner animation="grow" variant="info" />)

  return (
    <>
        <NavbarEventec />
        <Container className={styles.container}>
            <Row>
                <Col>
                    <Form.Group className={styles.formGroup} controlId="Nombre">
                        <Form.Label>Seleccione el evento en el que se realizara la actividad</Form.Label>
                        <Form.Select value={evento} onChange={e => setEvento(e.target.value)} aria-label="Seleccione el evento">
                            {eventos.map((eve, index) => (<option key={index} value={eve.eventoid}>{eve.titulo}</option>))}
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className={styles.formGroup} controlId="timeInit">
                        <Form.Label>Hora Inicio</Form.Label>
                        <Form.Control type="time" value={horaInicio} onChange={e => setHoraInicio(e.target.value)} />
                    </Form.Group>
                    
                    <Form.Group className={styles.formGroup} controlId="lugar">
                        <Form.Label>Lugar</Form.Label>
                        <Form.Control type="text" placeholder="Ingrese el lugar de la actividad" value={lugar} onChange={e => setLugar(e.target.value)} />
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