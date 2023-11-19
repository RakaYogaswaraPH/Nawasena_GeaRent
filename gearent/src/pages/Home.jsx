import AboutComponent from "../components/About/AboutComponent";
import BrandComponent from "../components/Brand/BrandComponent";
import FooterComponent from "../components/Footer/FooterComponent";
import HeroComponent from "../components/Hero/HeroComponent";
import NavbarComponent from "../components/Navbar/NavbarComponent";

function Home(){
    return(
        <div>
            <NavbarComponent />
            <HeroComponent />
            <AboutComponent />
            <BrandComponent />
            <FooterComponent />
        </div>
    );
}

export default Home;