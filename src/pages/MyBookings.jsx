import Chart from "../assets/chart.jpeg"
function MyBookings() {
    return (
        <section className="w-[80%] mx-auto my-10">
            <div>
                <img src={Chart} alt="Chart" className="rounded-xl" />
            </div>
            <div className="my-10">
                <div className="w-[72%] mx-auto text-center my-8">
                    <h1 className="font-bold text-xl mb-4">My Today Appointments</h1>
                    <p>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. </p>
                </div>
                <div className="bg-base-100 rounded-2xl p-10 my-6">
                    <div className="border-b border-gray-400 border-dashed py-4 my-3 flex justify-between items-center">
                        <div>
                            <p className="font-bold">Dr. Cameron Williamson</p>
                            <p className="my-2 text-sm/6 text-gray-600">MBBS, MD General Medicine, DNB</p>
                        </div>
                        <div className="text-sm/7 text-gray-600">Appointment Fee: 950 taka + Vat</div>
                    </div>
                    <button className="btn btn-outline btn-error rounded-full w-full mt-3 font-bold">Cancel Appointment</button>
                </div>
                <div className="bg-base-100 rounded-2xl p-10 my-6">
                    <div className="border-b border-gray-400 border-dashed py-4 my-3 flex justify-between items-center">
                        <div>
                            <p className="font-bold">Dr. Cameron Williamson</p>
                            <p className="my-2 text-sm/6 text-gray-600">MBBS, MD General Medicine, DNB</p>
                        </div>
                        <div className="text-sm/7 text-gray-600">Appointment Fee: 950 taka + Vat</div>
                    </div>
                    <button className="btn btn-outline btn-error rounded-full w-full mt-3 font-bold">Cancel Appointment</button>
                </div>
                <div className="bg-base-100 rounded-2xl p-10 my-6">
                    <div className="border-b border-gray-400 border-dashed py-4 my-3 flex justify-between items-center">
                        <div>
                            <p className="font-bold">Dr. Cameron Williamson</p>
                            <p className="my-2 text-sm/6 text-gray-600">MBBS, MD General Medicine, DNB</p>
                        </div>
                        <div className="text-sm/7 text-gray-600">Appointment Fee: 950 taka + Vat</div>
                    </div>
                    <button className="btn btn-outline btn-error rounded-full w-full mt-3 font-bold">Cancel Appointment</button>
                </div>
            </div>
        </section>
    )
}
export default MyBookings