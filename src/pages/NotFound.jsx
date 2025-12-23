import { TbError404 } from "react-icons/tb";
import { Link } from "react-router";
import PageTitle from "../utilities/pageTitle";
function NotFound() {
    return (
        <>
            <PageTitle title="404 page not found!" />
            <div className="bg-base-300 rounded-2xl p-10 w-[80%] mx-auto my-10">
                <div role="alert" className="alert alert-warning alert-soft w-[60%] mx-auto">
                    <TbError404 className="text-2xl" />
                    <span>Oops Invalid Page address!</span>
                    <Link to="/" className="underline text-primary">Go to Home Page</Link>
                </div>
            </div>
        </>
    )
}
export default NotFound;