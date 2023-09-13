import { Container, Row, Col, Button, Accordion } from 'react-bootstrap'
import styles from "./EventCard.module.css"

// eslint-disable-next-line react/prop-types
const EventCard = ({nombre, lugar, duracion, personasInscritas, cupos, fecha, descripcion, estaInscrito, esAsocia, actividades}) => {
  return (
    <Container className={styles.container}>
        <Row>
            <Col><h2>{nombre}</h2></Col>
            <Col lg={2} className={`justify-content-end ${styles.cupos}`}><span> Cupos: {personasInscritas}/{cupos}</span></Col>
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
            <h4>Cronograma</h4>
            <Accordion flush>
                {actividades ? actividades.map((act, index) => (
                    <Accordion.Item key={index} eventKey={index}>
                        <Accordion.Header>{act.descripcion}</Accordion.Header>
                        <Accordion.Body className={styles.accordionBody}>
                            <Container>
                                <Row>
                                    <Col>
                                        <p>Hora Inicio: {act.horainicio}</p>
                                        <p>Hora Final: {act.horafinal}</p>
                                        <p>Lugar: {act.ubicacion}</p>
                                    </Col>
                                    <Col>
                                        <p>Capacidad: {act.capacidad}</p>
                                        <p>Recursos Necesarios: {act.recursosnecesarios}</p>
                                    </Col>
                                </Row>
                            </Container>
                        </Accordion.Body>
                    </Accordion.Item>
                )) : null}
            </Accordion>
        </Row>
        {(!estaInscrito & !esAsocia & (cupos!==personasInscritas))  ?
            (<Row>
                <Button className={styles.button}>
                    Inscribirse
                </Button>
            </Row>) : (<p></p>)
        }
    </Container>
  )
}

export default EventCard