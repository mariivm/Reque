import { Container, Row, Col } from 'react-bootstrap'
import styles from "./message.module.css"

// eslint-disable-next-line react/prop-types
const Message = ({NombreEstudiante, Comentario}) => {
  return (
    <Container className={styles.container}>
        <Row xs={0}>
            <Col xs={10} className={styles.col1} ><u><h5 className={styles.h5}>{NombreEstudiante}</h5></u></Col>
            <Col className={styles.col2} ><p className={styles.p}>{Comentario}</p></Col>
        </Row>
    </Container>
  )
}

export default Message