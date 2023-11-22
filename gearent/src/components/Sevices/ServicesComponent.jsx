import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ServiceComponent from '../ServiceItem/ServiceComponent';
import { IoBookmarksOutline } from "react-icons/io5";
import { BsCash, BsPatchCheck, BsCardChecklist, BsHandThumbsUp} from "react-icons/bs";
import { FaRegTimesCircle} from "react-icons/fa";
import styles from "./Services.module.css";

function ServicesComponent() {
    return(
        <section id="services" className={`sections-bg ${styles['service__section']}`}>
        <Container data-aos="fade-up">
          <div className={styles.section__header}>
            <h2 className={styles.service__title}>KEUNGGULAN</h2>
          </div>
          <Row className="gy-4" data-aos="fade-up" data-aos-delay="100">
            <ServiceComponent
              icon={<BsCash />}
              title="Harga Terjangkau"
              description="Dapatkan jasa penyewaan perlengkapan outdoor berkualitas dengan harga yang ramah di kantong."
            />
            <ServiceComponent
              icon={<BsPatchCheck />}
              title="Barang Berkualitas"
              description="Perlengkapan outdoor berkualitas untuk petualangan yang tak terlupakan."
            />
            <ServiceComponent
              icon={<IoBookmarksOutline />}
              title="Booking Tanpa DP"
              description="Dapatkan perlengkapan outdoor impian Anda sekarang juga, tanpa perlu membayar DP."
            />
            <ServiceComponent
              icon={<FaRegTimesCircle />}
              title="Batalkan Kapan Saja"
              description="Bisa dengan tenang Booking dari sekarang, dan bisa batalkan kapan saja."
            />
            <ServiceComponent
              icon={<BsCardChecklist  />}
              title="Pilihan Barang Terlengkap"
              description="Nikmati petualangan outdoor yang menyenangkan dengan perlengkapan yang lengkap."
            />
            <ServiceComponent
              icon={<BsHandThumbsUp />}
              title="Jasa Terpercaya"
              description="Dapatkan perlengkapan outdoor impian Anda dengan layanan yang terpercaya."
            />
          </Row>
        </Container>
      </section>
    );
}

export default ServicesComponent;