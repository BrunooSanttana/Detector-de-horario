function carregar() {
    var msg = window.document.getElementById('msg')

    var img = window.document.getElementById('imagem')

    var data = new Date()

    var hora = data.getHours()
    //var hora = 10

    msg.innerHTML = `Agora são ${hora}  Horas`

    if (hora >= 0 && hora < 12) {
        //Bom dia 
        img.src = 'dia.jpg.jpg'
        document.body.style.background = '#8ab77e'

    } else if (hora >= 12 && hora <= 18) {
        //Boa tarde
        img.src = 'tarde.jpg.jpg'
        document.body.style.background = "#935e3f"
    } else {
        //Boa noite
        img.src = 'noite.png.png'
        document.body.style.background = "#0c1417"
    }
}