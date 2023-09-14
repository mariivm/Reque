import NavbarEventec from "../../components/Navbar/Navbar"
import EventCard from "../../components/EventCard"
import { Container, Row, Col, Spinner } from "react-bootstrap"
import styles from "./Propuestas.module.css"
import { useAuthState } from "../../context"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { fetchPropuestas } from "../../acciones/eventos"

const EventosInscritos = () => {
  const userDetails = useAuthState()
  const navigate = useNavigate()
  const [propuestas, setPropuestas] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const setPropuestasEnPantalla = async (asociacionid) => {
    let data = await fetchPropuestas({asociacionid: asociacionid});
    if (!data || !data.res) return;
    setPropuestas(data.res);
    setIsLoading(false)
  }

  useEffect(() => {
    if (!userDetails.user){
      navigate("/")
      return;
    }

    setPropuestasEnPantalla((userDetails.user.asociacionid ? userDetails.user.asociacionid : 3));
  }, [userDetails, navigate])

  if (isLoading) return (<Spinner animation="grow" variant="info" />)


  return (
    <>
        <NavbarEventec/>
        <Container>
            <Row>
                <Col>
                    <h1 className={styles.h1}>Propuestas</h1>
                    {propuestas.map((evento,index) => {
                      return <EventCard key={index} eventoid={evento.eventoid} nombre={evento.titulo} fecha={evento.fecha} lugar={evento.lugar} personasInscritas={0} cupos={evento.capacidad} duracion={evento.duracion} esAsocia={1} estaInscrito={0} descripcion={evento.descripcion} />
                    })}
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default EventosInscritos