// ADD PALAVRAS
let palavras = ['ALURA','DESAFIO','AGNALDO','MOUSE','TECLADO','JAVASCRIPT']
function adicionarPalavra(){
    let input = document.querySelector('.inputNewP').value;
    palavras.push(input);
    iniciaJogo();
    mudaParaTelaJogo(3,2);
}

console.log(palavras)


function iniciaJogo(){
// seletores e variaveis

let tabuleiro = document.getElementById('forca').getContext('2d')
let tentativas = 0;

let vazia = document.querySelector('.vazia')
let cabeca = document.querySelector('.cabeca')
let corpo = document.querySelector('.corpo')
let braco1 = document.querySelector('.braco1')
let braco2 = document.querySelector('.braco2')
let perna1 = document.querySelector('.perna1')
let perna2 = document.querySelector('.perna2')
vazia.style.display = 'block';
cabeca.style.display = 'none';
corpo.style.display = 'none';
braco1.style.display = 'none';
braco2.style.display = 'none';
perna1.style.display = 'none';
perna2.style.display = 'none';


//Escolhendo palavra secreta

function palavraAleatoria(){

    let palavra = palavras[Math.floor(Math.random()*(palavras.length))];
    palavraAleat = palavra;
    return palavraAleat;
}


//desenhando traços com canvas
function criarEspaco(){
    tabuleiro.lineWidth = 6;
    tabuleiro.lineCap = "round"
    tabuleiro.lineJoin = "round"
    tabuleiro.strokeStyle = "#ffffff"
    tabuleiro.beginPath()
    let eixo = 600/palavraAleat.length

    for (let i = 0; i < palavraAleat.length; i++){
        tabuleiro.moveTo(300+(eixo*i),40)
        tabuleiro.lineTo(335+(eixo*i),40)
    }

    tabuleiro.stroke()
    tabuleiro.closePath()
}
criarEspaco(palavraAleatoria());

// escrevendo as letras corretas

function escreverLetraCorreta(letraC, index){
    tabuleiro.font = 'bold 44px Montserrat'
    tabuleiro.lineWidth = 6
    tabuleiro.lineCap = "round"
    tabuleiro.lineJoin = "round"
    tabuleiro.strokeStyle = "#ffffff"
 
    let eixo = 600/palavraAleat.length

    tabuleiro.fillText(letraC, 300+(eixo*index), 32)
    tabuleiro.stroke()
}

// escrevendo as letras incorretas

function desenhaLetraErrada(){
    
    let teclado = document.querySelector('.teclado');

    teclado.addEventListener('click', function(event){

        let letraClicada = (event.target.textContent);
        
        
        if(!palavraAleat.includes(letraClicada)){
            if(tentativas < 7){
                let erros = document.querySelector('.letra-errada')
                let btn = document.createElement('button')
                btn.textContent = letraClicada
                btn.classList.add('letraErrada') 
                erros.appendChild(btn)
                event.target.disabled = true;
                tentativas++
                desenhaForca(tentativas)
                    if(tentativas == 7){
                        window.location.href = 'derrota.html'
                    }                
            }            
        }  
    })  
}

// verificando se as letras estão certas


function verificarLetraCorreta(){

    let teclado = document.querySelector('.teclado');

    let acertos = 0

    teclado.addEventListener('click', function(event){

        let letraClicada = (event.target.textContent);
        
                
        if (palavraAleat.includes(letraClicada)){
            let indices = [];
            let idx = palavraAleat.indexOf(letraClicada);
    
                while (idx != -1) {
                    indices.push(idx);
                    idx = palavraAleat.indexOf(letraClicada, idx + 1);
                }
    
                for (let i = 0; i < indices.length; i++){
                    escreverLetraCorreta(letraClicada, indices[i])
                    acertos++
                }
            event.target.disabled = true;
            
        }

        if(acertos == palavraAleat.length){
            window.location.href = 'vitoria.html'            
        }
    })
}

verificarLetraCorreta()
desenhaLetraErrada()
console.log(palavraAleat)

// Desenhar a forca a cada erro

function desenhaForca(tentativa){
    switch (tentativa){
        case 1:
            vazia.style.display = 'none';
            cabeca.style.display = 'block';
            break;
        case 2:
            cabeca.style.display = 'none';
            corpo.style.display = 'block';
            break;
        case 3:
            corpo.style.display = 'none';
            braco1.style.display = 'block';
            break;
        case 4:
            braco1.style.display = 'none';
            braco2.style.display = 'block';
            break;
        case 5:
            braco2.style.display = 'none';
            perna1.style.display = 'block';
            break;
        case 6:
            perna1.style.display = 'none';
            perna2.style.display = 'block';
            break;
    }
}
}





