import NavbarEventec from "../../components/Navbar/Navbar"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import styles from './FormPropuesta.module.css'
import { useState, useEffect } from "react"
import { crearPropuesta } from "../../acciones/eventos"
import { fetchAsociaciones } from "../../acciones/asociaciones"
import { useNavigate } from "react-router-dom"
import { useAuthState } from "../../context"

const FormPropuesta = () => {
    const [asociaciones, setAsociaciones] = useState([])
    const userDetails = useAuthState();
    const navigate = useNavigate();
    const [asociacion, setAsociacion] = useState("")
    const [nombre, setNombre] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [fecha, setFecha] = useState("")
    const [hora, setHora] = useState("")
    const [duracionStr, setDuracion] = useState("")
    const [lugar, setLugar] = useState("")
    const [capacidadStr, setCapacidad] = useState("")
    const [requisitos, setRequisitos] = useState("")

    const setAsociacionesEnPantalla = async () => {
        // let data = await fetchAsociaciones();
        let data = []
        setAsociaciones(data);
    }

    useEffect(() => {
        if (!userDetails.user){
            navigate("/")
            return;
          }
          setAsociacionesEnPantalla()
    }, [userDetails, navigate])

    const handleCrearPropuesta = async (e) => {
        e.preventDefault();
        let duracion = parseInt(duracionStr);
        let capacidad = parseInt(capacidadStr);

        if (isNaN(duracion) | isNaN(capacidad)){
            alert("Duracion y capacidad deben ser valores numericos");
            return;
        }

        if (!nombre || !descripcion || !fecha || !hora || !duracionStr || !capacidadStr || !lugar || !asociacion || !requisitos) {alert("Todos los datos deben ser rellenados"); return;}
        let fechaHora = fecha + " " + hora;
        let payload = {
            nombre, descripcion, fechaHora, duracion, capacidad, lugar, asociacion, creador: userDetails.user.carne, requisitos
        }
        try {
            let res = await crearPropuesta(payload);
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
                        <Form.Label>Seleccione la asociacion a la que le quiere proponer el evento</Form.Label>
                        <Form.Select value={asociacion} onChange={e => setAsociacion(e.target.value)} aria-label="Seleccione la asociacion">
                            {asociaciones.map((eve, index) => (<option key={index}>{eve.nombre}</option>))}
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className={styles.formGroup} controlId="descrpcion">
                        <Form.Label>Descripcion</Form.Label>
                        <Form.Control className={styles.textarea} type="text" placeholder="Ingrese la descripcion" value={descripcion} onChange={e => setDescripcion(e.target.value)} />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className={styles.formGroup} controlId="Nombre">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder="Ingrese el nombre del evento" value={nombre} onChange={e => setNombre(e.target.value)} />
                    </Form.Group>
                    <Form.Group className={styles.formGroup} controlId="date">
                        <Form.Label>Fecha</Form.Label>
                        <Form.Control type="date" value={fecha} onChange={e => setFecha(e.target.value)} />
                    </Form.Group>
                    <Form.Group className={styles.formGroup} controlId="time">
                        <Form.Label>Hora</Form.Label>
                        <Form.Control type="time" value={hora} onChange={e => setHora(e.target.value)} />
                    </Form.Group>
                    
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group className={styles.formGroup} controlId="duracion">
                        <Form.Label>Duracion</Form.Label>
                        <Form.Control type="number" placeholder="Ingrese la duracion del evento en horas" value={duracionStr} onChange={e => setDuracion(e.target.value)} />
                    </Form.Group>
                    <Form.Group className={styles.formGroup} controlId="lugar">
                        <Form.Label>Lugar</Form.Label>
                        <Form.Control type="text" placeholder="Ingrese el lugar del evento" value={lugar} onChange={e => setLugar(e.target.value)} />
                    </Form.Group>
                    <Form.Group className={styles.formGroup} controlId="capacidad">
                        <Form.Label>Capacidad</Form.Label>
                        <Form.Control type="number" placeholder="Ingrese la capacidad de personas" value={capacidadStr} onChange={e => setCapacidad(e.target.value)} />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className={`${styles.formGroup} ${styles.requisitos}`} controlId="Requisitos">
                        <Form.Label>Requisitos</Form.Label>
                        <Form.Control className={styles.textarea} type="text" placeholder="Ingrese los requisitos del evento" value={requisitos} onChange={e => setRequisitos(e.target.value)} />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col className={styles.centerContent}>
                    <Button className={styles.button} onClick={handleCrearPropuesta}>Crear Propuesta</Button>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default FormPropuesta