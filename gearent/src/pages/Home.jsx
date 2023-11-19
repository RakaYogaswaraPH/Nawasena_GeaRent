import AboutComponent from "../components/About/AboutComponent";
import FooterComponent from "../components/Footer/FooterComponent";
import HeroComponent from "../components/Hero/HeroComponent";
import NavbarComponent from "../components/Navbar/NavbarComponent";

function Home(){
    return(
        <div>
            <NavbarComponent />
            <HeroComponent />
            <AboutComponent />
            <FooterComponent />
        </div>
    );
}

export default Home;