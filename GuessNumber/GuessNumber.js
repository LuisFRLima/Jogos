const mensagens = require("./variaveis");
const readline = require("readline");



const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log(mensagens.boasVindas,mensagens.regras,mensagens.aviso);
rl.question(mensagens.dificuldade, async function(x){await perguntinha(x)});

rl.on("close", function() 
{
    console.log("\n !!!Fim de Jogo!!!");
    process.exit(0);
});


async function aleatorio(min, max) 
{  
    return Math.floor
    (
      Math.random() * (max - min + 1) + min
    )
}
async function perguntinha(numeroDificuldade) 
{
    if(isNaN(numeroDificuldade) || numeroDificuldade < 1 || numeroDificuldade > 5)
    {
        console.log("Digite apenas o valor da dificuldade"); 
        rl.question(mensagens.dificuldade, async function(x){await perguntinha(x)}); 
        return; 
    }
        switch(numeroDificuldade)
        {   
            case "1": 
                await numeroGerado(await aleatorio(0, 100))
                console.log(mensagens.avisoFacil,mensagens.startFacil,mensagens.numeroPensado);
                setTimeout(tempoesgotado, 60000);
                break;
            case "2": 
                await numeroGerado(await aleatorio(0, 1000));
                console.log(mensagens.avisoMedio,mensagens.startMedio,mensagens.numeroPensado);
                setTimeout(tempoesgotado, 60000);
                break;
            case "3": 
                await numeroGerado(await aleatorio(0, 999999));
                console.log(mensagens.avisoDificil,mensagens.startDificil,mensagens.numeroPensado);
                setTimeout(tempoesgotado, 120000);
                break;
            case "4": 
                await numeroGerado(await aleatorio(0, 2345987));
                console.log(mensagens.avisoInsano,mensagens.startInsano,mensagens.numeroPensado);
                setTimeout(tempoesgotado, 120000);
                break;
            case "5": 
                await numeroGerado(await aleatorio(-2345987, 2345999));
                console.log(mensagens.avisoImpossivel,mensagens.startImpossivel,mensagens.numeroPensado);
                setTimeout(tempoesgotado, 120000);
                break;
            default: 
                console.log("Valor Invalido");
                break; 
        }    
}
async function numeroGerado(resposta)
{
    rl.question("", x => respostinha(x , resposta));
} 
async function respostinha(numeroChutado,resposta)
{
    if(numeroChutado == resposta)
    {
        console.log(mensagens.mensagemFinal);
        rl.close();
    }
    else if(numeroChutado > resposta)
    {       
         await maior(resposta);     
    }
    else await menor(resposta);    
} 
async function menor(resposta)
{
    rl.question(mensagens.dicasMenor, x => respostinha(x , resposta)); 
}  
async function maior(resposta)
{
    rl.question(mensagens.dicasMaior, x => respostinha(x , resposta)); 
} 
function tempoesgotado()
{   
    console.log("\n !!!Tempo Esgotado!!!");
    process.exit(0);
} 
