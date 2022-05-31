const gameMap = createMap()
const gameVerbs = createVerbs()
let textDescription = new String

// INICIO DE JUEGO
let player = { position: [1, 2] }
positionPlayer(player.position[0], player.position[1])


// CAPTURA DE EVENTOS
const orderButton = document.getElementById('do')
orderButton.onclick = eventGame


//#############################################
//############  F U N C I O N E S  ############
//#############################################

function eventGame() {

    let command = document.getElementById('commands').value
    let verbArray = separateWords(command.toLowerCase())
    if (isGameVerbs(verbArray[0]) == false) {
        printDescription('Orden no válida. Use ir,coger,usar,ver,hablar')
    } else {
        printDescription(gameAccions(verbArray[0]))
    }
}

function printDescription(text) {
    let today = new Date()
    timeZone = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds() + ' - '
    textDescription = timeZone + ' ' + text + '<br>' + textDescription
    document.getElementById('description').innerHTML = textDescription
}

function separateWords(words) {
    return words.split(' ')
}

function createVerbs() {
    const verbs = new Map([
        ['ir', true],
        ['coger', true],
        ['usar', true],
        ['ver', true],
        ['hablar', true]
    ])
    return verbs
}

function isGameVerbs(verbArray) {
    if (gameVerbs.has(verbArray)) {
        return true
    }
    return false
}

function gameAccions(verbGame) {
    switch (verbGame) {
        case 'ir':
            return '¿Dónde quieres ir?'
            break;
        case 'coger':
            return '¿Qué quieres coger?'
            break;
        case 'usar':
            return '¿Qué quieres usar?'
            break;
        case 'ver':
            return '¿Qué quieres ver?'
            break;
        case 'hablar':
            return '¿Qué quieres decir?'
            break;
        default:
            break;
    }
}

function createMap() {
    const miSala = [
        [0, 1, 2, 3],
        [0, 1, 2, 3],
        [0, 1, 2, 3],
        [0, 1, 2, 3]
    ]

    miSala[0][0] = { description: 'Descripción Sala 00', exits: ['N'] }
    miSala[0][1] = { description: 'Descripción Sala 01', exits: ['E', 'W'] }
    miSala[0][2] = { description: 'Descripción Sala 02', exits: ['N', 'E', 'W'] }
    miSala[0][3] = { description: 'Descripción Sala 03', exits: ['E'] }

    miSala[1][0] = { description: 'Descripción Sala 10', exits: ['N', 'S'] }
    miSala[1][1] = { description: 'Descripción Sala 11', exits: [''] }
    miSala[1][2] = { description: 'Descripción Sala 12', exits: ['S', 'E'] }
    miSala[1][3] = { description: 'Descripción Sala 13', exits: ['N', 'W'] }

    miSala[2][0] = { description: 'Descripción Sala 20', exits: ['S', 'E'] }
    miSala[2][1] = { description: 'Descripción Sala 21', exits: ['E', 'W'] }
    miSala[2][2] = { description: 'Descripción Sala 22', exits: ['N', 'E', 'W'] }
    miSala[2][3] = { description: 'Descripción Sala 23', exits: ['N', 'W'] }

    miSala[3][0] = { description: 'Descripción Sala 30', exits: ['E'] }
    miSala[3][1] = { description: 'Descripción Sala 31', exits: ['E', 'W'] }
    miSala[3][2] = { description: 'Descripción Sala 32', exits: ['S', 'E', 'W'] }
    miSala[3][3] = { description: 'Descripción Sala 33', exits: ['S', 'W'] }

    return miSala
}

function positionPlayer(x, y) {
    let descriptionRoom = createMap()[x][y].description
    printDescription(descriptionRoom)
}