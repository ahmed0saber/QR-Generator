let count = 0
let container = document.getElementsByClassName("container")[0]
let qr = document.getElementsByClassName("qrcode")

const qrGenerate = () => {
    container.innerHTML += `<div class="qrcode"></div>`
    let text = document.getElementById('text').value
    count > 0 ? qr[count-1].style.display = "none" : null
    new QRCode(qr[count], text)
    count++
}