"use client"
import Link from "next/link";
import { usePathname } from "next/navigation"

export default function layout({children}){
    const pathname= usePathname();
    console.log(pathname);
    
    return(
        <div>
        {
                pathname == ["/collage/studentlogin", "/collage/teacherlogin"] ?
            <div>
            <h1 style={{color:"green;"}}>Adminstration portal</h1>
            <ul className="list">
                <li>
                    <Link href="/collage/studentlogin">Teacher login page</Link>
                </li>
                <li>
                    <Link href="/collage/teacherlogin">Student login page</Link>
                </li>
            </ul>
            </div>: null
            }
            {children}
        </div>
    )
}