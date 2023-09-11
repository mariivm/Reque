import { Container, Navbar, NavDropdown } from "react-bootstrap"
import { Link } from "react-router-dom"

const NavbarEventec = () => {
  return (
    <>
        <Navbar expand="lg" style={{marginBottom: "40px"}}>
            <Container>
                <Navbar.Text className="navbar-brand"><Link to="/calendar">
                    <span style={{color: "white"}}>EVEN</span>
                    <span style={{color: "#22AAA1"}}>TEC</span>
                    </Link></Navbar.Text>
                <NavDropdown title="Opciones" className="justify-content-end">
                    <NavDropdown.Divider/>
                    <NavDropdown.ItemText><Link to="/" style={{color: "#ff1212"}}>Cerrar Sesion</Link></NavDropdown.ItemText>
                </NavDropdown>
            </Container>
        </Navbar>
    </>
  )
}

export default NavbarEventec