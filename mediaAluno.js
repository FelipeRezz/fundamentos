// 1 Faça um script que pede duas notas de um aluno. Em seguida ele deve calcular a média do aluno e dar o seguinte resultado:
// A mensagem "Aprovado", se a média alcançada for maior ou igual a sete
// A mensagem "Reprovado", se a média for menor do que sete
// A mensagem "Aprovado com Distinção", se a média for igual a dez.//

var pNota = Number(prompt("digite sua primeira nota"));
var sNota = Number(prompt("digite sua segunda nota"));
var media = (pNota + sNota) /2;

 if (media < 7)
 alert("Reprovado! Sua media é: " + media);
    if (media >=7 && media < 10)
    alert("Aprovado! Sua media é: " + media);
        if (media == 10)
        alert("Aprovado com Distinção! Sua média é: " + media);
//_____________________________________________________________________________________________________________________________


