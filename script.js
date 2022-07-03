function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //Bom Dia!
        img.scr = 'fotomanha.png'
        document.body.style.background = '#f9ddb8'
    }else if (hora >= 12 && hora < 18) {
        //Boa Tarde!
        img.src = 'fototarde.png'
        document.body.style.background = '#d78c50'
    }else{ 
        //Boa Noite!
        img.src = 'fotonoite.png'
        document.body.style.background = '#54293f'

  } 
}
