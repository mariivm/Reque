import NavbarEventec from "../../components/Navbar/Navbar"
import EventCard from "../../components/EventCard"
import { Container, Row, Col } from "react-bootstrap"
import styles from "./Propuestas.module.css"
import { useAuthState } from "../../context"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { fetchPropuestas } from "../../acciones/eventos"

const EventosInscritos = () => {
  const userDetails = useAuthState()
  const navigate = useNavigate()
  const [propuestas, setPropuestas] = useState([])


  useEffect(() => {
    if (!userDetails.user){
      navigate("/")
      return;
    }

    const setPropuestasEnPantalla = async (asociacionid) => {
      let data = await fetchPropuestas(asociacionid);
      if (!data) return;
      setPropuestas(data.res);
    }

    setPropuestasEnPantalla((userDetails.user.asociacionid ? userDetails.user.asociacionid : 3));
  }, [userDetails, navigate])


  return (
    <>
        <NavbarEventec/>
        <Container>
            <Row>
                <Col>
                    <h1 className={styles.h1}>Propuestas</h1>
                    {propuestas ? propuestas.map((evento) => {
                      <EventCard nombre={evento.titulo} fecha={evento.fecha} lugar={evento.lugar} personasInscritas={0} cupos={evento.capacidad} duracion={evento.duracion} esAsocia={1} estaInscrito={0} descripcion={evento.descripcion} />
                    }) : null}
                    {/* <EventCard nombre={"Noche Bailable"} fecha={"2023/09/22 6:30 PM"} lugar={"Edificio D3"} personasInscritas={0} cupos={0} duracion={"2 horas"} esAsocia={false} estaInscrito={false} descripcion={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}/> */}
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default EventosInscritos