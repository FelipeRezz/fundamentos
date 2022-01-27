// 2. Faça um script que leia três números inteiros e mostre o maior deles.

var primeiroNumero = Number(prompt("Digite o primeiro numero: "));
var segundoNumero = Number(prompt("Digite o segundo numero:"));
var terceiroNumero = Number(prompt("Digite o terceiro numero;"));

function max(x, y, z){
    if(x > y && x > z){
        return x;
    }

    if(y > z){
        return y;
        
     }
      return z;
    
}
function maxAlert(x, y, z){
    alert(max(x, y, z));
           
       
}