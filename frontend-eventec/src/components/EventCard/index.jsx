import { Container, Row, Col, Button } from 'react-bootstrap'
import styles from "./EventCard.module.css"

// eslint-disable-next-line react/prop-types
const EventCard = ({nombre, lugar, duracion, personasInscritas, cupos, fecha, descripcion, estaInscrito, esAsocia}) => {
  return (
    <Container className={styles.container}>
        <Row>
            <Col><h2>{nombre}</h2></Col>
            <Col lg={2} className={`justify-content-end ${styles.cupos}`}><span> Cupos: {personasInscritas}/{cupos}</span></Col>
        </Row>
        <Row>
            <Col className={styles.feature}>Fecha: {fecha}</Col>
            <Col className={styles.feature}>Lugar: {lugar}</Col>
        </Row>
        <Row>
            <Col className={styles.feature}>Duracion: {duracion}</Col>
            <Col className={styles.feature}>Fecha: {fecha}</Col>
        </Row>
        <Row className={styles.descripcion}>
            <h3>Descripcion: </h3>
            <p>{descripcion}</p>
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