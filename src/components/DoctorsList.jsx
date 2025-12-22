import useFetch from "../hooks/useFetch";
import Doctor from "./Doctor";
import Loading from "./Loading";
function DoctorsList() {
    const { hasError, isLoading, data } = useFetch();
    if (isLoading) return <Loading />
    if (hasError) return <h1>Error...</h1>

    return (
        <section className="w-[80%] mx-auto mt-8">
            <div className="w-[72%] mx-auto text-center my-5">
                <h1 className="font-bold text-xl mb-4">Our Best Doctors</h1>
                <p>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-5">
                {data.map(doctor => <Doctor doctorData={doctor} key={doctor.id} />)}
            </div>
            <button className="btn btn-primary rounded-full w-[20%] mx-auto block my-6">View All Doctors</button>
        </section>
    )
}
export default DoctorsList;