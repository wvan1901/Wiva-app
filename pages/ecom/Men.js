import EcomMen from "../../components/Ecom/EcomMen"
import SideNav from "../../components/Ecom/SideNav"
import Nav from "../../components/Nav"

export default function EcomMenApp(){
    return (
        <div>
            <Nav />
            <div id="EcomHome">
                <SideNav/>
                <EcomMen/>
            </div>
        </div>
    )
}