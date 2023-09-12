import { Container, Navbar, NavDropdown } from "react-bootstrap"
import { Link } from "react-router-dom"
import { logout, useAuthDispatch, useAuthState } from "../context";

const NavbarEventec = () => {
    const dispatch = useAuthDispatch();
    const userDetails = useAuthState();

    const handleLogout = async (e) => {
        e.preventDefault();
        try {
            await logout(dispatch)
            
        } catch (error) {
            console.log(error)
        }

        }
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
                    <NavDropdown.ItemText style={{color: "#ff1212"}} onClick={handleLogout}>Cerrar Sesion</NavDropdown.ItemText>
                </NavDropdown>
            </Container>
        </Navbar>
    </>
  )
}

export default NavbarEventec