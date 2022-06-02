const gameVerbs = createVerbs
const gameMap = createMap
const gameMessage = createMessage

let textDescription = new String

// INICIO DE JUEGO
let player = { position: [0, 0] }
printDescription(gameMessage().get('welcome'))
positionPlayer(player.position[0], player.position[1])



// CAPTURA DE EVENTOS
const orderButton = document.getElementById('do')
orderButton.onclick = eventGame


//#############################################
//############  F U N C I O N E S  ############
//#############################################

function positionPlayer(x, y) {
    printDescription(gameMap()[x][y].description)
}

function printDescription(text) {
    let today = new Date()
    timeZone = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds() + ' - '
    textDescription = timeZone + ' ' + '> ' + text + '<br>' + textDescription
    document.getElementById('description').innerHTML = textDescription
}

function eventGame() {
    let command = document.getElementById('commands').value
    if (command === '') {
        printDescription(gameMessage().get('separate'))
        positionPlayer(player.position[0], player.position[1])
        printDescription(gameMessage().get('noWord'))
    } else {

        let verbArray = command.toLowerCase().split(' ')

        if (gameVerbs().has(verbArray[0])) {
            console.log('Segimos jugando')
        } else {
            console.log('verbo mal')
            printDescription(gameMessage().get('noVerb'))
        }

        if (!verbArray[1]) {
            printDescription(gameMessage().get('noWord'))
        }
    }
}

//#############################################
//#######  ACCIONES Y MOVIMIENTOS     #########
//#############################################
function movePlayer(dir) {
    let actualPosition = player.position
    switch (dir) {
        case 'n':
            actualPosition[0]++
                positionPlayer(actualPosition[0], actualPosition[1])
            break;
        case 's':
            actualPosition[0]--
                positionPlayer(actualPosition[0], actualPosition[1])
            break;
        case 'e':
            actualPosition[1]++
                positionPlayer(actualPosition[0], actualPosition[1])
            break;
        case 'w':
            actualPosition[1]--
                positionPlayer(actualPosition[0], actualPosition[1])
            break;
        case 'z':
            positionPlayer(1, 1)
            break;
        default:
            break;
    }
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
    gameRooms[0][0] = { description: 'Descripción Sala 00', exits: ['N'] }
    gameRooms[0][1] = { description: 'Descripción Sala 01', exits: ['E', 'W'] }
    gameRooms[0][2] = { description: 'Descripción Sala 02', exits: ['N', 'E', 'W'] }
    gameRooms[0][3] = { description: 'Descripción Sala 03', exits: ['E'] }
    gameRooms[1][0] = { description: 'Descripción Sala 10', exits: ['N', 'S'] }
    gameRooms[1][1] = { description: 'Descripción Sala 11', exits: ['Z'] }
    gameRooms[1][2] = { description: 'Descripción Sala 12', exits: ['S', 'E'] }
    gameRooms[1][3] = { description: 'Descripción Sala 13', exits: ['N', 'W'] }
    gameRooms[2][0] = { description: 'Descripción Sala 20', exits: ['S', 'E'] }
    gameRooms[2][1] = { description: 'Descripción Sala 21', exits: ['E', 'W'] }
    gameRooms[2][2] = { description: 'Descripción Sala 22', exits: ['N', 'E', 'W'] }
    gameRooms[2][3] = { description: 'Descripción Sala 23', exits: ['N', 'W'] }
    gameRooms[3][0] = { description: 'Descripción Sala 30', exits: ['E'] }
    gameRooms[3][1] = { description: 'Descripción Sala 31', exits: ['E', 'W'] }
    gameRooms[3][2] = { description: 'Descripción Sala 32', exits: ['S', 'E', 'W'] }
    gameRooms[3][3] = { description: 'Descripción Sala 33', exits: ['S', 'W'] }
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
    messages.set('noWord', '¿Que quieres hacer?')
    messages.set('noVerb', '<span class="error">No puedo entender esa orden.</span>')
    messages.set('separate', '------------------')
    return messages
}