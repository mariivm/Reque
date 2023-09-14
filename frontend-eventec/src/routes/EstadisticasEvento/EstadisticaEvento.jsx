import NavbarEventec from '../../components/Navbar/Navbar'
import { Container, Row, Col, Form, Spinner } from 'react-bootstrap'
import { useState, useEffect } from 'react';
import { useAuthState } from '../../context';
import { useNavigate } from 'react-router-dom';
import styles from './EstadisticaEvento.module.css'
import FeedbackCard from '../../components/FeedbackCard/FeedbackCard';
import  {  fetchAllEventosPropios, fetchEstadisticas, fetchFeedbacks } from '../../acciones/eventos'

const EstadisticaEvento = () => {
    const [eventos, setEventos] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [evento, setEvento] = useState(1)
    const [feedbacks, setFeedbacks] = useState([])
    const [avgLugar, setAvgLugar] = useState("")
    const [avgHorario, setAvgHorario] = useState("")
    const [avgActividades, setAvgActividades] = useState("")
    const [avgOrganizacion, setAvgOrganizacion] = useState("")
    const userDetails = useAuthState();
    const navigate = useNavigate();

    const setEventosEnPantalla = async (asociacionid) => {
        let data = await fetchAllEventosPropios({asociacionid: asociacionid});
        setEventos(data.res);
        setIsLoading(false);
    }

    const setFeedbackEnPantalla = async(eventoid) => {
        let dataEstadisticas = await fetchEstadisticas({eventoid});
        let dataFeedbacks = await fetchFeedbacks({eventoid});
        setFeedbacks((dataFeedbacks.res ? dataFeedbacks.res : []))
        if (dataEstadisticas.res[0]) {
            setAvgActividades(dataEstadisticas.res[0].califAct);
            setAvgHorario(dataEstadisticas.res[0].califHorario);
            setAvgLugar(dataEstadisticas.res[0].califLugar);
            setAvgOrganizacion(dataEstadisticas.res[0].califOrg);
        }
        setFeedbacks((dataFeedbacks.res ? dataFeedbacks.res : []))
        setIsLoading(false)
    }

    useEffect(() => {
        if (!userDetails.user){
            navigate("/")
            return;
          }
        setEventosEnPantalla((userDetails.user.asociacionid ? userDetails.user.asociacionid : 3))
    }, [])

    useEffect(() => {
        setIsLoading(true)
        setFeedbackEnPantalla(evento)
    }, [evento])

    if (isLoading) return (<Spinner animation="grow" variant="info" />)

  return (
    <>
        <NavbarEventec />
        <Container>
            <Row>
                <h1>Feedback Eventos</h1>
                <Form.Group className={styles.selectorCarrera} controlId="Nombre">
                    <Form.Label>Seleccione el evento que quiere consultar</Form.Label>
                    <Form.Select value={evento} onChange={e => setEvento(e.target.value)} aria-label="Seleccione el evento">
                        <option value={0}>Seleccione un evento:</option>
                        {eventos.map((eve, index) => (<option key={index} value={eve.eventoid}>{eve.titulo}</option>))}
                    </Form.Select>
                </Form.Group>
            </Row>
            <Row>
                <Col>
                    <p>Calificacion Promedio del Lugar: {avgLugar ? avgLugar : 'N/A'}</p>
                    <p>Calificacion Promedio del Horario: {avgHorario ? avgHorario : 'N/A'}</p>
                </Col>
                <Col>
                    <p>Calificacion Promedio de las Actividades: {avgActividades ? avgActividades : 'N/A'}</p>
                    <p>Calificacion Promedio de la Organizacion: {avgOrganizacion ? avgOrganizacion : 'N/A'}</p>
                </Col>
            </Row>
            <Row className={`overflow-auto ${styles.cardContainer}`}>
                {feedbacks.map((feedback, index) => (<FeedbackCard key={index} estudiante={feedback.nombre} lugar={feedback.califLugar} horario={feedback.califHorario} actividades={feedback.califAct} organizacion={feedback.califOrg} comentario={feedback.comentario} />))}
            </Row>
        </Container>
    </>
  )
}

export default EstadisticaEvento