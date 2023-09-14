import { Container, Row, Col } from "react-bootstrap"
import styles from './FeedbackCard.module.css'


// eslint-disable-next-line react/prop-types
const FeedbackCard = ({estudiante, comentario, lugar, horario, actividades, organizacion}) => {
  return (
    <Container className={styles.container}>
        <Row>
        <strong>{estudiante}</strong>
        </Row>
        <Row>
            <Col lg={2}>
                
                <p>Calificaciones:</p>
                
            </Col>
            <Col><p>Lugar: {lugar}</p></Col>
            <Col><p>Horario: {horario}</p></Col>
            <Col><p>Actividades: {actividades}</p></Col>
            <Col><p>Organizacion: {organizacion}</p></Col>
        </Row>
        <Row>
            {comentario}
        </Row>
    </Container>
  )
}

export default FeedbackCard