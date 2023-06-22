
export function getRandomNumber(min, max) {
    if (min > max) {
        [min, max] = [max, min];
    }
    return min + Math.round(Math.random() * (max -min));

}
export function getRandomElement(array) {
    const index = getRandomNumber(0, array.length - 1);
    return array[index];
}
export function getRandomDate(minYear, maxYear) {
    const year = getRandomNumber(minYear, maxYear);
    const month = getRandomNumber(0, 11);
    const day = getRandomNumber(1, 31);
    const date = new Date(year, month, day) ;
    return date;
}

export function getRandomCarNumber(){
    let res = '';
    let count = 7;
    while(count !== 0){
        res += getRandomNumber(0, 9);
        count--;
    }
   return +res;
}