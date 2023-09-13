import { Container, Navbar, NavDropdown } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import { logout, useAuthDispatch, useAuthState } from "../../context";
import styles from './Navbar.module.css'

const NavbarEventec = () => {
    const dispatch = useAuthDispatch();
    const userDetails = useAuthState();
    const navigate = useNavigate();
    const handleLogout = async (e) => {
        e.preventDefault();
        try {
            await logout(dispatch)
            navigate("/")
        } catch (error) {console.log(error)}
    }


  return (
    <>
        <Navbar expand="lg" style={{marginBottom: "40px"}}>
            <Container>
                <Navbar.Text className="navbar-brand"><Link to="/calendar">
                    <span style={{color: "white"}}>EVEN</span>
                    <span style={{color: "#22AAA1"}}>TEC</span>
                    </Link>
                </Navbar.Text>
                <NavDropdown title="Opciones" className="justify-content-end" style={{paddingRight: "40px"}}>
                    <NavDropdown.Item><Link to={"/foro"}>Foro</Link></NavDropdown.Item>
                    {(userDetails.user && !userDetails.user.tipoUsuario) ? <NavDropdown.Item><Link to="/crearEvento">Crear Evento</Link></NavDropdown.Item> : null}
                    {(userDetails.user && !userDetails.user.tipoUsuario) ? <NavDropdown.Item><Link to="/crearActividad">Programar Actividad</Link></NavDropdown.Item> : null}
                    {(userDetails.user && !userDetails.user.tipoUsuario) ? <NavDropdown.Item><Link to="/verPropuestas">Ver Propuestas</Link></NavDropdown.Item> : null}
                    {(userDetails.user && userDetails.user.tipoUsuario) ? <NavDropdown.Item><Link to="/crearPropuesta">Proponer Evento</Link></NavDropdown.Item> : null}
                    {(userDetails.user && userDetails.user.tipoUsuario) ? <NavDropdown.Item><Link to="/feedback">Dar Feedback de Evento</Link></NavDropdown.Item> : null}
                    {(userDetails.user && userDetails.user.tipoUsuario) ? <NavDropdown.Item><Link to="/eventosInscritos">Ver Eventos Inscritos</Link></NavDropdown.Item> : null}
                    <NavDropdown.Divider/>
                    <NavDropdown.ItemText className={styles.clickable} style={{color: "#ff1212"}} onClick={handleLogout}>Cerrar Sesion</NavDropdown.ItemText>
                </NavDropdown>
            </Container>
        </Navbar>
    </>
  )
}

export default NavbarEventec