import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import data from "../../utils/constants/testimonialsData";
import styles from "./Testimonials.module.css";

function Testimonials() {
  const testimonialsData = data;

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div id="testimonials" className={styles.testimonials}>
      <div className={styles.testimonials__container} data-aos="fade-up">
        <div className={styles.section__header}>
            <h2 className={styles.testimonial__title}>TESTIMONIAL</h2>
        </div>
        
        <Container>
          <Carousel
            responsive={responsive}
            autoPlay
            autoPlaySpeed={6000}
            arrows={false}
            infinite
            draggable
            swipeable
            showDots
            className={styles.carousel}
          >
            {
              testimonialsData.map((testimonial) => (
                <div key={testimonial.id}>
                  <div className={styles.testimonial__wrap}>
                    <div className={styles.testimonial__item}>
                      <div className={`d-flex align-items-center ${styles['header__testimonial']}`}>
                        <img
                          src={testimonial.image}
                          className={`flex-shrink-0 ${styles['testimonial__img']}`}
                          alt={`Testimonial ${testimonial.id}`}
                        />
                        <div>
                          <div className={styles.stars}>
                            <h3 className={styles.testimonial__name}>{testimonial.name}</h3>
                            {Array.from({ length: testimonial.stars }, (_, index) => (
                              <IoStar key={index} />
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className={styles.testimonial__description} >
                        <i className= {`${styles['quote-left']}`}><FaQuoteLeft /> </i>
                          {testimonial.content}
                        <i className={`${styles['quote-right']}`}><FaQuoteRight /></i>
                      </p>
                    </div>
                  </div>
                </div>
              ))
            }
          </Carousel>
        </Container>
      </div>
    </div>
  );
};

export default Testimonials;
