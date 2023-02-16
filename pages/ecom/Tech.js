import EcomTech from "../../components/Ecom/EcomTech"
import SideNav from "../../components/Ecom/SideNav"
import Nav from "../../components/Nav"

export default function EcomTechApp(){
    return (
        <div>
            <Nav />
            <div id="EcomHome">
                <SideNav/>
                <EcomTech/>
            </div>
        </div>
    )
}