function getData() { // create funcation for set time
    return new Promise((resolve) =>{ // return  promise put resolve that's means function is complete
        setTimeout(() => { // set timeout putting bcz we are to set the time
            resolve("Async data fetched."); // show the resolve messege after completing time
        }, 9000);// show msg after 9 sec
    });
}

async function fetchData() { // we crate for that reason 1st: handeling the code and 2nd is improve the code readablity and maintainablity
    try{ // try technique of checking code
        console.log("Your data fetching"); // tell the user wait bcz your data is fetching and with the help of that we can improve the user experience and program flow
        const result = await getData();// 1st wait for completing get Data function
        console.log(result);// then console the result
    } 
    catch(error) {// if any erorr occourd
        console.error("Erorr fetching data", error); // print that msg
    }
}

fetchData(); // calling the funcation at the end