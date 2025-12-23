import { NavLink } from "react-router";
import BASE_URL from "../utilities/baseUrl";
function Links() {
    return (
        <>
            <li key="1"><NavLink to={BASE_URL} className={({ isActive }) => isActive ? "underline bg-base-200" : ""}>Home</NavLink></li>
            <li key="2"><NavLink to={BASE_URL + "/my-bookings"} className={({ isActive }) => isActive ? "underline bg-base-200" : ""}>My-Bookings</NavLink></li>
            <li key="3"><NavLink to={BASE_URL + "/blogs"} className={({ isActive }) => isActive ? "underline bg-base-200" : ""}>Blogs</NavLink></li>
            <li key="4"><NavLink to={BASE_URL + "/contact-us"} className={({ isActive }) => isActive ? "underline bg-base-200" : ""}>Contact Us</NavLink></li>
        </>
    )
}
export default Links;