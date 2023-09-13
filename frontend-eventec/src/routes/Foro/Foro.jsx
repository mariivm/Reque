import { Button, Form, Col, Row, Stack } from 'react-bootstrap';
import Message from '../../components/Message/Message'
import styles from "./foro.module.css";

const Foro = () => {    
  return (
    <>
        <div>
            <span className={styles.span} style={{ color: "#FFFFFF", left: "20px", top: "10px" }}>EVEN</span>
            <span className={styles.span} style={{ left: "20px", top: "10px" }}>TEC</span>

            <h1 className={styles.h1}>
                Foro
            </h1>

            <p className={styles.p}>
                Espacio libre para hacer comentarios <br/> públicos sobre nuestros eventos
            </p>

            <Stack gap={0}>
                <Message NombreEstudiante={"Armando"} Comentario={"Me gustó mucho"}/>
                <Message NombreEstudiante={"Armando"} Comentario={"Me gustó mucho"}/>
                <Message NombreEstudiante={"Armando"} Comentario={"Me gustó mucho"}/>
                <Message NombreEstudiante={"Armando"} Comentario={"Me gustó mucho"}/>
            </Stack>    

            <Row>
                    <Col xs={10} className={styles.col}>
                        <Form.Control type="text" placeholder={"Escribe tu comentario"}/>
                    </Col>
                    <Col xs={10}>
                    <Button className={styles.button}> Publicar </Button>
                    </Col>
            </Row>
        </div>
    </>
  )
}

export default Foro