import { Button, Form, Col, Row, Stack } from 'react-bootstrap';
import Message from '../../components/Message/Message'
import NavbarEventec from '../../components/Navbar/Navbar';
import styles from "./foro.module.css";

const Foro = () => {    
  return (
    <>
        <NavbarEventec />
        <div>

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