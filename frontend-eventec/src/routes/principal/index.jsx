import NavbarEventec from "../../components/Navbar"
import EventCard from "../../components/EventCard"
import { Container, Row, Col } from "react-bootstrap"
import "./principal.module.css"

const Principal = () => {
  return (
    <>
        <NavbarEventec/>
        <Container>
            <Row>
                <Col>
                    <h1>Eventos</h1>
                    <EventCard nombre={"Noche Bailable"} fecha={"15 de Setiembre"} lugar={"Edificio D3"} personasInscritas={424} cupos={500} duracion={"2 horas"} />

                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Principal