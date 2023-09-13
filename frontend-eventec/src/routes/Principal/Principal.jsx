import NavbarEventec from "../../components/Navbar/Navbar"
import EventCard from "../../components/EventCard"
import { Container, Row, Col } from "react-bootstrap"
import styles from "./principal.module.css"
import { useAuthState } from "../../context"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

const Principal = () => {
  const userDetails = useAuthState()
  const navigate = useNavigate()

  useEffect(() => {
    if (!userDetails.user){
      navigate("/")
    }
  }, [userDetails, navigate])
  return (
    <>
        <NavbarEventec/>
        <Container>
            <Row>
                <Col>
                    <h1 className={styles.h1}>Eventos</h1>
                    <EventCard nombre={"Noche Bailable"} fecha={"15 de Setiembre"} lugar={"Edificio D3"} personasInscritas={500} cupos={500} duracion={"2 horas"} esAsocia={false} estaInscrito={false} descripcion={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}/>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Principal