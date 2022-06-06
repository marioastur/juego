const gameVerbs = createVerbs
const gameMap = createMap
const gameMessage = createMessage

let textDescription = new String

// INICIO DE JUEGO
let player = { position: [0, 0] ,objetcs:[]}
printDescriptionBox(gameMessage().get('welcome'))
positionPlayer(player.position[0], player.position[1])



// CAPTURA DE EVENTOS
const orderButton = document.getElementById('do')
orderButton.onclick = eventGame


//#############################################
//############  F U N C I O N E S  ############
//#############################################

function positionPlayer(x, y) {
    printDescriptionBox(gameMap()[x][y].description)
}


function printDescriptionBox(text) {
    let today = new Date()
    timeZone = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds() + ' -'
    textDescription = timeZone + '> ' + text + '<br>' + textDescription
    document.getElementById('description').innerHTML = textDescription
}


function eventGame() {

    let initialPlayerOrder = document.getElementById('commands').value.trim()
  
    if (initialPlayerOrder === '') {
        printDescriptionBox(gameMessage().get('separate'))
        positionPlayer(player.position[0], player.position[1])
        printDescriptionBox(gameMessage().get('noWord'))
        return
    }

    let playerOrderArray = initialPlayerOrder.toLowerCase().split(' ')

    if (!playerOrderArray[1]) {
        printDescriptionBox(gameMessage().get('noWord'))
        return
    }

    if (!gameVerbs().has(playerOrderArray[0])) {
        printDescriptionBox(gameMessage().get('noVerb'))
        return
    }

    let exitsRoomArray = gameMap()[player.position[0]][player.position[1]].exits

    if (exitsRoomArray.includes(playerOrderArray[1])) {
        movePlayer(playerOrderArray[1])
    }
}

//#############################################
//#######  ACCIONES Y MOVIMIENTOS     #########
//#############################################
function movePlayer(dir) {
    let actualPosition = player.position
    if (dir==='n') {
        actualPosition[1]++
    }
    if (dir==='s') {
        actualPosition[1]--
    }
    if (dir==='e') {
        actualPosition[0]++
    }
    if (dir==='w') {
        actualPosition[0]--
    }
    if (dir==='z') {
        positionPlayer(1, 1)
        return
    }
    positionPlayer(actualPosition[0], actualPosition[1])
    return
}

function takeObject(dir) {
    console.log('Coger objeto')
}

function useObject(dir) {
    return 'Usar objeto'
}

function whatchObject(dir) {
    console.log('Ver objeto')
}

function speakPlayer(dir) {
    console.log('Jugador habla')
}


//#############################################
//############  MAPAS Y ARRAYS     ############
//#############################################
function createMap() {
    const gameRooms = [
        [],
        [],
        [],
        []
    ]
    gameRooms[0][0] = { description: 'Descripción Sala 00', exits: ['n'] }
    gameRooms[0][1] = { description: 'Descripción Sala 01', exits: ['n', 's'] }
    gameRooms[0][2] = { description: 'Descripción Sala 02', exits: ['s', 'e'] }
    gameRooms[0][3] = { description: 'Descripción Sala 03', exits: ['e','z'] }
    gameRooms[1][0] = { description: 'Descripción Sala 10', exits: ['e'] }
    gameRooms[1][1] = { description: 'Descripción sala 11', exits: ['z'] }
    gameRooms[1][2] = { description: 'Descripción sala 12', exits: ['e', 'w'] }
    gameRooms[1][3] = { description: 'Descripción sala 13', exits: ['e', 'w'] }
    gameRooms[2][0] = { description: 'Descripción sala 20', exits: ['n', 'e', 'w'] }
    gameRooms[2][1] = { description: 'Descripción sala 21', exits: ['s'] }
    gameRooms[2][2] = { description: 'Descripción sala 22', exits: ['e', 'w'] }
    gameRooms[2][3] = { description: 'Descripción sala 23', exits: ['e', 'w'] }
    gameRooms[3][0] = { description: 'Descripción sala 30', exits: ['n' ,'w'] }
    gameRooms[3][1] = { description: 'Descripción sala 31', exits: ['n', 's'] }
    gameRooms[3][2] = { description: 'Descripción sala 32', exits: ['n', 's', 'w'] }
    gameRooms[3][3] = { description: 'Descripción sala 33', exits: ['s', 'w'] }
    return gameRooms
}

function createVerbs() {
    const verbs = new Map
    verbs.set('ir', { do: movePlayer })
    verbs.set('coger', { do: takeObject })
    verbs.set('usar', { do: useObject })
    verbs.set('ver', { do: whatchObject })
    verbs.set('hablar', { do: speakPlayer })
    return verbs
}

function createMessage() {
    const messages = new Map
    messages.set('welcome', '<strong>Bienvenido al juego</strong>')
    messages.set('noMove', 'No se puede mover en esa dirección')
    messages.set('noWord', 'No puedo entenderte. ¿Que quieres hacer?')
    messages.set('noVerb', '<span class="error">No puedo entender esa orden.</span>')
    messages.set('separate', '------------------')
    return messages
}