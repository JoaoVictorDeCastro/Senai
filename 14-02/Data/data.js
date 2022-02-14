class Date {
    day;
    month;
    year;

    constructor(day, month, year) {
        this.day = day;
        this.month = month;
        this.year = year;
    }
    status() {
        console.log(day + "/" + month + "/" + year);
    }
}
var date = new Date(19, "Abril", 2022);
date.status();