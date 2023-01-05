"use strict";
function meterToCm(meter) {
    if (typeof meter === "number") {
        return meter * 100;
    }
    else
        return parseFloat(meter) * 100;
}
meterToCm(1);
meterToCm("1");
