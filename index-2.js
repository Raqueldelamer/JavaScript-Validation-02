let n = longName("Raquel");
console.log(n);



function longName(firstName) {
    let nameLength = firstName.length;
    if(nameLength > 7) {
        return true;
    } else{
        return false;
    }
}

function hasAnI(firstName) {
    let i = firstName.includes("i");
    if(i) {
        return true;
    } else {
        return false;
    }
 }
 
function tellFortune(nameFirst) {
    let x = hasAnI(nameFirst);
    if(x) {
        console.log(`${nameFirst} , you will find a stray cat that will bring you luck!`)
    } else {
        console.log(`${nameFirst} , you will find luck in a foreign country.`)
    }

    let n = longName(nameFirst);
    if(n) {
        console.log(`${nameFirst} , marriage is on the far horizon. Start adopting cats!`)
    } else {
        console.log(`${nameFirst} , you will marry sooner than later.`)
    }
 }

    

    let input1 = "Aprodite";
    let input2 = "Mateo";
    let input3 = "Samantha";
    let input4 = "Raquel";
    let input5 = "Tim";

    tellFortune("Aphrodite");
    tellFortune("Mateo");
    tellFortune("Samantha");
    tellFortune("Raquel");
    tellFortune("Tim");

