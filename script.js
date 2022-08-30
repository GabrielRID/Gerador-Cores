const lista = ["#FFFAFA", "#00CED1", "#556B2F", "#00FF00", "#FF0000"]

function issoai() {
    let teste = Math.floor(Math.random() * 5);
    let pegaai = lista[teste];
    document.getElementById('body').style.backgroundColor = pegaai;
    exibirAleatorio(pegaai)
}

function aleatorio() {
    let receber = geraai();
    document.getElementById('body').style.backgroundColor = receber;
    exibirAleatorio(receber);
}

function exibirAleatorio(receber){
    let validacao2 = document.querySelector('#recebe');
    if(validacao2){
        validacao2.textContent = "Background Color: " + receber;
    }
}

function geraai(){
    var hexadecimais = '0123456789ABCDEF';
    var cor = '#';
    for (var i = 0; i < 6; i++) {
        cor += hexadecimais[Math.floor(Math.random() * 16)];
    }
    return cor;
}

let dancin, delay = 1000;
let comece = "";

// Elaborar ideia de palavras aleatorias na tela
function numerosAleatorios(){

}

function dance(){
    comece = document.getElementById('dance').value;
    console.log(comece)
    const audio = new Audio('./tutstuts.mp3');
    let recebe = 129;
    if(comece == "inicio" ){
        comece = "parar";
        aleatorio();
        audio.play();
        dancin = setInterval(function(){
            aleatorio();
            recebe--;
        }, delay)
    }else if(comece == "parar" || recebe == 0){
        clearInterval(dancin);
        audio.pause();
        comece = "inicio";
    }
}



window.onload = function(){
    let navbar = document.createElement('div');
    navbar.innerHTML = `
    <div>
        <div>
            <h3 class="titulo">DANCE WITH ME</h3>
            <ul class="teste">
                <a href="./index.html">
                    <li>SIMPLES</li>
                </a>
                <a href="./index2.html">
                    <li>COMPLEXO</li>
                </a>
            </ul>
        </div>
    </div>
    `
    let validacao = document.getElementById('navbar');
    if(validacao){
        validacao.appendChild(navbar);
    }

    
}


  