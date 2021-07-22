/* 
Descrizione:
Proviamo a ripetere quanto visto in classe, creando la struttura che riteniamo più adeguata per rappresentare una carta di Magic.
Una volta definita la struttura, stampiamo sulla pagina HTML tutte le informazioni relative alla carta stessa, 
senza particolare attenzione a dettagli grafici (va bene una lista coi tag UL e LI)
BONUS: provare a creare una funzione che stampi la carta in pagina.
*/


// link to html

const cardDisplay = document.getElementById['card'];

//variabili esterne
const nome = 'Grizly bear'
const genericMana = '1';
const forestMana = 'Forest';
const cardPicture = 'img.png';
const cardType = 'creature';
const specification = 'Bear';
const edition = 'X';
const rarity = 'Common';
const tap = 'tap';
const cardEffect = 'Distruggi tutto';
const cardHistory = 'Orso brutto e cattivo';
const painter = 'Picasso';
const collection = '7/300';
const strength = '3';
const costitution = '3';






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
    Power: {
        strength: strength,
        costitution: costitution
    }


}