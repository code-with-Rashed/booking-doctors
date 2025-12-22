import { useEffect, useState } from "react";
import BookedAppointment from "../components/BookedAppointment";
import useFetch from "../hooks/useFetch"
import { getBookingsData, updateBookingsData } from "../utilities/handleBookings";
import Loading from "../components/Loading";
import Chart from "../components/Chart";
import { toast, ToastContainer } from "react-toastify";
function MyBookings() {

    const { hasError, isLoading, data } = useFetch();
    const [appointmentList, setAppointmentList] = useState([]);

    useEffect(() => {
        const bookedData = getBookingsData();
        if (bookedData.length > 0 && !isLoading) {
            const appointments = [];
            for (const item of bookedData) {
                const foundItem = data.find(d => d.id === item.id);
                if (foundItem) {
                    appointments.push(foundItem);
                }
            }
            setAppointmentList(appointments);
        }
    }, [isLoading,data]);

    const cancelAppointment = (id) => {
        const updateItem = [];
        const updateAppointment = appointmentList.filter(item => {
            if (item.id !== id) {
                updateItem.push({ id: item.id });
                return true;
            }
            return false;
        });
        setAppointmentList(updateAppointment);
        updateBookingsData(updateItem);
        toast("Your appointment is cancelled.");
    }

    if (isLoading) return <Loading />
    if (hasError) return <h1>Error...</h1>

    return (
        <section className="w-[80%] mx-auto my-10">
            <div className="bg-base-100 rounded-2xl p-10 my-6">
                <Chart appointmentList={appointmentList} />
            </div>
            <div className="my-10">
                <div className="w-[72%] mx-auto text-center my-8">
                    <h1 className="font-bold text-xl mb-4">My Today Appointments</h1>
                    <p>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. </p>
                </div>
                {appointmentList.map(appointment => <BookedAppointment appointment={appointment} key={appointment.id} cancelAppointment={cancelAppointment} />)}
            </div>
            <ToastContainer />
        </section>
    )
}
export default MyBookings;
