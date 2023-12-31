import React from 'react';
import styles from "./Footer.module.css";
import image from "../../assets/image/playstore.png";
import Nav from 'react-bootstrap/Nav';
import imageLogo from "../../assets/image/logo-gearent.png";

function FooterComponent() {
    return(
      <footer className={`page-footer font-small blue pt-4 ${styles['footer']}`}>
        <div className="container text-md-left">
          <div className="row">
            <div className="col-lg-4 mt-md-0 mt-3">
              <a href="#" className={styles.footer__anchor}>
                <img src={imageLogo} alt="logo" className={styles.logo} />
                {/* <h3 className={styles.footer__title}>GeaRent<span className={styles.footer__dot}>.</span></h3> */}
              </a>
              <p className={styles.footer__description}>Nikmati pengalaman outdoor yang seru dan bebas dengan GeaRent.</p>
              <a href="#">
                <img src={image} alt="playstore" />
              </a>
            </div>

            <hr className="clearfix w-100 d-md-none pb-2"/>
            <div className="col-md-3 mb-md-0 mb-3">
              <h5 className={styles.footer__subtitle}>Halaman Navigasi</h5>
              <ul className={`list-unstyled ${styles['footer__list']}`}>
                <Nav.Link href="/#hero">
                  <li>Beranda</li>
                </Nav.Link>
                <Nav.Link href="/#about">
                  <li>Tentang Kami</li>
                </Nav.Link>
                <Nav.Link href="/#services">
                  <li>Keunggulan</li>
                </Nav.Link>
                <Nav.Link href="/#toko">
                  <li>Toko</li>
                </Nav.Link>
                <Nav.Link href="/#contact">
                  <li>Kontak</li>
                </Nav.Link>
                <Nav.Link href="/barang">
                  <li>Tambah Barang</li>
                </Nav.Link>
              </ul>
            </div>
            
            <div className="col-md-2 mb-md-0 mb-3">
              <h5 className={styles.footer__subtitle}>Toko</h5>
              <ul className={`list-unstyled ${styles['footer__list']}`}>
                <li><a href="#!">Tenda</a></li>
                <li><a href="#!">Carrier</a></li>
                <li><a href="#!">Sepatu</a></li>
                <li><a href="#!">Alat Support</a></li>
              </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
              <h5 className={styles.footer__subtitle}>Hubungi Kami</h5>
              <ul className={`list-unstyled ${styles['footer__list']}`}>
                <li><a href="#!">Jakarta, Indonesia</a></li>
                <li><a href="#!">Telepon : 0812345678 </a></li>
                <li><a href="#!">Email : gearent@gmail.com</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className={`text-center py-3 text-light ${styles['footer__copyright']}`}>
          <p>© Copyright: <strong>GearRent.</strong> All Rights Reserved</p>
          <p>Designed by Nawasena</p>
        </div>
      </footer>
    );
}

export default FooterComponent;