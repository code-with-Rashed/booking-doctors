const BOOKINGS_DATA = "bookings_data";

const getBookingsData = () => {
    const bookedData = localStorage.getItem(BOOKINGS_DATA);
    let data = [];
    if (bookedData) {
        data = JSON.parse(bookedData);
    }
    return data;
}

const saveBookingsData = (data) => {
    const oldData = getBookingsData();
    let newData = [...oldData, data];
    localStorage.setItem(BOOKINGS_DATA, JSON.stringify(newData));
}
export { getBookingsData, saveBookingsData };