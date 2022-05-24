let roomDescription = {
    sala0: {
        descripcion: 'Descripción sala 0',
        objeto: 'Llave inglesa'
    }
}

console.log(roomDescription['sala0']['descripcion'])
console.log(roomDescription['sala0']['objeto'])

// Matriz de salas

let miSala = [
    [0, 1, 2],
    [0, 1, 2],
    [0, 1, 2]
]

miSala[0][0] = 'Descripción Sala 1'
miSala[0][1] = 'Descripción Sala 2'
miSala[0][2] = 'Descripción Sala 3'

miSala[1][0] = 'Descripción Sala 4'
miSala[1][1] = 'Descripción Sala 5'
miSala[1][2] = 'Descripción Sala 6'

miSala[2][0] = 'Descripción Sala 7'
miSala[2][1] = 'Descripción Sala 8'
miSala[2][2] = 'Descripción Sala 9'