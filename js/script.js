/* 
Descrizione:
Proviamo a ripetere quanto visto in classe, creando la struttura che riteniamo più adeguata per rappresentare una carta di Magic.
Una volta definita la struttura, stampiamo sulla pagina HTML tutte le informazioni relative alla carta stessa, 
senza particolare attenzione a dettagli grafici (va bene una lista coi tag UL e LI)
BONUS: provare a creare una funzione che stampi la carta in pagina.
*/








// link to html

const cardDisplay = document.getElementById('card');

//variabili esterne
const nome = 'Grizly bear'
const genericMana = '1';
const forestMana = 'Forest';
const cardPicture = 'img.png';
let cardType = 'creature';
const specification = 'Bear';
const edition = 'X ';
const rarity = 'Common';
const tap = 'tap';
const cardEffect = 'Distruggi tutto';
const cardEffect2 = 'Distruggi ancora';
let cardHistory = 'Orso brutto e cattivo';
const painter = 'Picasso';
const collection = ' 7/300';
const strength = '3';
const costitution = '3';

// verifica presenza degli elementi variabili da carta a carta

if (specification) {
    cardType += ' - '
}

if (cardEffect2) {
    cardHistory = '';
}

// struttura della carta

const card = {

    name: nome,
    summonValue: `${genericMana} ${forestMana}`,
    Picture: cardPicture,
    Description: {
        cardType: cardType,
        specification: specification
    },
    Expansion: {
        edition: edition,
        rarity: rarity
    },
    Text: {
        effect: `${forestMana} ${tap}: ${cardEffect} `,
        history: cardHistory
    },
    References: {
        painter: painter,
        collection: collection
    },
    Power: `${strength}/${costitution}`


};


//stampa in pagina 

// const printCard = ` 
// <ul>
// <li>${card.name}</li>
// <li>${card.summonValue}</li>
// <li>${propertyExtract(card.Description)}</li>
// <li>${propertyExtract(card.Expansion)} </li>
// <li>${propertyExtract(card.Text)} </li>
// <li>${propertyExtract(card.References)} </li>
// <li>${propertyExtract(card.Power)} </li>
// </ul>
// `;

cardDisplay.innerHTML = PrintObject(card);





//functions***************************************************


//estrai proprieta di oggetti
function propertyExtract(obj) {
    let properties = '';
    for (let key in obj) {
        properties += obj[key];
    }
    return properties;
}

//stampa in pagina

function PrintObject(obj) {
    let itemToPrint = '<ul>'
    for (let key in obj) {
        itemToPrint += `<li> ${propertyExtract(obj[key])} </li>`;
    }
    itemToPrint += '</ul>';
    return itemToPrint;
}

PrintObject(card);