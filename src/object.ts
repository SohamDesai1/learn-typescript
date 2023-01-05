type Student = {
    name : String,
    age : Number,
    leave:(reason:String) =>void
}

let student : Student = {
    name : "Soham",
    age : 20,
    leave(reason) {
        console.log(reason)
    },
}