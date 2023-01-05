interface Person {
    readonly id: number;
    name: string;
    age: number;
    google_username?: string;
    getaddress(): string;
}

const person: Person = {
    id: 1,
    name: 'John Doe',
    age: 30,
    getaddress(): string {
        return '123 Main St';
    }
}
