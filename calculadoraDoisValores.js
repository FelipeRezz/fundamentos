// CALCULADORA Valor de 2 Numeros


var operacao = 0;
var x, y = 0;        
    
   var soma = function(x, y) {  
   var x = Number(prompt("Digite o primeiro valor"));
   var y = Number(prompt("Digite o segundo valor"));
   return alert(x + y);
 }
   var sub = function(x, y) {  
   var x = Number(prompt("Digite o primeiro valor"));
   var y = Number(prompt("Digite o segundo valor"));
   return alert(x - y); 
 }
   var mult = function(x, y) {  
   var x = Number(prompt("Digite o primeiro valor"));
   var y = Number(prompt("Digite o segundo valor"));
   return alert(x * y);
 }
   var div = function(x, y) {  
   var x = Number(prompt("Digite o primeiro valor"));
   var y = Number(prompt("Digite o segundo valor"));
   return alert(x / y);
 }

    var operacao = Number(prompt("Digite operação desejada\n1-Soma\n2-Subtração\n3-Multiplicação\n4-Divisão"));
	
if(operacao == 1) 
  soma();
if(operacao == 2)
  sub();
if(operacao == 3)
  mult();
if(operacao == 4)
  div();