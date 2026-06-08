// //Destructure

// let names = ["tony", "bruce", "peter", "steve", "xyz", "gulshan"];

// let [winner, runnerup, secondRunnerup, ...others] = names;// ...others likhne par  baki jitne bhi names hai sab store ho jayegi

//Object in destructure

const student = {
    name: "karan",
    age: 14,
    class: 9,
    subjects: ["hindi", "english", "math", "science"],
    username: "karan@123",
    password: "abcd",

};

const { username: user, password: secret, city = "mumbai" } = student;