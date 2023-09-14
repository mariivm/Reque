import NavbarEventec from "../../components/Navbar/Navbar"
import EventCard from "../../components/EventCard"
import { Container, Row, Col, Spinner } from "react-bootstrap"
import styles from "./EventosInscritos.module.css"
import { useAuthState } from "../../context"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { fetchEventosInscritos } from "../../acciones/eventos"

const EventosInscritos = () => {
  const userDetails = useAuthState()
  const navigate = useNavigate()
  const [eventos, setEventos] = useState([])
  const [isLoading, setIsLoading] = useState(true)


  const setEventosEnPantalla = async (carnet) => {
    let data = await fetchEventosInscritos({carnet: carnet});
    if (!data) return;
    setEventos(data.res);
    setIsLoading(false)
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
                    <h1 className={styles.h1}>Eventos Inscritos</h1>
                    {eventos.map((evento, index) => {
                      return <EventCard key={index} eventoid={evento.eventoid} nombre={evento.titulo} fecha={evento.fecha} lugar={evento.lugar} personasInscritas={evento.personasInscritas} cupos={evento.cupos} duracion={evento.duracion} esAsocia={0} estaInscrito={1} descripcion={evento.descripcion} />
                    })}
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default EventosInscritos