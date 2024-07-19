export const Formatter = (value:number|string|undefined) => {
    return  value?.toLocaleString('en-US',{
        style:'currency',
        currency:'USD',
    })
}