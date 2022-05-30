let gameVerbs = new Map([
    ['ir', true],
    ['coger', true],
    ['usar', true],
    ['ver', true],
    ['hablar', true]
])

let textDescription = new String


const orderButton = document.getElementById('do')
orderButton.onclick = function() {

    let command = document.getElementById('commands').value
    let verbArray = separateWords(command.toLowerCase())
    let getVerb = isGameVerbs(verbArray[0])
    if (getVerb == false) {
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


function separateWords(words) {
    return words.split(' ')
}


function isGameVerbs(verbArray) {
    if (gameVerbs.has(verbArray)) {
        return true
    }
    return false
}