var textInput = document.querySelector("#input_texto");
var outInput = document.querySelector("#output");

function criptografar(){
  var texto = textInput.value;
  
  var resultCripto = texto.replace(/e/, "enter").replace(/i/,"imes").replace(/a/,"ai").replace(/o/,"ober").replace(/u/,"ufat");
  
  document.getElementById('output').innerHTML = '<textarea readonly id="input_texto">' + resultCripto + '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>';

   textInput.value = "";
}

function descriptografar(){
  var texto = textInput.value;

  var resultDescripto =  texto.replace(/enter/,"e").replace(/imes/,"i").replace(/ai/,"a").replace(/ober/,"o").replace(/ufat/,"u");

  document.getElementById('output').innerHTML = '<textarea readonly id="input_texto">' + resultDescripto + '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>';
  
  textInput.value = "";
}

function copiar(){
  var textoCop = document.getElementById("input_texto");
  textoCop.select();
  document.execCommand('copy');
  alert("Texto Copiado");
  textInput.value = "";
}



