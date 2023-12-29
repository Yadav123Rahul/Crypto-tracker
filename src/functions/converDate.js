
export function converDate(number) {
    // console.log(number,">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
    const date = new Date(number);
    const newDate = date.getDate() + '/' + (date.getMonth()+1);
    return newDate;
  
}
