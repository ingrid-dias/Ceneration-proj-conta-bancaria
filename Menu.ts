import readlinesync = require("readline-sync");
import { colors } from './src/util/Colors';

export function main(){

let opcao: number;

while (true){
    
    console.log(colors.bg.black, colors.fg.yellow,
                "*************************************************")
    console.log("                                                 ")
    console.log("             BANCO DO BRAZIL COM Z               ")
    console.log("                                                 ")
    console.log("*************************************************")
    console.log("                                                 ")
    console.log("           1 - Criar Conta                       ")
    console.log("           2 - Listar todas as Contas            ")
    console.log("           3 - Buscar Conta por Numero           ")
    console.log("           4 - Atualizar dados da conta          ")
    console.log("           5 - Apagar Conta                      ")
    console.log("           6 - Sacar                             ")
    console.log("           7 - Depositar                         ")
    console.log("           8 - Transerir valores entre Contas    ")
    console.log("           9 - Sair                              ")
    console.log("                                                 ")
    console.log("*************************************************", 
    colors.reset)

    console.log("\nEntre com a opcao desejada: ");
    opcao = readlinesync.questionInt("");

    if (opcao == 9) {
        console.log(colors.fg.magenta,
            "\nBanco do Brazil com Z - O seu Futuro começa aqui!");
        sobre();
        console.log(colors.reset, "");
        process.exit(0);
    }
    switch (opcao) {
        case 1:
            console.log(colors.fg.whitestrong, 
                "\n\nCriar Conta\n\n", colors.reset);
            
            keyPress()
            break;
        case 2:
            console.log(colors.fg.whitestrong, 
                "\n\nListar todas as Contas\n\n", colors.reset);

            keyPress()
            break;
        case 3:
            console.log(colors.fg.whitestrong, 
                "\n\nConsultar dados da Conta - por número\n\n", colors.reset);

            keyPress()
            break;
        case 4:
            console.log(colors.fg.whitestrong, 
                "\n\nAtualizar dados da Conta\n\n", colors.reset);

            keyPress()
            break;
        case 5:
            console.log(colors.fg.whitestrong, 
                "\n\nApagar uma Conta\n\n", colors.reset);

            keyPress()
            break;
        case 6:
            console.log(colors.fg.whitestrong, 
                "\n\nSaque\n\n", colors.reset);

            keyPress()
            break;
        case 7:
            console.log(colors.fg.whitestrong, 
                "\n\nDepósito\n\n", colors.reset);

            keyPress()
            break;
        case 8:
            console.log(colors.fg.whitestrong, 
                "\n\nTransferência entre Contas\n\n", colors.reset);

            keyPress()
            break;
        default:
            console.log(colors.fg.whitestrong, 
                "\nOpção Inválida!\n", colors.reset);

            keyPress()
            break;
        }
    }

}

export function sobre(): void{
    console.log("\n***********************************************")
    console.log("\nProjeto Desenvolvido por: ")
    console.log("Ingrid Dias de Souza - dias.ingridsouza@gmail.com")
    console.log("https://github.com/ingrid-dias")
    console.log("\n***********************************************")
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main()