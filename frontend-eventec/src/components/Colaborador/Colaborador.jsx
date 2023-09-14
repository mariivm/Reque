import { Container, Row, Col, Button, Accordion } from 'react-bootstrap'
import styles from "./colaborador.module.css"

// eslint-disable-next-line react/prop-types
const Colaborador = ({nombre, carnet, correo, celular}) => {
  return (
    <Container className={styles.container}>
        <Row>
            <Col className={styles.col} ><p className={styles.etiquetas}>{nombre}</p></Col>
            <Col className={styles.col} ><p className={styles.etiquetas}>{carnet}</p></Col>
            <Col className={styles.col} ><p className={styles.etiquetas}>{correo}</p></Col>
            <Col className={styles.colFinal} ><p className={styles.etiquetas}>{celular}</p></Col>
        </Row>
    </Container>
  )
}

export default Colaborador