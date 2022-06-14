const telaJogo = document.querySelector('.tela-jogo');
const telaInicial = document.querySelector('.tela-inicial');
const telaAdd = document.querySelector('.tela-add');
const rodape = document.querySelector('.rodape');

telaJogo.style.display = 'none';
telaAdd.style.display = 'none';

// tela inicial = 1
// tela jogo = 2
// tela adicionar palavras = 3

function mudaParaTelaJogo(telaAtual,proximaTela){   

    let dNone, dBlock;

    if(telaAtual == 1){
        dNone = telaInicial;
        dFlex = rodape;
    }
    
    else if(telaAtual == 2){
        dNone = telaJogo;
        dFlex = rodape;
    }
    
    else{
        dNone = telaAdd;
        dFlex = rodape;
    }

    dNone.style.display = 'none';
    dFlex.style.display = 'flex';

    if(proximaTela == 1){
        dBlock = telaInicial;
    }
    
    else if(proximaTela == 2){
        dBlock = telaJogo;
        dNone = rodape;  
    }
    
    else{
        dBlock = telaAdd;
    }

    dBlock.style.display = 'block';
    dNone.style.display = 'none';

    
}

