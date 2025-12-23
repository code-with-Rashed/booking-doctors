import { useParams } from "react-router";
import { PiTrademarkRegistered } from "react-icons/pi";
import useFetch from "../hooks/useFetch";
import AppointmentBox from "../components/AppointmentBox";
import Loading from "../components/Loading";
import PageTitle from "../utilities/pageTitle";

function DoctorsProfile() {
    const params = useParams();
    const id = Number(params.id)
    const { hasError, isLoading, data } = useFetch();
    if (isLoading) return <Loading />
    if (hasError) return <h1>Error...</h1>
    const doctor = data.find(doctor => doctor.id === id);
    return (
        <section className="w-[80%] mx-auto my-10">
            <PageTitle title={doctor.name} />
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
            <AppointmentBox working_days={doctor.working_days} doctorId={id} />
        </section>
    )
}
export default DoctorsProfile;