import Link from "next/link"

export default function SideNav(){
    return(
        <div id="SideNav">
            <Link href="/ecom">Wiva Store</Link>
            <Link href="/ecom/Tech">Tech</Link>
            <Link href="/ecom/Jewelery">Jewelery</Link>
            <Link href="/ecom/Men">Men</Link>
            <Link href="/ecom/Women">Women</Link>
        </div>
    )
}