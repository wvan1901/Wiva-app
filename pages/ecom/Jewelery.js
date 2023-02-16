import EcomJew from "../../components/Ecom/EcomJew"
import SideNav from "../../components/Ecom/SideNav"
import Nav from "../../components/Nav"

export default function EcomJewApp(){
    return (
        <div>
            <Nav />
            <div id="EcomHome">
                <SideNav/>
                <EcomJew/>
            </div>
        </div>
    )
}