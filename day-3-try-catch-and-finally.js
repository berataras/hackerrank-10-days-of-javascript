// Try, Catch, and Finally

function reverseString(s) {
    try{
        let numbers = s.split("");
        numbers.reverse();
        const joinNumbers = numbers.join("");
        console.log(joinNumbers);

    }catch(e){
        console.log("s.split is not a function");
        console.log(Number(s));
    }
}
