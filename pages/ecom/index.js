import EcomHome from "../../components/Ecom/EcomHome"
import SideNav from "../../components/Ecom/SideNav"
import Nav from "../../components/Nav"

//API: https://fakestoreapi.com/

export default function EcomHomeApp(){
    return (
        <div>
            <Nav />
            <div id="EcomHome">
                <SideNav/>
                <EcomHome/>
            </div>
        </div>
    )
}