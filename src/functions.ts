function calculateTax(amount: number,year:number,month = 6) : number {
    if (year < 2018 || month < 7) {
        return amount * 1.2;
    }
    return amount * 1.5;
}

calculateTax(100,2018);
