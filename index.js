// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    debugger;
  }

  const countDown = function (x) {
    for ( let i=x; i>=0; i--) {
        console.log(i);
    }
  }

  const writeCards = function (array,event) {
    const newArray = [];
    for (let i=0; i<array.length; i++) {
        newArray[i] = `Thank you, ${array[i]}, for the wonderful ${event} gift!` ;

    }
    return newArray;
  }