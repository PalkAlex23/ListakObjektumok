export function konzolraIr (lista) {
    /* a SZEMÉLYLISTA adatait kiírja a konzolra
    nev: "Géza"; tel: 06-30-4454564 */

    // console.log(SZEMELYLISTA[1].tel)
    for (let i = 0; i < lista.length; i++) {
        console.log(`név: ${lista[i].nev}, tel: ${lista[i].tel}`)
    }
}

export function listaOsszealliit(lista) {
    let txt = "<ul>"
    for (let index = 0; index < lista.length; index++) {
        txt += `<li>név: ${lista[index].nev}, tel: ${lista[index].tel}</li>`
    }
    txt += "</ul>"
    console.log(txt)
    return txt
}

export function kartyaRakas(lista) {
    let txt = "";
    for (let index = 0; index < lista.length; index++){
        txt += `<div class="kartya">`
        txt += `<h1>név: ${lista[index].nev}</h1><p>súly: ${lista[index].suly}</p><p>tel: ${lista[index].tel}</p>`
        txt += `</div>`
        console.log(txt)
    }
    return txt
}