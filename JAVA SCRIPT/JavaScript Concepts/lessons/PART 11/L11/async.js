//**async function // */
async function greet() {
    throw "404 page is not found";
    return "hello";
}

greet()
    .then(() =>{
        console.log("promise was resolved");
        console.log("result was:", result);
    })
    .catch((err) => {
        console.log("promise was rejected with err:", err);
    });

    let demo = async () => {
        return 5;
    };

    // console.log(demo);