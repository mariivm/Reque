import { Button, Form } from 'react-bootstrap';
import styles from "./feedback.module.css";

const Feedback = () => {
  return (
    <div>
      <span className={styles.span} style={{ color: "#FFFFFF", left: "20px", top: "10px" }}>EVEN</span>
      <span className={styles.span} style={{ left: "20px", top: "10px" }}>TEC</span>

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
    </div>
  )
}

export default Feedback;