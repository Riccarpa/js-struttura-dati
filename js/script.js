/* 
BONUS:
Filtrare anche altre proprietà i cui valori sono più complessi, se ne avete (oggetti, array di oggetti)
Forza ragazzi! Buon lavoro e buon weekend! :faccia_leggermente_sorridente: (modificato) 
*/

// link to html

let cardDisplay = document.getElementById('card');
const button = document.getElementById('button');
const getAttribute = document.getElementById('attribute');
const getAttributeText = document.getElementById('attribute-text');



// carte

const card = {

    Name: 'Grizly bear',
    SummonValue: ['1', 'Forest'],
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
    Power: '12/11'


};

const card1 = {

    Name: 'Bloodfire colossum',
    SummonValue: ['6', 'Mountain X2'],
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
    Power: '12/12'


};


const card2 = {

    Name: 'Progenitus',
    SummonValue: ['6', 'Mountain X2'],
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
    Power: '12/12'


};



//creo in deck
const deck = [];
deck.push(card, card1, card2);


// impostazione elementi variabili carte deck
for (let i = 0; i < deck.length; i++) {
    let currentObj = deck[i];


    if (currentObj.Description.specification) {
        currentObj.Description.cardType += ' - ';
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

// pulsansi ricerca 

attribute.addEventListener('change', () => {

    getAttributeText.classList.remove('hidden');
})

//filter
button.addEventListener('click', () => {

    let attribute = getAttribute.value;
    let attributeText = getAttributeText.value;

    //filter
    const filteredCards = [];

    for (i = 0; i < deck.length; i++) {
        currentObj = deck[i];

        if (currentObj[attribute].indexOf(attributeText) > 0) {
            filteredCards.push(currentObj);

        }
        if (currentObj[attribute].includes(attributeText)) {
            filteredCards.push(currentObj);

        }



    }

    cardDisplay.innerHTML = mountDeck(filteredCards);



})



//functions***************************************************


//estrai proprieta di oggetti
function propertyExtract(obj) {
    let properties = '';
    for (let key in obj) {
        properties += obj[key];
    }
    return properties;
}

//monto oggetti e array

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
    for (let i = 0; i < arr.length; i++) {
        let currentObj = arr[i];
        itemToPrint.push(mountObject(currentObj));

    }

    return itemToPrint;
}