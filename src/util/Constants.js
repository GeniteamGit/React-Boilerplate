export const RESPONSE_ENUM = {
    1: 'BEST',
    2: 'OK',
    3: 'WRONG'
}

export const getPercentageChange = (oldNumber, newNumber) => {
    const decreaseValue = newNumber - oldNumber;
    return oldNumber > 0 ? (decreaseValue / oldNumber) * 100 : 100;
}