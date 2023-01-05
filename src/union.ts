function meterToCm(meter: number | string): number {
  if (typeof meter === "number") {
    return meter * 100;
  } else return parseFloat(meter) * 100;
}

meterToCm(1); // 100
meterToCm("1"); // 100