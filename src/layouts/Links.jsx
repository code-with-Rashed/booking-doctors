import { NavLink } from "react-router";
function Links() {
    return (
        <>
            <li key="1"><NavLink to="/" className={({ isActive }) => isActive ? "underline bg-base-200" : ""}>Home</NavLink></li>
            <li key="2"><NavLink to="/my-bookings" className={({ isActive }) => isActive ? "underline bg-base-200" : ""}>My-Bookings</NavLink></li>
            <li key="3"><NavLink to="/blogs" className={({ isActive }) => isActive ? "underline bg-base-200" : ""}>Blogs</NavLink></li>
            <li key="4"><NavLink to="/contact-us" className={({ isActive }) => isActive ? "underline bg-base-200" : ""}>Contact Us</NavLink></li>
        </>
    )
}
export default Links;