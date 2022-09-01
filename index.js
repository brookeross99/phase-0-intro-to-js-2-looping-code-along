// Code your solutions in this file
//this is wrong--
//function writeCards= (name) => `Thank you,${name}, for the wonderful surprise gift! `

//const name = ["Guadalupe","Ollie","Aki",]
//failed test:
// function writeCards(name,event){
//     let i=0;
//     while(i<name.length){
//         console.log(`Thank you,${name[i]},for the wonderful ${event} gift!`);
//         i++;
//     }
//     return name
// }
// writeCards(name);

function writeCards(name,event){
    const thankYouCards = []
    for(let i=0; i<name.length; i++){
        thankYouCards.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`)
       // debugger;
    }
    return thankYouCards
}
//writeCards(name);

function countDown(number){
   while(number>0){
        console.log(number);
        number-=1;
        debugger;
    }
    console.log(number);
}