function identity<T>(arg: T): T {
    return arg;
}

interface GenericIdentityFn {
    name: string;
}

identity<GenericIdentityFn>({ name: "John Doe" });

function loggingIdentity<T>(arg: T[]): T[] {
    console.log(arg.length);
    return arg;
}

const getProducts = <T>(products: T[]): T[] => {
    return products;
}

const products = getProducts<string>(["shoes", "socks",
    "shirts", "pants"]);
console.log(products);
