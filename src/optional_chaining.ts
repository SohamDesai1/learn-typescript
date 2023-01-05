type User = {
    name: string;
}

function getUserName(id: number): User | null {
    return id ===0 ? null : { name: 'John Doe' };
}

const userName = getUserName(0)?.name;
console.log(userName);







