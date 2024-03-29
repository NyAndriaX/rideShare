export function formatDate(date:Date){
    const weekdays: string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const weekday: string = weekdays[date.getDay()];
    const dayOfMonth: number = date.getDate();
    const currentMonth: string = months[date.getMonth()];
    const formattedDate: string = `${weekday}. ${dayOfMonth} ${currentMonth}`;
    
    return formattedDate;
}