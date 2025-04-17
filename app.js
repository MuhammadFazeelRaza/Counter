
let h2 = document.getElementById('h2')
let plus = document.getElementById('plus')
let minus = document.getElementById('minus')

let count = 0

plus.addEventListener('click', () => {
    h2.innerText = count++
})
minus.addEventListener('click', () => {
    if (count > 0) {
        h2.innerText = --count
    }
})