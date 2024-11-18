import {Link} from "react-router-dom"
//import React Icons.................
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

export default function Header(){
    return(
        <nav>
            <div className="container nav-container">
                <Link className="nav-logo" to={'/'}>
                <h3>B B<span>OOK</span>S</h3>
                </Link>
                <ul className="nav-menu">
                    <li><Link to={'/profile'}>Views</Link></li>
                    <li><Link to={'/create'}>Create Posts</Link></li>
                    <li><Link to={'/authors'}>Authors</Link></li>
                    <li><Link to={'/logout'}>Logout</Link></li>
                </ul>

    <button className="nav-toggle-button btn ">
    <FaBars />
    <AiOutlineClose />
    </button>
    </div>
        </nav>
    )
}