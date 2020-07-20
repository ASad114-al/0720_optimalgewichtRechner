const height = document.getElementById("height")
const age = document.getElementById("age")
const breit = document.getElementById("breit")
const result = document.getElementById("result")

function idealgewicht() {
    let ideal = 0
    if (breit.checked) {
        ideal = (height.value - 100 + age.value / 10) * 0.9 * 1.1
    } else {
        ideal = (height.value - 100 + age.value / 10) * 0.9 * 0.9
    }
    result.innerHTML = `Dein Idealgewicht ist: ${ideal.toFixed(1)}kg`
}