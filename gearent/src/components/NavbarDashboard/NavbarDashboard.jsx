import { Button } from "react-bootstrap";
import styles from "./NavbarDashboard.module.css";
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import { LuAlignJustify } from "react-icons/lu";

function NavbarDashboard({Toggle}) {
    return(
        <Navbar expand="lg" className={`py-3 ${styles['navbar__container']}`}>
            <Container>
                <Navbar.Brand href="#" className="text-white d-none d-md-block">Dashboard</Navbar.Brand>
                <Navbar.Brand className="text-dark d-block d-md-none" onClick={Toggle}>
                    <LuAlignJustify />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link to="/">
                            <Button variant="danger" className={`${styles['button__logout']}`}>Keluar</Button>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarDashboard;