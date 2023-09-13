import Checkbox from '../../assets/checkbox';
import { Button } from 'react-bootstrap';
import styles from "./foro.module.css";
import Stack from 'react-bootstrap/Stack';

const Foro = () => {    
  return (
    <div>
      <span className={styles.span} style={{ color: "#FFFFFF", left: "20px", top: "10px" }}>EVEN</span>
      <span className={styles.span} style={{ left: "20px", top: "10px" }}>TEC</span>

      <h1 className={styles.h1}>
        Iniciar Sesión
      </h1>

      <p className={styles.p}>
        Ingresa a la plataforma como asociación
      </p>

      <Stack className={styles.stack} gap={3}>
        <div style={{ borderColor: "#FFFFFF", borderWidth: "20px", backgroundColor: "#000000", width: "100px"}} className="p-2">First item</div>
        <div className="p-2">Second item</div>
        <div className="p-2">Third item</div>
      </Stack>

      <Checkbox/>

      <Button className={styles.button}> Ingresar </Button>
    </div>
  )
}

export default Foro