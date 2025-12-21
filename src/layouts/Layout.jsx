import { Outlet } from "react-router"
import Footer from "./Footer"
import Navbar from "./Navbar"

function Layout() {
    return (
        <div className="bg-gray-200">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}
export default Layout