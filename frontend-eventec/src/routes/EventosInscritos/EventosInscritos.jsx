import NavbarEventec from "../../components/Navbar/Navbar"
import EventCard from "../../components/EventCard"
import { Container, Row, Col } from "react-bootstrap"
import styles from "./EventosInscritos.module.css"
import { useAuthState } from "../../context"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { fetchEventosInscritos } from "../../acciones/eventos"

const EventosInscritos = () => {
  const userDetails = useAuthState()
  const navigate = useNavigate()
  const [eventos, setEventos] = useState([])


  const setEventosEnPantalla = async (carne) => {
    // let data = await fetchEventosInscritos(userDetails.user.carne);
    let data = []
    setEventos(data);
  }

  useEffect(() => {
    if (!userDetails.user){
      navigate("/")
      return;
    }
  setEventosEnPantalla(userDetails.user.carne);
  }, [userDetails, navigate])


  return (
    <>
        <NavbarEventec/>
        <Container>
            <Row>
                <Col>
                    <h1 className={styles.h1}>Eventos Inscritos</h1>
                    {eventos.map((evento) => {
                      <EventCard nombre={evento.nombre} fecha={evento.fecha} lugar={evento.lugar} personasInscritas={evento.personasInscritas} cupos={evento.cupos} duracion={evento.duracion} esAsocia={0} estaInscrito={1} descripcion={evento.descripcion} />
                    })}
                    <EventCard nombre={"Noche Bailable"} fecha={"2023/09/22 6:30 PM"} lugar={"Edificio D3"} personasInscritas={500} cupos={500} duracion={"2 horas"} esAsocia={false} estaInscrito={false} descripcion={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}/>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default EventosInscritos