/*
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
I numeri nella lista delle bombe non possono essere duplicati.
In seguito l’utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
*/
const wrapper = document.querySelector("main");
const nBombs= 16;
const bombArr=[ ];

document.getElementById("bottone").addEventListener("click", start);


function start(){
    reset(wrapper);
    const level= document.getElementById("level").value;
    const livelli= [100,81,49];
    const totBox= livelli[level];
    createCont(totBox);
    const bomb=bombGenerator(totBox);
}


/**
 * funzione che genera bombe
 * @param {*} totBox 
 * @returns 
 */
function bombGenerator(totBox) {
    while (bombArr.length<nBombs) {
        const bomb=randomNumber(1 , totBox);

        if (!bombArr.includes(bomb)) {
            bombArr.push(bomb);
        }
    }
    console.log(bombArr);
    return bombArr;
}


/**
 * funzione che aggiunge class active al box
 */
function activated() {
    this.classList.add("active");
    if (bombArr.includes(this.myNumber)) {
        console.log("hai perso");
        this.classList.add("bomb")
    }else{
        console.log("hai vinto");
    }
    console.log(this.myNumber);
    
}

/**
 * funzione che crea la griglia di gioco
 * @param {*} dove 
 * @param {*} n 
 */
function createCont(totBox){
    const container= document.createElement("div");
    container.className="cg-container";
    wrapper.append(container);
    for (let i = 1; i <= totBox; i++) {
        boxCreation(container, i, totBox);
    }
}



/**
 * funzione che crea i box
 * @param {} place 
 */
function boxCreation(dove, n, totBox){
    const box= document.createElement("div");
    box.className="box b"+totBox;
    box.innerHTML=`<span> ${n} </span>`;
    box.myNumber= n;
    dove.append(box);
    box.addEventListener("click", activated)
    return box
}



/**
 * funzione di reset dell'elemento
 * @param {*} place 
 */
function reset(place) {
    place.innerHTML=` `;
}


/**
 * funzione che genera numeri random con un max e min
 * @param {*} min 
 * @param {*} max 
 * @returns 
 */
function randomNumber(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}


















//

/*metto i box all'interno del container */
// console.log(init());
// // function init(){
// //     for (let i = 1; i < 100; i++) {
// //         box= createBox(container,i);
// //     }
// // }


// console.log(createBox(container));
// //creo i box
// function createBox(place,n){
//     const box=document.createElement("div");
//     box.className="box";
//     box.innerHTML=`<span> ${n} </span>`;
//     place.append(box);
//     return box;
// }


// function addNumber(num1,num2){
//     for(let i=0; i<=100; i++){
        
//     }
// }
// console.log(addNumber());



/*ogni bomba è un numero random di un array
se il numero è nell'array allora è una bomba*/