import FooterComponent from "../components/Footer/FooterComponent";
import FormProduk from "../components/FormProduk/FormProduk";
import NavbarComponent from "../components/Navbar/NavbarComponent";

function TambahBarang() {
    return(
        <div>
            <NavbarComponent />
            <FormProduk />
            <FooterComponent />
        </div>
    );
}

export default TambahBarang;