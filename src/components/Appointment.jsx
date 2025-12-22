import { toast, ToastContainer } from "react-toastify";
import { getBookingsData, saveBookingsData } from "../utilities/handleBookings";
function Appointment({ isDisable, doctorId }) {
    const isAppointmentExist = (id) => {
        const oldAppointment = getBookingsData();
        const exist = oldAppointment.find((data) => data.id === id);
        return exist ? true : false;
    }
    const bookAnAppointment = (id) => {
        if (isAppointmentExist(id)) {
            toast.warn("You have already an appointment!");
        } else {
            saveBookingsData({ id });
            toast("Your appointment is submit.");
        }
    }
    return (
        <>
            <button className="btn btn-primary rounded-full w-full mt-8" disabled={isDisable} onClick={() => bookAnAppointment(doctorId)}>Book Appointment Now</button>
            <ToastContainer />
        </>
    )
}
export default Appointment;