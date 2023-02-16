import EcomWomen from "../../components/Ecom/EcomWomen"
import SideNav from "../../components/Ecom/SideNav"
import Nav from "../../components/Nav"

export default function EcomWomenApp(){
    return (
        <div>
            <Nav />
            <div id="EcomHome">
                <SideNav/>
                <EcomWomen/>
            </div>
        </div>
    )
}