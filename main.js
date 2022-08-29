const MAX_VALUE = 100
const MIN_VALUE = 0
const ATTEMPTS_NUMBER = 10

function getPlayerName() {
    const playerName = prompt("Привет, друг! Как тебя зовут?", "")
    return playerName
}

const playerName = getPlayerName()

const randomNumber = Math.round(Math.random() * MAX_VALUE)


function game(minValue, maxValue, attNumber, playerName, randomNumber) {
    alert(`Привет, ${playerName}!
    Я загадал число в интервале от ${minValue} до ${maxValue}.
    У тебя есть ${attNumber} попыток отгадать его`)

    for (let i = 1; i <= attNumber; i++) {
        const playerAnswer = prompt("Какое число я загадал?", "")

        if (playerAnswer > randomNumber) {
            alert(`Моё число меньше.
            Попробуй ещё, но помни,
            что у тебя осталось ${attNumber - i} попыток`)
        } else if (playerAnswer < randomNumber) {
            alert(`Моё число больше.
            Попробуй ещё, но помни,
            что у тебя осталось ${attNumber - i} попыток`)
        } else {
            alert(`Это победа!!! Ты - молодец!
            Угадал моё число с ${i} попыток.`)
            return
        }

    }
    alert(`Ты не молодец, не справился за ${attNumber} попыток.
    Тебе надо поработать над собой, друг.`)
}

game(MIN_VALUE, MAX_VALUE, ATTEMPTS_NUMBER, playerName, randomNumber)