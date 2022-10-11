/*Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca. */
const nomeCognome = prompt("Inserisci nome e cognome");
const numeroKm = parseInt(prompt("Quanti Km dovrai percorrere?"));
const etaPasseggero = parseInt(prompt("Quanti anni hai?"));
const prezzoAlKm = 0.21;
const scontoMinorenni = 0.2;
const scontoOver65 = 0.4;
const d = new Date();
const prezzoBiglietto = numeroKm * prezzoAlKm ;
let scontoApplicato;
let prezzoScontato;
let prezzoFinale;

if (etaPasseggero >= 18 && etaPasseggero <= 65) {
  prezzoFinale = prezzoBiglietto.toFixed(2);

  document.getElementById("prezzo-finale").innerHTML = `
  ${prezzoFinale}&euro;
`;
}else if (etaPasseggero < 18) {
  scontoApplicato = prezzoBiglietto * scontoMinorenni ;
  prezzoScontato = prezzoBiglietto - scontoApplicato ;
  prezzoFinale = prezzoScontato.toFixed(2);

  document.getElementById("prezzo-intero").innerHTML = `
  ${prezzoBiglietto}&euro;
`;

  document.getElementById("prezzo-finale").innerHTML = `
  ${prezzoFinale}&euro;
`;

}else {
  scontoApplicato = prezzoBiglietto * scontoOver65 ;
  prezzoScontato = prezzoBiglietto - scontoApplicato ;
  prezzoFinale = prezzoScontato.toFixed(2);

  document.getElementById("prezzo-intero").innerHTML = `
  ${prezzoBiglietto}&euro;
`;

  document.getElementById("prezzo-finale").innerHTML = `
  ${prezzoFinale}&euro;
`;
}

//stampa descrizione
document.getElementById("descrizione").innerHTML = `
  Gentile ${nomeCognome}, <br> 
  le ricordiamo che per viaggiatori <strong class="red"> under 18 </strong> è riservato uno sconto del ${scontoMinorenni * 100}%, <br> 
  mentre per viaggiatori <strong class="red"> over 65 </strong> è riservato uno sconto del ${scontoOver65 * 100}%
`;


//stampa nome e cognome
document.getElementById("nome-cognome").innerHTML = `
  ${nomeCognome}
`;

//stampa data
document.getElementById("data").innerHTML = `
  ${d.getDate()} / ${d.getMonth() + 1} / ${d.getFullYear()}
`;

//stampa distanza
document.getElementById("km").innerHTML = `
  ${numeroKm} Km ----> Ti separano dal tuo sogno
`;

//stampa età
document.getElementById("eta").innerHTML = `
  ${etaPasseggero} anni
`;
