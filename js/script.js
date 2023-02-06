const back = document.getElementById("back")
const windowDownload = document.getElementById("windowDownload")
const line = document.getElementById("line")
const line2 = document.getElementById('line2')

const doIt = () => {
    back.style.display = 'block'
    windowDownload.style.display = 'block'
    let w = 0, delta = 5, x = -50
    let timer = setInterval(function() {
        delta = delta / 1.0168
        w += delta
        x = x + 3
        x > w ? x = -50: x = x
        line.style.width = w + 'px'
        line2.style.left = x + 'px'
    }, 30);
}