// import Link from "next/link"
import { Link, animateScroll as scroll } from "react-scroll";
const NavLink = ({href, title}) =>{
    return (
        <Link
            activeClass="active"
            to={href}
            spy={true}
            smooth={true}
            href={href}
            offset={-80}
            className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
            // onClick={() => window.location.replace(href)}
        >
            {title}
        </Link>
    );
};

export default NavLink;