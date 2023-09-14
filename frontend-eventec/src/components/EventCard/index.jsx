import { Container, Row, Col, Button, Accordion } from 'react-bootstrap'
import styles from "./EventCard.module.css"
import { useAuthState } from '../../context'
import { useState } from 'react'
import { crearInscripcion } from '../../acciones/eventos'

// eslint-disable-next-line react/prop-types
const EventCard = ({eventoid, nombre, lugar, duracion, personasInscritas, cupos, fecha, descripcion, estaInscrito, esAsocia, actividades}) => {
    const userDetails = useAuthState()
    const [seInscribio, setSeInscribio] = useState(false);

    const handleCrearInscripcion = async (e) => {
        e.preventDefault();
        let payload = {
            eventoid, carnet: (userDetails.user.carnet ? userDetails.user.carnet : 3)
        }
        try {
            let res = await crearInscripcion(payload);
            if (!res || res.statusCode == 400) {alert("No se realizar la inscripcion"); return;}
            setSeInscribio(true);
        } catch (e) {console.log(e)}

    }
    
    return (
    <Container className={styles.container}>
        <Row>
            <Col><h2>{nombre}</h2></Col>
            <Col lg={2} className={`justify-content-end ${styles.cupos}`}><span> Capacidad: {personasInscritas}/{cupos}</span></Col>
        </Row>
        <Row>
            <Col className={styles.features}>
                <p>Fecha: {fecha}</p>
                <p>Lugar: {lugar}</p>
                <p>Duracion: {duracion}</p>
                <p>Fecha: {fecha}</p>
            </Col>
            <Col className={styles.descripcion}>
                <h3>Descripcion: </h3>
                <p>{descripcion}</p>
            </Col>
        </Row>
        <Row>
            {actividades && actividades.length > 0 ? <h4>Cronograma</h4>: null}
            <Accordion flush>
                {actividades ? actividades.map((act, index) => (
                    <Accordion.Item key={index} eventKey={index}>
                        <Accordion.Header>{act.descrip}</Accordion.Header>
                        <Accordion.Body className={styles.accordionBody}>
                            <Container>
                                <Row>
                                    <Col>
                                        <p>Hora Inicio: {act.horainicio.slice(16, 22)}</p>
                                        <p>Hora Final: {act.horafinal.slice(16, 22)}</p>
                                        <p>Lugar: {act.ubicacion}</p>
                                    </Col>
                                    <Col>
                                        <p>Capacidad: {act.capacidad ? act.capacidad : 'N/A'}</p>
                                        <p>Recursos Necesarios: {act.recursosnecesarios ? act.recursosnecesarios : 'N/A'}</p>
                                    </Col>
                                </Row>
                            </Container>
                        </Accordion.Body>
                    </Accordion.Item>
                )) : null}
            </Accordion>
        </Row>
        {(!estaInscrito && !esAsocia && (cupos!==personasInscritas) && !seInscribio)  ?
            (<Row>
                <Button className={styles.button} onClick={handleCrearInscripcion}>
                    Inscribirse
                </Button>
            </Row>) : (<p></p>)
        }
    </Container>
  )
}

export default EventCard