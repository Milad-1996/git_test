import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import {Link} from 'react-router-dom'


export default function Header() {
    return (
        <div>
            <Container>
                <Navbar bg="dark" data-bs-theme="dark">
                    <Navbar.Brand href="#home">Sabzlearn</Navbar.Brand>
                    <Nav className="me-auto">
                        <Link to="/" style={{marginLeft:35, color:"#fff"}}>Home</Link>
                        <Link to="/courses" style={{marginLeft:35, color:"#fff"}}>Courses</Link>
                        <Link to="/about" style={{marginLeft:35, color:"#fff"}}>About</Link>
                    </Nav>
                </Navbar>
            </Container>
        </div>
    )
}
