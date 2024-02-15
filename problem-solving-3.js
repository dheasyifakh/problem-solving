function convertHour(val){
    const timeParts = val.split(':')
    if (timeParts.length !== 2) {
        // Handle incorrect input format
        return "Invalid time format"
    }
    const [time, period] = timeParts;
    const [hours, minutes] = time.split(':').map(Number)

    if(period === 'PM' && hours < 12){
        hours+= 12
    }else if(period === 'AM' && hours === 12){
        hours = 0
    }
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
}

const time12h = '08:30:15AM'
const time24h = convertHour(time12h)
console.log(time24h)