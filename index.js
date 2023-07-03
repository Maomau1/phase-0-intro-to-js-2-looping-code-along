// Code your solutions in this file

/*for (let age = 30; age <40; age++) {
    //debugger;
    console.log(`I'm ${age} years old. Happy birthday to me!`);
   // debugger;
}

const gifts = [`teddy bear`, `drone`, `doll`];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log (`Wrapped ${gifts[i]} and added a bow!`);
        debugger;
    }

    return gifts;
}

wrapGifts(gifts);

function wrapGiftsW(gifts) {
    let i = 0;
    while (i < gifts.length) {
        console.log (`Wrapped ${gifts[i]} and added a bow!`);
        i++;
    }
    return gifts;
}

wrapGiftsW(gifts); */

function countDown(start) {
    for ( let i = start; i>= 0; i--) {
        console.log(i)
    }

}


/*const list = [mau, mom, mee];
const gift = `my g`;*/
function writeCards (list, gift) {
    const newArray = [];
    for (let i = 0; i < list.length; i++) {
        newArray [i] = `Thank you, ${list[i]}, for the wonderful ${gift} gift!`;
        //debugger;
    } 
    return newArray;
    
}