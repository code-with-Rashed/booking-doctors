import TotalDoctors from "../assets/success-doctor.png"
import TotalStuffs from "../assets/success-staffs.png"
import TotalPatients from "../assets/success-patients.png"
import TotalReview from "../assets/success-review.png"
import CountUp from "react-countup"

function Achievements() {
    return (
        <section className="w-[80%] mx-auto mt-8">
            <div className="w-[72%] mx-auto text-center my-8">
                <h1 className="font-bold text-xl mb-4">We Provide Best Medical Services</h1>
                <p>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-5">
                <div className="card bg-base-100 shadow-md p-5">
                    <figure className="justify-start my-2">
                        <img
                            src={TotalDoctors}
                            alt="Doctor"
                        />
                    </figure>
                    <div>
                        <h2 className="card-title font-bold text-lg"><CountUp end="199" duration="2" enableScrollSpy /> +</h2>
                        <p className="my-2 text-sm/6">Total Doctors</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-md p-5">
                    <figure className="justify-start my-2">
                        <img
                            src={TotalReview}
                            alt="review"
                        />
                    </figure>
                    <div>
                        <h2 className="card-title font-bold text-lg"><CountUp end="200" duration="2" enableScrollSpy /> +</h2>
                        <p className="my-2 text-sm/6">Total Reviews</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-md p-5">
                    <figure className="justify-start my-2">
                        <img
                            src={TotalPatients}
                            alt="patient"
                        />
                    </figure>
                    <div>
                        <h2 className="card-title font-bold text-lg"><CountUp end="1990" duration="2" enableScrollSpy /> +</h2>
                        <p className="my-2 text-sm/6">Total Patients</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-md p-5">
                    <figure className="justify-start my-2">
                        <img
                            src={TotalStuffs}
                            alt="stuff"
                        />
                    </figure>
                    <div>
                        <h2 className="card-title font-bold text-lg"><CountUp end="300" duration="2" enableScrollSpy /> +</h2>
                        <p className="my-2 text-sm/6">Total Stuffs</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Achievements;