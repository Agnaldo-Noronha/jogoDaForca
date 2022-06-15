// seletores e variaveis
var palavras = ['ALURA','DESAFIO','AGNALDO','MOUSE','TECLADO','JAVASCRIPT']
var tabuleiro = document.getElementById('forca').getContext('2d')

//Escolhendo palavra secreta

function palavraAleatoria(){

    var palavra = palavras[Math.floor(Math.random()*(palavras.length))];
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
    var eixo = 600/palavraAleat.length

    for (var i = 0; i < palavraAleat.length; i++){
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
 
    var eixo = 600/palavraAleat.length

    tabuleiro.fillText(letraC, 300+(eixo*index), 32)
    tabuleiro.stroke()
}

// escrevendo as letras incorretas



/*Uma possibilidade de escrever a letra errada na tela

function escreverLetraIncorreta(letra, espErro){
    tabuleiro.font = 'bold 25px Montserrat'
    tabuleiro.lineWidth = 6
    tabuleiro.lineCap = "round"
    tabuleiro.lineJoin = "round"
    tabuleiro.strokeStyle = "red"
    tabuleiro.fillText(letra, (400 + espErro),80,40)
}
*/


console.log(palavraAleat)

/* outra possibilidade de escrever a letra errada na tela*/

function desenhaLetraErrada(){
    
    var teclado = document.querySelector('.teclado');

    teclado.addEventListener('click', function(event){

        var letraClicada = (event.target.textContent);
        var tentativas = 0;
        
        if(!(palavraAleat.includes(letraClicada))){
            if(tentativas < 6){
                var erros = document.querySelector('.letra-errada')
                var btn = document.createElement('button')
                btn.textContent = letraClicada
                btn.classList.add('letraErrada') 
                erros.appendChild(btn)
                tentativas++;
                return tentativas++
            }            
        }  
    }) 
         
}

// verificando se as letras estão certas


function verificarLetraCorreta(){

    var teclado = document.querySelector('.teclado');

    teclado.addEventListener('click', function(event){

        var letraClicada = (event.target.textContent);
                
        if (palavraAleat.includes(letraClicada)){
            var indices = [];
            var idx = palavraAleat.indexOf(letraClicada);
    
                while (idx != -1) {
                    indices.push(idx);
                    idx = palavraAleat.indexOf(letraClicada, idx + 1);
                }
    
                for (var i = 0; i < indices.length; i++){
                    escreverLetraCorreta(letraClicada, indices[i]) 
                }
                event.target.disabled = true;
        } 
    })
}

verificarLetraCorreta()
desenhaLetraErrada()
