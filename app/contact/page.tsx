import Navbar from "../navbar/page"

function ContactPage() {
    return (
        <div>
            <Navbar />
            <h1 className="C-Heading">Contact us at</h1>
            <ul className="contacts">

                <li>Address:abc street</li> <br />
                <br />
                <li>Phone:030000000 </li><br />
                <li>Gmail:abc@gmail.com </li><br />
            </ul>


        </div>
    )
}

export default ContactPage