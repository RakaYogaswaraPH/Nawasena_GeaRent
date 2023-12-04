import { useEffect, useState } from "react";
import CardDashboard from "../../components/CardDashboard/CardDashboard";
import NavbarDashboard from "../../components/NavbarDashboard/NavbarDashboard";
import Sidebar from "../../components/Sidebar/Sidebar";


function HomeDashboard() {
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
                <CardDashboard />
            </div>
        </div>  
    );
}

export default HomeDashboard;