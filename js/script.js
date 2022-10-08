"use strict";

/*

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana 
(con massimo due decimali, per indicare centesimi sul prezzo). */


const mybtn = document.getElementById('ticket-price');

// console.log(mybtn);

const ticketCalc = function(){
    let km = parseInt(document.getElementById('km').value);
    let age = parseInt(document.getElementById('age').value);

    // console.log(km);
    // console.log(age);

    if(isNaN(km) || isNaN(age)) {
        alert('Inserisci dei valori validi!');
    }


    const priceKm = 0.21;
    const totalPrice = priceKm * km;

    // console.log(priceKm);
    // console.log(totalPrice);

    const ds20 = totalPrice * 0.2;
    const ds40 = totalPrice * 0.4;

    // console.log(ds20);
    // console.log(ds40);


    let finalPrice;


    if(age < 18){
    finalPrice = totalPrice - ds20;
    // console.log(finalPrice);

    } else if(age >= 65){ 
    finalPrice = totalPrice - ds40;
    // console.log(finalPrice);
    } else{
    finalPrice = totalPrice;
    // console.log(finalPrice);
    }

    finalPrice.toFixed(2);
    // console.log(finalPrice.toFixed(2));

    const message = document.getElementById('message');

     message.innerHTML = `
        <div class="fs-3 py-2">La tua età: ${age}</div>
        <div class="fs-3 py-2">Il costo del tuo biglietto: ${finalPrice.toFixed(2)}€</div>
        <div class="pt-4">Se hai meno di 18 anni hai uno sconto del <span class="red">20%!</span>
        <div class="pt-2">Se hai più di 65 anni hai uno sconto del <span class="red">40%!</span>
    `;
    console.log(message);
} 




mybtn.addEventListener('click', ticketCalc);









// const element = document.getElementById('ticket-price').innerHTML = finalPrice;
