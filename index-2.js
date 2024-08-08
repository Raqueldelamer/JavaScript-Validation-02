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
function tellFortune(nameFirst) {
    let n = longName(nameFirst);
    if(n) {
        console.log(`${nameFirst} , marriage is on the far horizon. Start adopting cats!`)
    } else {
        console.log(`${nameFirst} , you will marry sooner than later.`)
    }
    }

