import NavbarEventec from "../../components/Navbar/Navbar"
import EventCard from "../../components/EventCard"
import { Container, Row, Col, Spinner } from "react-bootstrap"
import styles from "./principal.module.css"
import { useAuthState } from "../../context"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { fetchEventos } from "../../acciones/eventos"

const Principal = () => {
  const userDetails = useAuthState()
  const navigate = useNavigate()
  const [eventos, setEventos] = useState([])
  const [isLoading, setIsLoading] = useState(true)


  const setEventosEnPantalla = async (carnet) => {
    let data = await fetchEventos(carnet);
    if (!data) {return;}
    setEventos(data.res);
    setIsLoading(false);
  }

  useEffect(() => {
    if (!userDetails.user){
      navigate("/")
      return;
    }

    setEventosEnPantalla((userDetails.user.carnet ? userDetails.user.carnet : 0));
  }, [userDetails, navigate])

  if (isLoading) return (<Spinner animation="grow" variant="info" />)
  return (
    <>
        <NavbarEventec/>
        <Container>
            <Row>
                <Col>
                    <h1 className={styles.h1}>Eventos</h1>
                    {eventos.map((evento, index) => {
                      return (
                      <EventCard eventoid={evento.eventoid} key={index} nombre={evento.titulo} fecha={evento.fecha} lugar={evento.lugar} personasInscritas={evento.inscripciones} cupos={evento.capacidad} duracion={evento.duracion} esAsocia={(userDetails.user.tipo == 1)} estaInscrito={evento.estaInscrito} descripcion={evento.descrip} actividades={evento.actividades} />
                      )})}
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Principal