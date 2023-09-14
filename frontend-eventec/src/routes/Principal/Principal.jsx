import NavbarEventec from "../../components/Navbar/Navbar"
import EventCard from "../../components/EventCard"
import { Container, Row, Col } from "react-bootstrap"
import styles from "./principal.module.css"
import { useAuthState } from "../../context"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { fetchEventos } from "../../acciones/eventos"

const Principal = () => {
  const userDetails = useAuthState()
  const navigate = useNavigate()
  const [eventos, setEventos] = useState([])


  

  useEffect(() => {
    if (!userDetails.user){
      navigate("/")
      return;
    }

    const setEventosEnPantalla = async (carnet) => {
      let data = await fetchEventos(carnet);
      if (!data) {return;}
      setEventos(data.res);
    }

    setEventosEnPantalla(userDetails.user.carnet);
  }, [userDetails, navigate])


  return (
    <>
        <NavbarEventec/>
        <Container>
            <Row>
                <Col>
                    <h1 className={styles.h1}>Eventos</h1>
                    {eventos ? eventos.map((evento) => {
                      <EventCard nombre={evento.nombre} fecha={evento.fecha} lugar={evento.lugar} personasInscritas={evento.personasInscritas} cupos={evento.cupos} duracion={evento.duracion} esAsocia={(!userDetails.tipoUsuario)} estaInscrito={evento.estaInscrito} descripcion={evento.descripcion} actividades={evento.actividades} />
                    }) : null} 
                    {/* <EventCard nombre={"Noche Bailable"} fecha={"2023/09/22 6:30 PM"} lugar={"Edificio D3"} personasInscritas={300} cupos={500} duracion={"2 horas"} esAsocia={false} estaInscrito={false} descripcion={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                    actividades={[
                      {descripcion: 'Rifa', ubicacion: 'Entrada Soda del Este', horainicio: '7:00', horafinal:'7:15', recursosnecesarios: 'N/A', capacidad: 30},
                      {descripcion: 'Rifa 2', ubicacion: 'Entrada Soda del Este', horainicio: '7:00', horafinal:'7:15', recursosnecesarios: 'N/A', capacidad: 30}]} /> */}
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Principal