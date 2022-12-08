/*capturar o tamanho de tela do usuario */

var largura;
var altura;
/*limitar vidas do jogador */
var vidas = 3;
/*receber parametro de nivel e dificuldade */
var nivel = window.location.search;
/*tempo para vitoria do jogo */
var cronometro = 60;
function decrementarCronometro(){// a cada 1 segundo essa funcao é chamanda pelo setInterval, essa fucncao decrementa a variavel cronometro e a cada segundo atribui o valor dessa variavel ao conteudo do elemento de id "segundos", assim criando um cronometro visivel para p usuario
    document.getElementById("segundos").innerHTML = cronometro;
    cronometro--;
    if(cronometro < 0){
        window.location.href = "vitoria.html";
    }
}
setInterval(function(){
    decrementarCronometro();
}, 1000);

function verificarScreen(){/** a cada evento de redimencionamento e chamada essa funcao para atribuir o tamanho da tela atual */
    largura = window.innerWidth;
    altura = window.innerHeight;
}
verificarScreen();
/* atribuir elemento img ao documento html */

function posicionarMosquito(){
    //verificar se ja existe um elemento criado no html, caso exista apague-o, significando que o usuario nao clicou no mosquito, logo o usuario perde uma vida
    
    var mosquito = document.getElementById("mosquito");
        if(mosquito){
            var vida = document.getElementById("v" + vidas);// a cada execusao desse bloco sera decrementado 1 de vidas, e sera acessado o elemento vconcatenado com essa variavel vida formando: v2, v1, v0 assim, formando o ide de cada elemento img, passando cada concatenacao como id do elemento img, qu no caso sao os coracaoes
            vida.src="imagens/coracao_vazio.png";
            mosquito.remove(); //caso haja um elemento de id mosquito ele sera removido caso nao exista sera criado um
            vidas--;
            if(vidas === 0) {
                window.location.href = "gamerover.html"
                
                
            }
        }
        
    

    /*definir tamanho aleatorio a cada criacao de um elemento */
    var classe = Math.round((Math.random() * 3))
    switch(classe){
        case 0: {
            classe = "um";
            
            break;
        }
        case 1: {
            classe = "dois";
            break;
        }
        case 2: {
            classe = "tres";
            break;
        }
        case 3: {
            classe = "quatro"
            break;
        }
    }
    var imagem_mosquito = document.createElement("img"); //criando do elemento
    imagem_mosquito.src = "imagens/mosca.png"; //criando um atributo para esse elemento e atribuindo um valor para esse atributo, no caso, um caminho para a imagem
    imagem_mosquito.className = "mosquito " + classe; //atribuindo uma classe ao elemento
    imagem_mosquito.id = "mosquito";
    imagem_mosquito.onclick = function(){
        /*document.getElementById("mosquito").remove();*/
        imagem_mosquito.src = "imagens/pngwing.com.png";
        setTimeout(function(){
            imagem_mosquito.remove();
        }, 500)
        
    };
/*definir aleatoriamento a posicao do mosquito na pagina*/

    var eixoX = (Math.random() * (altura -100))// retorna um numero aleatorio entre 0 e 1, sendo asssim, para o metodo me retornar um numero entre, por exemplo 0 e 100, deve-se multiplicar esse retorno por 100, mesma forma seria se eu quisesse que me retornasse um numeroentre 0 e 1000, apenas multiplicaria esse retorno original por 1000    
    var eixoY = (Math.random() * (largura -100)); //multiplicando o valor retornado pelo tamanho datela do usuario, assim sera retornado um valor para posicao de acordo com a tela do usuario
    eixoX = Math.floor(eixoX); //arredondando o retonro do cauculo acima e garantindo que o mosquito nao fique com alguma parte  fora da tela
    eixoY = Math.floor(eixoY);
    imagem_mosquito.style.position="absolute";
    imagem_mosquito.style.top=eixoX + "px";
    imagem_mosquito.style.left=eixoY + "px";
    document.body.appendChild(imagem_mosquito);   //definindo onde o lemento imagem_mosquito sera posto dentro do html

}
/*reniciar game */

/* a cada intervalo de tempo chmar a funcao que ira criar o elemento no html */
if(nivel === "?facil"){
    setInterval(function(){//a cada 2 segundos o setInterval chama uma funcao que chama a funcao posicionarMosquito, assim criando e poicionado ele a cada 2 segudos
        posicionarMosquito();
    }, 2000);
}
if(nivel === "?normal"){
    setInterval(function(){//a cada 2 segundos o setInterval chama uma funcao que chama a funcao posicionarMosquito, assim criando e poicionado ele a cada 2 segudos
        posicionarMosquito();
    }, 1500);
}
if(nivel === "?dificil"){
    setInterval(function(){//a cada 2 segundos o setInterval chama uma funcao que chama a funcao posicionarMosquito, assim criando e poicionado ele a cada 2 segudos
        posicionarMosquito();
    }, 1100);
}
if(nivel === "?impossivel"){
    setInterval(function(){//a cada 2 segundos o setInterval chama uma funcao que chama a funcao posicionarMosquito, assim criando e poicionado ele a cada 2 segudos
        posicionarMosquito();
    }, 700);
}

//ok - definir tamanhosaleatoria para o mosquito a cada chamada da funcao e rotacionar a imagem
// ok - a cada interevalo detempo chamar a funcao pra criar o mosquito
// ok - a cada chamada da criacao do mosquito verificar se ele ja existe, se true remover esse elemento
// ok - quando o jogador clicar no elemento, ele sera removido;
// afetar as vidas do jogador a cada vez que a remocao do elemento for feita automaticamente
// qquando acabar as vidas redirecionar o jogador para outro arquivo html
//criar cronometro para decidir se o usuario ganhou, ao final do cronometro o usuario ganha
//criar pagina de vitoria e redirecionar o usuario pra essa pagina caso ele venca
//criar pagina inicial e escolha de nivel
//recuperar nivel escolhido e de acordeo com nivel definir de o intervalo em segiundo que sera chamada a funcao de criar o mosquito
//alterar o cursor para uma raquete