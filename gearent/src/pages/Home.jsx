import AboutComponent from "../components/About/AboutComponent";
import BrandComponent from "../components/Brand/BrandComponent";
import ContactComponent from "../components/Contact/ContactComponent";
import FaqComponent from "../components/Faq/FaqComponent";
import FooterComponent from "../components/Footer/FooterComponent";
import GearentComponent from "../components/GearentDescription/GearentComponent";
import HeroComponent from "../components/Hero/HeroComponent";
import NavbarComponent from "../components/Navbar/NavbarComponent";
import ServicesComponent from "../components/Sevices/ServicesComponent";
import Testimonials from "../components/Testimonials/TestimonialsComponent";
import TokoComponent from "../components/Toko/TokoComponent";
import VideoComponent from "../components/VideoShowcase/VideoComponent";

function Home(){
    return(
        <div>
            <NavbarComponent />
            <HeroComponent />
            <AboutComponent />
            <BrandComponent />
            <GearentComponent />
            <VideoComponent />
            <ServicesComponent />
            <Testimonials />
            <TokoComponent />
            <FaqComponent />
            <ContactComponent />
            <FooterComponent />
        </div>
    );
}

export default Home;