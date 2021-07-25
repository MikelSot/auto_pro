export const hourSelected =(hourAppointment, dateForm)=> {
    const rgAMOrPM = /([a-zA-Z])/;
    const number = hourAppointment.split(rgAMOrPM)
    // 2021-07-18 15:00:00.574000 +00:00
    if (number[0] > 7 && number[0] < 13){
        const hourAM = `${dateForm}T${number[0]}:00:00.000Z`;
        return hourAM
    }

    if (number[0] > 0 && number[0] < 8){
        let hourPM;
        if (number[0] === "1"){
            hourPM = `${dateForm}T13:00:00.000Z`;
        }

        if (number[0] === "2"){
            hourPM = `${dateForm}T14:00:00.000Z`;
        }

        if (number[0] === "3"){
            hourPM = `${dateForm}T15:00:00.000Z`;
        }

        if (number[0] === "4"){
            hourPM = `${dateForm}T16:00:00.000Z`;
        }

        if (number[0] === "5"){
            hourPM = `${dateForm}T17:00:00.000Z`;
        }

        if (number[0] === "6"){
            hourPM = `${dateForm}T18:00:00.000Z`;
        }

        if (number[0] === "7"){
            hourPM = `${dateForm}T19:00:00.000Z`;
        }
        return hourPM
    }
}