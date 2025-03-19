// inizializzo variabili

let n = 100
let msgTre = `Fizz`
let msgCinque = `Buzz`
let msgTreCinque = `FizzBuzz`

// corpo del programma

for( let i=1; i<=n; i++){
    
    if(i % 3 == 0){
        console.log(msgTre)
    }

    else if(i % 5 == 0){
        console.log(msgCinque)
    }    

    else if((i % 3 == 0)&&(i % 5 == 0)){
        console.log(msgTreCinque)
    } 
    
    else{
        console.log(i)
    }
}