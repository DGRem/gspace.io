import { Link } from "react-router-dom";


export default function NavBar() {
    return (
        <>
            <nav className="flex justify-evenly mt-5">
                <div>
                    <h3>TEST</h3>
                </div>
                <div>
                    <ul className="flex gap-4">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/booking">Book Now</Link></li>
                        <li><Link to="/gallery">Gallery</Link></li>
                        <li><Link to="/reviews">Reviews</Link></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><Link to="/faq">FAQ</Link></li>
                    </ul>
                </div>
                <div>
                    Login | Register
                </div>
            </nav>
        </>
    )
};