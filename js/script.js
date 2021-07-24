/* 


Completiamo il nostro archivio delle carte aggiungendo i seguenti step:
Creiamo un mazzo di carte
Stampiamo tutte  le carte su schermo
Aggiungiamo un piccolo form in HTML
Ragioniamo pian pianino sulla logica dei filtri
:avviso:IMPORTANTE:avviso:
Siccome siete stati troppo bravi a creare un oggetto card molto complesso, è molto complicato riuscire a filtrare tutte le proprietà.
PERTANTO IL MINIMO RICHIESTO E':
 Filtrare prima le proprietà con valori semplici (stringhe o numeri)
Filtrare le proprietà il cui valore è un array di stringhe
BONUS:
Far sì che se filtro una proprietà con valore stringa, riesca a mostrare la carta anche se non scrivo il suo testo interamente (es: cerco il nome digitando "creat" e riesco a trovare nei risultati le carte che hanno nel nome "creatura")
Filtrare anche altre proprietà i cui valori sono più complessi, se ne avete (oggetti, array di oggetti)
Forza ragazzi! Buon lavoro e buon weekend! :faccia_leggermente_sorridente: (modificato) 
*/




// link to html

const cardDisplay = document.getElementById('card');



// carte

const card = {

    Name: 'Grizly bear',
    SummonValue: '1 Forest',
    Picture: 'Img.png',
    Description: {
        cardType: 'Creature',
        specification: 'Bear'
    },
    Expansion: {
        edition: 'X ',
        rarity: 'Common'
    },
    Text: {
        effect: 'Mana tap: Distruggi tutto <br>',
        cardEffect2: '',
        history: 'Orso brutto e cattivo'
    },
    References: {
        painter: 'Picasso ',
        collection: '7/300'
    },
    Power: '3/3'


};

const card1 = {

    Name: 'Bloodfire colossum',
    SummonValue: '6, Mountain X2 ',
    Picture: 'Img.png',
    Description: {
        cardType: 'Creature',
        specification: 'Giant'
    },
    Expansion: {
        edition: '9 ',
        rarity: 'Rare'
    },
    Text: {
        effect: 'Mana tap: Distruggi tutto <br>',
        cardEffect2: 'Mana tap: Distruggi tutto <br>',
        history: 'Gigante brutto e cattivo'
    },
    References: {
        painter: 'Rothko ',
        collection: '2/200'
    },
    Power: '6/6'


};


const card2 = {

    Name: 'Progenitus',
    SummonValue: '6, palude X2 ',
    Picture: 'Img.png',
    Description: {
        cardType: 'Creatura Leggendaria',
        specification: 'Idra'
    },
    Expansion: {
        edition: '11 ',
        rarity: 'Mitica'
    },
    Text: {
        effect: 'Mana tap: Distruggi tutto <br>',
        cardEffect2: 'Mana tap: Distruggi tutto <br>',
        history: 'Idra brutta e cattivo'
    },
    References: {
        painter: 'Kandinsky ',
        collection: '4/100'
    },
    Power: '10/12'


};



//creo in deck
const deck = [];
deck.push(card, card1, card2);



// impostazione elementi variabili da carta a carta

for (let i = 0; i < deck.length; i++) {
    let currentObj = deck[i];


    if (currentObj.Description.specification) {
        currentObj.Description.cardType = ' - ';
    }
    if (currentObj.Text.cardEffect2) {
        currentObj.Text.history = '';
        currentObj.Text.cardEffect2 = `Effect 2:
        ${currentObj.Text.cardEffect2}`;
    }
    if (currentObj.Text.effect) {
        currentObj.Text.effect = ` <br> Effect:
        ${currentObj.Text.effect}`;
    }
    if (currentObj.Text.history) {
        currentObj.Text.history = `History: ${currentObj.Text.history}`
    }


}



// stampo il deck


cardDisplay.innerHTML = mountDeck(deck);









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

function mountObject(obj) {
    let itemToPrint = '<ul>'
    for (let key in obj) {
        itemToPrint += `<li> <strong>${key}:</strong> ${propertyExtract(obj[key])} </li>`;
    }
    itemToPrint += '</ul>';
    return itemToPrint;
}


function mountDeck(arr) {
    let itemToPrint = [];
    for (let i = 0; i < deck.length; i++) {
        let currentObj = deck[i];
        itemToPrint.push(mountObject(currentObj));

    }

    return itemToPrint;
}