import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import '../stylesheets/NavBar.css';

function NavBar() {
    return (
        <Navbar className='sticky-top' expand="lg">
            <Container>
                <NavLink className='navbar-brand' to="/">ISZRiS</NavLink>
                <Navbar.Toggle aria-controls="navbarScroll" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-expanded="false" aria-label="Toggle navigation" />
                <Navbar.Collapse id='navbarScroll' className='collapse-menu-navbar'>
                    <Nav className='me-auto'>
                        <NavLink to="/create" id='createPoll' href='#' className='link-button default-button-navbar' data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Create poll</NavLink>
                        <NavLink to="/pollList" id='pollList' href='#' className='link-button default-button-navbar' data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">List polls</NavLink>
                    </Nav>
                    <Nav>
                        <NavLink href="#" to="/login" id='loginButton' className='link-button default-button-navbar' data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Login</NavLink>
                        <NavLink to="/register" id='registrationButton' href='#' className='link-button registration-button-navbar' data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Sing up</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;