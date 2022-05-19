//Creamos la función separateWord
function separateWord(words) {
    let word = words.split(' ')
    return word
}

//Definimos dos strings
let firstMessage = "ir norte"
let secondMessage = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dicta, exercitationem cum, placeat assumenda molestiae tenetur natus corrupti commodi modi, ipsam ratione error dolor iure recusandae? In dolores atque sunt?"


//Llamar a la función y pasar parámetros
//console.log(separateWord(firstMessage))

console.log(separateWord(secondMessage)[20])