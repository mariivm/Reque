import { Button, Form, Row, Col } from 'react-bootstrap';
import Radio from '../../components/Radio/Radio'
import styles from "./feedback.module.css";
import NavbarEventec from '../../components/Navbar/Navbar';

const Feedback = () => {
  return (
    <>
    <NavbarEventec />
    <div>
      <h1 className={styles.h1}>
        Enviar Feedback
      </h1>

      <p className={styles.p}>
        Comentarios y recomedaciones sobre nuestros eventos
      </p>

      <Form>
        <fieldset>
          <Form.Group className={styles.select}>
            <Form.Label htmlFor="Select">Evento</Form.Label>
            <Form.Select id="Select">
              <option></option>
            </Form.Select>
          </Form.Group>
          <Form.Group className={styles.input}>
            <Form.Label htmlFor="TextInput">Comentario</Form.Label>
            <Form.Control
              as="textarea"
              placeholder=""
              style={{ height: '300px' }}
            />
          </Form.Group>
          <Button className={styles.button} type="submit">Enviar</Button>
        </fieldset>
      </Form>
      <Row className={styles.radio}>
        <Col>
          <Radio nombreCalificacion={"Calificación del lugar"}/>
        </Col>
        <Col>
          <Radio nombreCalificacion={"Calificación del horario"}/>
        </Col>
        <Col>
          <Radio nombreCalificacion={"Calificación de las actividades"}/>
        </Col>
        <Col>
          <Radio nombreCalificacion={"Calificación de la organización"}/>
        </Col>
      </Row>
    </div>
    </>
  )
}

export default Feedback;