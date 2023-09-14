import NavbarEventec from '../../components/Navbar/Navbar'
import { Tabs, Tab, Container, Row, Col, Form } from 'react-bootstrap'
import { useState, useEffect } from 'react';
import { useAuthState } from '../../context';
import { useNavigate } from 'react-router-dom';
import styles from './EstadisticaEvento.module.css'

const EstadisticaEvento = () => {
    const [eventos, setEventos] = useState([])
    const [evento, setEvento] = useState("")
    const [feedbacks, setFeedbacks] = useState([])
    const [estadisticas, setEstadisticas] = useState()
    const userDetails = useAuthState();
    const navigate = useNavigate();

    const setEventosEnPantalla = async (asociacion) => {
        // let data = await fetchEventosPasados(userDetails.user.carne);
        let data = []
        setEventos(data);
    }

    const setDatosEnPantalla = async(evento) => {
        // let data = await fetchEventosPasados(userDetails.user.carne);
        let data = {estadisticas: [], feedbacks: []}
        setFeedbacks(data.feedbacks)
        setEstadisticas(data.estadisticas);
    }

    useEffect(() => {
        if (!userDetails.user){
            navigate("/")
            return;
          }
        setEventosEnPantalla(userDetails.user.asociacionid)
    }, [userDetails, navigate])

    useEffect(() => {

    }, [evento])

  return (
    <>
        <NavbarEventec />
        <Container>
            <Form.Group className={styles.selectorCarrera} controlId="Nombre">
                <Form.Label>Seleccione el evento que quiere consultar</Form.Label>
                <Form.Select value={evento} onChange={e => setEvento(e.target.value)} aria-label="Seleccione el evento">
                    {eventos.map((eve, index) => (<option key={index}>{eve.nombre}</option>))}
                </Form.Select>
            </Form.Group>
        </Container>
        <Tabs defaultActiveKey={"estadisticasEvento"} justify>
            <Tab eventKey={"estadisticasEvento"} title={"Estadisticas de Evento"}>
                <Container>

                </Container>
            </Tab>
            <Tab eventKey={"feedback"} title={"Feedback de Estudiantes"}>
                <Container>
                    
                </Container>
            </Tab>
        </Tabs>
    </>
  )
}

export default EstadisticaEvento