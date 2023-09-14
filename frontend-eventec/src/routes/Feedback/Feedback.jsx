import { Button, Form, Row, Col, Spinner } from 'react-bootstrap';
import Radio from '../../components/Radio/Radio'
import styles from "./feedback.module.css";
import NavbarEventec from '../../components/Navbar/Navbar';
import { useState } from 'react';
import { crearFeedback, fetchEventosInscritos } from '../../acciones/eventos';
import { useEffect } from 'react';
import { useAuthState } from '../../context';
import { useNavigate } from 'react-router-dom';

const Feedback = () => {
  const userDetails = useAuthState();
  const navigate = useNavigate();
  const [eventos, setEventos] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [evento, setEvento] = useState(0);
  const [coment, setComent] = useState("");
  const [calLugar, setCalLugar] = useState(1);
  const [calHorario, setCalHorario] = useState(1);
  const [calAct, setCalAct] = useState(1);
  const [calOrg, setCalOrg] = useState(1);


  const setEventosEnPantalla = async (carnet) => {
    let data = await fetchEventosInscritos({carnet: carnet});
    setEventos(data.res);
    setIsLoading(false);
  }

  useEffect(() => {
    if (!userDetails.user){
      navigate("/")
      return;
    }
  setEventosEnPantalla(userDetails.user.carnet)
  },[])

  const handleCrearFeedback = async e => {
    e.preventDefault();

    if (!coment || !calLugar || !calHorario || !calAct || !calOrg) {alert("Todos los datos deben ser rellenados"); return;}
    let payload = {
      eventoid: evento, coment, calLugar, calHorario, calAct, calOrg, carnet: userDetails.user.carnet
    }
    console.log(payload)
    try {
        let res = await crearFeedback(payload);
        if (!res) {alert("No se pudo enviar el feedback"); return;}
        navigate("/calendar")
    } catch (e) {console.log(e)}

  }

  if (isLoading) return (<Spinner animation="grow" variant="info" />)


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
            <Form.Select value={evento} onChange={e => setEvento(e.target.value)} id="Select" aria-label="Seleccione el evento">
              <option key={0}>Seleccione una opcion:</option>
              {eventos.map((eve, index) => (<option key={index} value={(eve.eventoid)}>{eve.titulo}</option>))}
            </Form.Select>
          </Form.Group>
          <Form.Group className={styles.input}>
            <Form.Label htmlFor="TextInput">Comentario</Form.Label>
            <Form.Control
              value={coment}
              onChange={e => setComent(e.target.value)}
              as="textarea"
              placeholder=""
              style={{ height: '300px' }}
            />
          </Form.Group>
          <Button className={styles.button} onClick={handleCrearFeedback}>Enviar</Button>
        </fieldset>
      </Form>
      <Row className={styles.radio}>
        <Col>
          <Radio state={calLugar} setState={setCalLugar} nombreCalificacion={"Calificación del lugar"}/>
        </Col>
        <Col>
          <Radio state={calHorario} setState={setCalHorario} nombreCalificacion={"Calificación del horario"}/>
        </Col>
        <Col>
          <Radio state={calAct} setState={setCalAct} nombreCalificacion={"Calificación de las actividades"}/>
        </Col>
        <Col>
          <Radio state={calOrg} setState={setCalOrg} nombreCalificacion={"Calificación de la organización"}/>
        </Col>
      </Row>
    </div>
    </>
  )
}

export default Feedback;