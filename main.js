/*
 Exemplo1
 function mostrarAlerta(){
     let nome = "Luan"
     alert("Seja bem-vindo(a), "+nome)
 }
 
 mostrarAlerta()
 */
 
 /*
 
 Exemplo2
 function somar(valor1, valor2){
     alert(valor1 + valor2)
 
 }
 
 somar(20,12)
 */

 *
 Exemplo 3
 function mensagemBoasVindas(nome, cargo){
     alert(`Seja bem-vindo(a),  ${cargo} ${nome}`)
 
 }
 
 mensagemBoasVindas("Luan" ,"Incrivel")
 */
 
 
 /* Exemplo 4
 function multiplicacao(numero1, numero2){
     return numero1 * numero2
 }
 
 let multiplicacao1 = multiplicacao(6,7)
 let multiplicacao2 = multiplicacao(9,10)
 let multiplicacao3 = multiplicacao(12,25)
 
 console.log(multiplicacao1)
 console.log(multiplicacao2)
 console.log(multiplicacao3)
 */

 /* Exemplo 5
 function parOuImpar(numero){
     if(numero %2 === 0){
         return "Par"
     }
 
     return "Ímpar"
 }
 
 alert(parOuImpar(5))
 */
 /* Exemplo 6
 
 let numero = 10
 
 function aumentarNumero(){
     numero += 1
     console.log(numero)
  }
 
 
 const button = document.querySelector("button")
 button.addEventListener("click", aumentarNumero)
 
 console.log(numero)
 */

 let numero = 10
 
 const button = document.querySelector("button")
 button.addEventListener("click", function (){
     numero = numero + 1
     console.log(numero)
 })
 
 console.log(numero)

 */
 /*
 let numero = 10
 
 const button = document.querySelector("button")
 button.addEventListener("click", () =>{
     numero = numero + 1
     console.log(numero)
 })
 
 console.log(numero)
 */
 /* Exemplo 8 
 let somar = (valor1, valor2) =>{
     return valor1 + valor2
 }
 
 
 console.log(somar(10,20))
 */

 //Exercício//1

 let raio = Number(prompt("Digite o raio da esfera: "))
 let pi = 3.14159
 
 function calcularVolume(){
     let raioFinal = Math.pow(raio, 3)
     let volume = (4/3) * pi * raioFinal
     alert("VOLUME = " + volume)
 }
 
 calcularVolume()

 calcularVolume()
 
 // exercicio 2 //
 
 let distanciaPercorrida = Number(prompt("Digite a distância percorrida em km: "))
 let combustivelGasto = Number(prompt("Digite o combustível gasto: "))
 
 let total = () =>{
     alert(distanciaPercorrida/combustivelGasto)
 }
 
 total()

 // exercicio 3 //
 
 let horas = Number(prompt("Digite quantas horas foram gastas na viagem: "))
 let velocidadeMedia = Number(prompt("Digite a velocidade média: "))
 let quilometrosTotais = velocidadeMedia * horas
 let quilometrosPorLitro = 12
 
 function calcularLitros (){
     let litrosCombustivel = quilometrosTotais / quilometrosPorLitro
     console.log(litrosCombustivel.toFixed(3))
 }
 
 calcularLitros()
 
