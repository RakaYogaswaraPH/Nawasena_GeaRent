import NavbarDashboard from "../../components/NavbarDashboard/NavbarDashboard";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useEffect, useState } from "react";
import TambahGambar from "../../components/TambahGambar/TambahGambar";


function AddImage() {
    const [toggle, setToggle] = useState(false);

    function Toggle(){
        setToggle(!toggle);
    }

    useEffect(() => {
        const handleSize = () => {
            if(window.innerWidth > 768){
                setToggle(false);
            }
        }
        window.addEventListener('resize', handleSize);
        return() => {
            window.removeEventListener('resize', handleSize);
        }
    }, []);

    return(
        <div className="d-flex">
           <div className={toggle ? "d-none" : "w-auto position-fixed"}>
                <Sidebar />
            </div>
            <div className={toggle ? "d-none" : "invisible"}>
                <Sidebar />
            </div>
            <div className="col overflow-auto">
                <NavbarDashboard Toggle={Toggle} />
                <TambahGambar />
            </div>
        </div>  
    );
}

export default AddImage;