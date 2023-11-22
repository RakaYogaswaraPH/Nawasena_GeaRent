import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from "./Navbar.module.css";
import { Link } from 'react-router-dom';

function NavbarComponent() {
  return(
    <Navbar expand="lg" className={styles.navbar}>
      <Container className="d-flex p-2">
        <a href="#" className={styles.nav__anchor}>
          <h3 className={styles.navbar__title}>GeaRent<span className={styles.navbar__dot}>.</span></h3>
        </a>
        <Navbar.Toggle variant="light" aria-controls="navbarScroll" style={{ borderColor: 'white', backgroundColor: 'white',  boxShadow: '0 0 0 #ffffff'}}/>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto me-2 my-4 my-lg-0"
            style={{ maxHeight: '190px'}}
          >
            <Nav.Link href="#hero" className={`text-light me-2 ${styles['nav-link-hover']}`}>Beranda</Nav.Link>
            <Nav.Link href="#about" className={`text-light me-2 ${styles['nav-link-hover']}`}>Tentang Kami</Nav.Link>
            <Nav.Link href="#services" className={`text-light me-2 ${styles['nav-link-hover']}`}>Keunggulan</Nav.Link>
            <Nav.Link href="#toko" className={`text-light me-2 ${styles['nav-link-hover']}`}>Toko</Nav.Link>
            <Nav.Link href="#contact" className={`text-light me-2 ${styles['nav-link-hover']}`}>Kontak</Nav.Link>
          </Nav>
          <div>
            <Link to="/login">
              <Button variant="light" className={styles.button__masuk}>Masuk</Button>
            </Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;