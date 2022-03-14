
function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById("txtano")
    let res = document.querySelector('div#res')

    if(fano.value.length == 0 || fano.value > ano || fano.value <= 0){
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - fano.value
        // res.innerHTML = `Idade Calculada: ${idade}`
        let genero = ''

        let img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked){
            genero = 'Homem'
            if(idade>=0 && idade <10){
                img.setAttribute('src', './images/menino.png')
            } else if (idade < 50) {
                img.setAttribute('src', './images/homem.png')
            } else {
                img.setAttribute('src', './images/idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if(idade>=0 && idade <10){
                img.setAttribute('src', './images/menina.png')
            } else if (idade < 50) {
                img.setAttribute('src', './images/mulher.png')
            } else {
                img.setAttribute('src', './images/idosa.png')    
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade}.`
        res.appendChild(img)
    }
}