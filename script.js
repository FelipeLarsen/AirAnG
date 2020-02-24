function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById("txtano")
  var res = document.getElementById("res")

  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert("[ERRO] Verifique os dados e tente novamente !") 
  }else {
    var fsex = document.getElementsByName("radsex")
    var idade = ano - Number(fano.value)
    var genero = ""
    var img = document.createElement("img")
    img.setAttribute("id", "foto")

    if (fsex[0].checked) {
      genero = "Homem"
      if (idade >=0 && idade <= 10) {
        // boy
        img.setAttribute("src", "boy.jpg")
      }else if (idade <=21) {
        // alan
        img.setAttribute("src", "alan.jpg")
      }else if (idade <=50) {
        // elon
        img.setAttribute("src", "elon.jpg")
      }else {
        // einstein
        img.setAttribute("src", "einstein.jpg")
      }
    }else if (fsex[1].checked) {
      genero = "Mulher"
      if (idade >=0 && idade <= 10) {
        // girl
        img.setAttribute("src", "girl.jpg")
      }else if (idade <=21) {
        // lauren
        img.setAttribute("src", "lauren.jpg")
      }else if (idade <= 50) {
        // jennifer
        img.setAttribute("src", "jennifer.jpg")
      }else {
        // idosa
        img.setAttribute("src", "idosa.jpg")
      }
    }
    res.style.textAlign = "center"
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
  }
}