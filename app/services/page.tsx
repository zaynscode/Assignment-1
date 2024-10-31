import WebsiteDevelopment from "./Website-Development/page"
import AppDevelopment from "./App-Development/page"
import Navbar from "../navbar/page"
import Link from "next/link"
export default function Services(){
    return(
        <div>
            <Navbar/>
            <br />
            <br />
            
            <h1 className="services">Services Page</h1>
            <div className="courses">
            <h2 className="paragraph">We provide the most demanding education services</h2>
            <h3>Our most popular services are</h3>
            <Link href="/services/Website-Development " target=" ">Website Development</Link><br />
            <Link href="/services/App-Development" target=" ">App Development</Link>
            </div>
        </div>
    )
}