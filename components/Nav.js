import Link from "next/link"

export default function Nav(){
    return(
        <div id="Nav">
            <Link href="/">Home</Link>
            <Link href="/todo">Todo</Link>
        </div>
    )
}