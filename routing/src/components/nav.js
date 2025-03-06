import Link from "next/link";

export default function Nav(){
    
    return(
        <ul>
            <li>
                <Link href="/users">Users</Link>
            </li>
            <li>
                <Link href="/users/profile/555">Users 555</Link>
            </li>
        </ul>
    )
}