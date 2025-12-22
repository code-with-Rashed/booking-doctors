import { useParams } from "react-router";
import { PiTrademarkRegistered } from "react-icons/pi";
import useFetch from "../hooks/useFetch";
import weekdayMatching from "../utilities/weekdayMatching";
function DoctorsProfile() {
    const params = useParams();
    const id = Number(params.id)
    const { hasError, isLoading, data } = useFetch();
    if (isLoading) return <h1>Loading...</h1>
    if (hasError) return <h1>Error...</h1>
    const doctor = data.find(doctor => doctor.id === id);
    return (
        <section className="w-[80%] mx-auto my-10">
            <div className="bg-base-300 rounded-2xl text-center p-10">
                <div className="w-[70%] mx-auto text-center my-5">
                    <h1 className="font-bold text-xl mb-4">Doctor's Profile Details.</h1>
                    <p>We connect patients with highly qualified and experienced doctors list across Bangladesh through detailed, credible profiles featuring professional qualifications, areas of expertise</p>
                </div>
            </div>
            <div className="card lg:card-side bg-base-300 rounded-2xl my-10 p-10">
                <figure>
                    <img
                        src={doctor.image}
                        alt="Doctor"
                        className="rounded-xl h-90 w-full"
                    />
                </figure>
                <div className="card-body">
                    <div>
                        <h2 className="card-title">{doctor.name}</h2>
                        <div className="my-4 text-sm/6 text-gray-600">
                            {doctor.education}
                            <span className="font-semibold">{doctor.speciality}</span> Specialist.
                            <div className="badge badge-soft">{doctor.experience} Experience</div>
                        </div>
                        <p className="mb-2 text-sm/6 text-gray-700">Working at</p>
                        <p className="font-semibold">{doctor.working_at}</p>
                        <p className="flex items-center my-4 border-y border-dashed py-3"><PiTrademarkRegistered className="me-1" /> Reg No: {doctor.registration_number}</p>
                        <div>
                            <span className="font-bold me-2">Availablity</span>
                            {doctor.working_days.map((day, i) => <div className="badge badge-warning mx-1 font-semibold" key={i}>{day}</div>)}
                        </div>
                        <p className="mt-4"><span className="font-bold me-2">Consultation Fee:</span><span className="font-bold me-2 text-primary">Taka : {doctor.fees} <span className="font-normal text-gray-500">(inc vat)</span> Per Consultation</span></p>
                    </div>
                </div>
            </div>
            <div className="bg-base-300 rounded-2xl p-10">
                <h1 className="font-bold text-xl mb-4 text-center">Book An Appointment</h1>
                <div className="border-y border-dashed py-4 my-4 flex justify-between items-center">
                    <span className="font-bold">Availability</span>
                    {weekdayMatching(doctor.working_days) ? (<div className="badge badge-primary font-semibold">Doctot Available Today</div>) : (<div className="badge badge-error font-semibold">Doctot Not Available Today</div>)}
                </div>
                {
                    weekdayMatching(doctor.working_days) && <div className="badge badge-warning h-full">
                        <svg className="size-[1em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18"><g fill="currentColor"><path d="M7.638,3.495L2.213,12.891c-.605,1.048,.151,2.359,1.362,2.359H14.425c1.211,0,1.967-1.31,1.362-2.359L10.362,3.495c-.605-1.048-2.119-1.048-2.724,0Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><line x1="9" y1="6.5" x2="9" y2="10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></line><path d="M9,13.569c-.552,0-1-.449-1-1s.448-1,1-1,1,.449,1,1-.448,1-1,1Z" fill="currentColor" data-stroke="none" stroke="none"></path></g></svg>
                        Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.
                    </div>
                }
                <button className="btn btn-primary rounded-full w-full mt-8" disabled={!weekdayMatching(doctor.working_days)}>Book Appointment Now</button>
            </div>
        </section>
    )
}
export default DoctorsProfile;