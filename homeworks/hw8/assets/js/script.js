function averageThreeNumbers(a, b, c) {
    let sum = a + b + c;
    let total = 3;
    return sum / total;
}

function createSentence (d, e){
    let noun = d; 
    let num = e; 
    let phrase = "On average, a Berkeley student has "; 
    return phrase = phrase.concat(phrase , num ,  noun); 
}

function getRandomNum (rando){
    let max = rando; 
    return Math.round(Math.random(max) * 10); 
}//still cant figure this out

//let x = getRandomNum(max = 20);
let x = getRandomNum(200);

//let y = getRandomNum(max = 10);
let y = getRandomNum(100);
//let z = getRandomNum(max = 13);
let z = getRandomNum(130);

let avg = Math.round(averageThreeNumbers(x,y,z)); 

let sentence = createSentence( " dogs", avg);

console.log(sentence);
