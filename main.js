import { SZEMELYLISTA } from "./adat.js";
import { konzolraIr } from "./fuggvenyek.js"
import { listaOsszealliit } from "./fuggvenyek.js";
import { kartyaRakas } from "./fuggvenyek.js";

const a = 2
// a = 3  -  hibaüzenet

const LISTA = ["Géza", "Jenő"]

console.log(LISTA[0])

LISTA[10] = "Béla"

LISTA.push("Jakab") /* A lista végére elhelyez egy elemet */
LISTA.pop() /* leveszi a lista utolsó elemét */

/* egyszerű adatszerkezet esetén, konstanssal deklarált változó értékét nem írható felül */
/* összetett adatszerkezet esetén, - mint pl: lista és objektum - , konstal való deklaráláskor a lista memória címe nem változtatható, viszont az értékei igen, módosíthatom az elemeit, törölhetek a listából, vagy adhatok hozzá */

console.log(LISTA)
console.log(LISTA[5])

konzolraIr(SZEMELYLISTA)

const FELSELEM = document.querySelector("#felsorolas")
console.log(FELSELEM)
FELSELEM.innerHTML="<h1>Ügyesek vagyunk!</h1>"
FELSELEM.innerHTML += listaOsszealliit(SZEMELYLISTA)


const KARTYAK = document.querySelector("#kartyakontener")
console.log(KARTYAK)
KARTYAK.innerHTML = kartyaRakas(SZEMELYLISTA)