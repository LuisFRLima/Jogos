const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var dificuldade = "\nEscolha uma dificuldade: \n 1 - Fácil \n 2 - Médio \n 3 - Difícil \n 4 - Insano \n 5 - Impossível\n"
var boasVindas = "Boas Vindas Caro Jogador, ao meu jogo de Adivinhação, Sou o Gênio Sinep O Grande";
var regras = "\nO jogo é relativamente simples tente adivinhar o número que estou pensando! Caso acerte prêmios lhe agurdam";
var aviso = "\nPara começar este jogo escolha uma dificuldade digitando o número correspondente e aperte a tecla ENTER";
var avisoFacil = "Vejo que não tem muita confiaça em sua habilidade,então irei pegar leve";
var startFacil = "\nTente adivinhar o número que pensei, digite um número entre 0 e 100";
var numeroPensado = "Que número pensei? ";
var mensagemFinal = "Parabéns você acertou!!! Seu Prêmio é Uma nota de 3 Reais"
console.log(boasVindas,regras,aviso);

rl.question(dificuldade, function(numeroDificuldade) 
    {
        console.log(avisoFacil,startFacil);
        aleatorio(0, 100);
        console.log(aleatorio(0, 100));
        while(aleatorio != numeroChutado)
        {
            rl.question(numeroPensado, function(numeroChutado) 
            {
                console.log(mensagemFinal);
                rl.close(); 
            });
        }    
});

rl.on("close", function() 
{
    console.log("\nFim de Jogo!!!");
    process.exit(0);
});


function aleatorio(min, max) 
{  
    return Math.floor
    (
      Math.random() * (max - min + 1) + min
    )
}
