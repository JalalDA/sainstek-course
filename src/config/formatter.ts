export const formatter = (nominal : number)=>{
    return `IDR ${nominal.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}`
}