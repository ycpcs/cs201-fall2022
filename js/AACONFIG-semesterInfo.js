
var semesterInfo = {
    // The dates for the first and last day of classes (not including finals week).
    // Set the time to 4 AM ... because why not.
    firstDayOfSemester: new Date("08/23/2022 4:00:00"),
    lastDayOfSemester:  new Date("12/07/2022 4:00:00"),

    // Specify days on which there are no classes held at the college.
    // Each break is specified by a startDate and an endDate.
    // For single-day breaks, the startDate and endDate are the same.
    vacationDates: [
        new VacationDays("Labor Day",          new Date("09/05/2022"),  new Date("09/05/2022")),
        new VacationDays("Fall Break",         new Date("10/08/2022"), new Date("10/11/2022")),
        new VacationDays("Thanksgiving Break",         new Date("11/23/2022"), new Date("11/27/2022")),
    ]
};
