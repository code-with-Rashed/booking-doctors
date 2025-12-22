function weekdayMatching(weekdayNames) {
    const date = new Date();
    const weekday = date.toLocaleDateString("en-us", { weekday: "long" });
    const founded = weekdayNames.find((day) => day == weekday)
    if (founded) return true;
}
export default weekdayMatching;