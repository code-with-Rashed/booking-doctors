function BookedAppointment({ appointment, cancelAppointment }) {
    return (
        <div className="bg-base-100 rounded-2xl p-10 my-6">
            <div className="border-b border-gray-400 border-dashed py-4 my-3 flex flex-wrap justify-between items-center">
                <div>
                    <p className="font-bold">{appointment.name}</p>
                    <p className="my-2 text-sm/6 text-gray-600">{appointment.education}</p>
                </div>
                <div className="text-sm/7 text-gray-600">Appointment Fee: {appointment.fees} taka + Vat</div>
            </div>
            <button className="btn btn-outline btn-error rounded-full w-full mt-3 font-bold" onClick={() => cancelAppointment(appointment.id)}>Cancel Appointment</button>
        </div>
    )
}
export default BookedAppointment;