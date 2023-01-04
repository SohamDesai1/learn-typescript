"use strict";
function calculateTax(amount, year, month = 6) {
    if (year < 2018 || month < 7) {
        return amount * 1.2;
    }
    return amount * 1.5;
}
calculateTax(100, 2018);
