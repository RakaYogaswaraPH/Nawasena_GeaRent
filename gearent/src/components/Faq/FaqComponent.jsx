import React from 'react';
import { Accordion, Container, Row, Col } from 'react-bootstrap';
import styles from "./Faq.module.css";

function FaqComponent() {
    return(
        <div id="faq" className={styles.faq}>
            <Container data-aos="fade-up">
                <Row>
                    <Col lg={4}>
                        <div className="content px-xl-5">
                            <h3 className={styles.faq__title}>Frequently Asked <strong>Questions</strong></h3>
                            <p className={styles.faq__subtitle}>Kami menjawab beberapa pertanyaan yang sering dipertanyakan pelanggan</p>
                        </div>
                    </Col>
        
                    <Col lg={8}>
                        <Accordion>
                            <Accordion.Item eventKey="0" className={styles.accordion__item}>
                                <Accordion.Header className={`${styles['accordion__header', 'collapse']}`}>
                                    <span className={styles.number}>1.</span>
                                    <span className={styles.question}>Berapa biaya sewa barang outdoor?</span>
                                </Accordion.Header>
                                <Accordion.Body className={styles.accordion__body}>
                                    Biaya sewa barang outdoor pada jasa kami bervariasi tergantung pada jenis barang, merek, dan durasi
                                    sewa dengan harga terjangkau mulai dari rentang Rp 20.000 hingga Rp 350.000
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1" className={styles.accordion__item}>
                                <Accordion.Header  className={`${styles['accordion__header', 'collapse']}`}>
                                    <span className={styles.number}>2.</span>
                                    <span className={styles.question}>Bagaimana cara menyewa barang outdoor?</span>
                                </Accordion.Header>
                                <Accordion.Body className={styles.accordion__body}>
                                    Login jika sudah memiliki akun, lalu pilih toko, kemudian pilih peralatan yang diinginkan
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2" className={styles.accordion__item}>
                                <Accordion.Header className={`${styles['accordion__header', 'collapse']}`}>
                                    <span className={styles.number}>3.</span>
                                    <span className={styles.question}>Bagaimana bila barang sewaan rusak/hilang?</span>
                                </Accordion.Header>
                                <Accordion.Body className={styles.accordion__body}>
                                    Jika barang sewaan rusak dari awal, maka segera laporkan kepada toko, tetapi jika barang rusak atau hilang dikarenakan pemakaian customer, maka harus bertanggung jawab sesuai dengan peraturan yang telah ditetapkan oleh toko
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3" className={styles.accordion__item}>
                                <Accordion.Header className={`${styles['accordion__header', 'collapse']}`}>
                                    <span className={styles.number}>4.</span>
                                    <span className={styles.question}>Apakah bisa menukar barang sewaan yang rusak?</span>
                                </Accordion.Header>
                                <Accordion.Body className={styles.accordion__body}>
                                    Bisa, asal diberikan penjelasan dan bukti terkait barang sewaan yang rusak
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4" className={styles.accordion__item}>
                                <Accordion.Header className={`${styles['accordion__header', 'collapse']}`}>
                                    <span className={styles.number}>5.</span>
                                    <span className={styles.question}>Apakah ada instruksi penggunaan barang sewaan?</span>
                                </Accordion.Header>
                                <Accordion.Body className={styles.accordion__body}>
                                    Ada, intruksi penggunaan barang sewa dapat di lihat pada aplikasi gearent
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
            </Container>
      </div>
    );
}

export default FaqComponent;