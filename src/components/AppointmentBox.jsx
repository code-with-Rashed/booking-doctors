import Appointment from "./Appointment";
import weekdayMatching from "../utilities/weekdayMatching";
function AppointmentBox({ working_days, doctorId }) {
    const isMatchDay = weekdayMatching(working_days);
    return (
        <div className="bg-base-300 rounded-2xl p-10">
            <h1 className="font-bold text-xl mb-4 text-center">Book An Appointment</h1>
            <div className="border-y border-dashed py-4 my-4 flex justify-between items-center">
                <span className="font-bold">Availability</span>
                {isMatchDay ? (<div className="badge badge-primary font-semibold">Doctot Available Today</div>) : (<div className="badge badge-error font-semibold">Doctot Not Available Today</div>)}
            </div>
            {
                isMatchDay && <div className="badge badge-warning h-full">
                    <svg className="size-[1em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18"><g fill="currentColor"><path d="M7.638,3.495L2.213,12.891c-.605,1.048,.151,2.359,1.362,2.359H14.425c1.211,0,1.967-1.31,1.362-2.359L10.362,3.495c-.605-1.048-2.119-1.048-2.724,0Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><line x1="9" y1="6.5" x2="9" y2="10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></line><path d="M9,13.569c-.552,0-1-.449-1-1s.448-1,1-1,1,.449,1,1-.448,1-1,1Z" fill="currentColor" data-stroke="none" stroke="none"></path></g></svg>
                    Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.
                </div>
            }
            <Appointment isDisable={!isMatchDay} doctorId={doctorId} />
        </div>
    )
}
export default AppointmentBox;