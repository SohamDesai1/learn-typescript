interface GenericIdentityFn {
    name: string;
}



function genClasses <T extends GenericIdentityFn, U>(arg1: T, arg2: U): object {
    return {arg1,arg2};
}

genClasses({name: "John Doe"}, 1);