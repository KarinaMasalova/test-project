const roundNumber = (num, decimalPlaces) => {
    const factorOfTen = 10 ** decimalPlaces;
    return Math.round(num * factorOfTen) / factorOfTen
};

export default roundNumber;