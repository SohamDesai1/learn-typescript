"use strict";
function identity(arg) {
    return arg;
}
identity({ name: "John Doe" });
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
const getProducts = (products) => {
    return products;
};
const products = getProducts(["shoes", "socks",
    "shirts", "pants"]);
console.log(products);
