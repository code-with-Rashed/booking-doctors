import { PiTrademarkRegistered } from "react-icons/pi";
import { Link } from "react-router";
function Doctor({ doctorData }) {
    return (
        <div className="card bg-base-100 shadow-md p-5">
            <figure>
                <img
                    src={doctorData.image}
                    alt="Doctor"
                    className="rounded-xl h-50 md:h-90 w-full object-fill" />
            </figure>
            <div>
                <div className="my-3">
                    <div className="badge badge-soft badge-success me-1">Available</div>
                    <div className="badge badge-soft badge-primary">{doctorData.experience} Experience</div>
                </div>
                <div className="border-b-1 border-dashed">
                    <h2 className="card-title">{doctorData.name}</h2>
                    <p className="my-2 text-sm/6">{doctorData.education}</p>
                </div>
                <p className="mt-2 text-sm/6 flex items-center"><PiTrademarkRegistered className="me-1" /> Reg No: {doctorData.registration_number}</p>
                <div className="card-actions">
                    <Link to={`/doctors-profile/${doctorData.id}`} className="btn btn-outline rounded-full btn-primary w-[80%] mx-auto my-5">View Details</Link>
                </div>
            </div>
        </div>
    )
}
export default Doctor;