import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Image from 'react-bootstrap/Image'
import arenaicon from '../homeImages/arenaicon.png'
import { Link } from 'react-router-dom';
export default function BootNavBar() {

    return (
        <Navbar className="sticky-top" bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand className="d-flex  align-items-end" as={Link} to="/">
                    <h1 className="brand-name text-danger">ARKARENA</h1>
                    <Image src={arenaicon} width="80" />
                </Navbar.Brand>

                <Navbar.Toggle className="news-image" aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav ">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} className="news-image text-center text-light" to="/"><h3>Skill Calculator</h3></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}


