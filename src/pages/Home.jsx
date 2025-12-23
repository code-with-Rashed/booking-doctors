import Banner from "../assets/banner-img-1.png"
import Achievements from "../components/Achievements";
import DoctorsList from "../components/DoctorsList";
import PageTitle from "../utilities/pageTitle";

function Home() {
    return (
        <>
            <PageTitle title="Home Page" />
            <section className="bg-base-200 shadow-md border-3 border-base-100 rounded-lg w-[90%] mx-auto py-10">
                <div className="w-[70%] mx-auto text-center my-5">
                    <h1 className="font-bold text-xl mb-4">Dependable Care, Backed by Trusted Professionals.</h1>
                    <p>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
                </div>
                <div className="w-[50%] mx-auto flex items-center flex-wrap md:flex-nowrap gap-2 justify-between">
                    <label className="input rounded-full basis-1/1">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input type="search" required placeholder="Search any doctor..." />
                    </label>
                    <button className="btn btn-primary rounded-full">Search Now</button>
                </div>
                <div className="w-[80%] mx-auto flex justify-between mt-8">
                    <img src={Banner} alt="banner" className="w-[49%]" />
                    <img src={Banner} alt="banner" className="w-[49%]" />
                </div>
            </section>
            <DoctorsList />
            <Achievements />
        </>
    )
}
export default Home;