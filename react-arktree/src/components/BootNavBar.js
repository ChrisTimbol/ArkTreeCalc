
import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Image from 'react-bootstrap/Image'
import {Link} from 'react-router-dom';
export default function BootNavBar() {
 
    return (
        <>
            <Navbar className="sticky-top" bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="/">
               
                        <h1 className= "brand-name text-danger">ARKARENA</h1> </Navbar.Brand>
                        <Image src="arenaicon.png" width="80" className=""/>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav ">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} className="text-center text-light" to="/news"><h3>News</h3></Nav.Link>
                            <Nav.Link as={Link} className="text-center text-light" to="/calculator"><h3>Skill Calculator</h3></Nav.Link>
                            <Nav.Link as={Link} className="text-center text-light" to="/tierlist"><h3>Tier List</h3></Nav.Link>
                            <Nav.Link as={Link} className="text-center text-light" to="/patchnotes"><h3>Patch Notes</h3></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}


