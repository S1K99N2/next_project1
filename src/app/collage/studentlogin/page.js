import Link from "next/link";

export default function Student(){
    return(
        <div>
            <h2>this student login pages</h2>
            <Link href='/'>go to home page</Link>
            <ul>
                <li>
                    <Link href='/collage/studentlogin/anil'>Anil</Link>
                    <Link href='/collage/studentlogin/niraj'>Niraj</Link>
                    <Link href='/collage/studentlogin/neha'>Neha</Link>
                </li>
            </ul>
        </div>
    )
}