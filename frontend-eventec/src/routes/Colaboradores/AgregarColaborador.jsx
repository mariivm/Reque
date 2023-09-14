import { Button, Form, Row, Col } from 'react-bootstrap';
import Radio from '../../components/Radio/Radio'
import styles from "../Feedback/feedback.module.css";

const AgregarColaborador = () => {
  return (
    <div>
      <span className={styles.span} style={{ color: "#FFFFFF", left: "20px", top: "10px" }}>EVEN</span>
      <span className={styles.span} style={{ left: "20px", top: "10px" }}>TEC</span>

      <h1 className={styles.h1}>
        Agregar Colaborador
      </h1>

      <p className={styles.p}>
        Agregar un nuevo colaborador a tu evento
      </p>
    </div>
  )
}

export default AgregarColaborador;