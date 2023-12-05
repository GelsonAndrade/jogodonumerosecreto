let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = numeroAleatorio();
let tentativas = 1; 
function exibirTextoNaTela(tag , texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML= texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female', {reat:1.2});
 }   
   function exibirMensagemInicial(){
    exibirTextoNaTela('h1','Jogo do número secreto');
    exibirTextoNaTela('p','Escolha um número de 1 a 10');

 }

 exibirMensagemInicial(); 
function verificarChute(){
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = `Parabens você acertou o número Secreto com ${tentativas} ${palavraTentativa}`;
    exibirTextoNaTela('p', mensagemTentativas);
    exibirTextoNaTela('h1','Acertou!');
    document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
    if(chute > numeroSecreto)
    exibirTextoNaTela('p','o número Secreto é menor');

    else{
       exibirTextoNaTela('p','o número Secreto e maior');
    }
    tentativas++;
      limparCampo();


    }
    
    
}
function numeroAleatorio() {
 let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
 let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
 
 if(quantidadeDeElementosNaLista == numeroLimite){
   listaDeNumerosSorteados = [];
 }

 if (listaDeNumerosSorteados.includes(numeroEscolhido)){
   return numeroAleatorio();
 } else{
   listaDeNumerosSorteados.push(numeroEscolhido);
   console.log(listaDeNumerosSorteados)
   return numeroEscolhido;
   
 }
    
}
function limparCampo() {
   chute = document.querySelector('input');
   chute.value = '';

}
function reiniciarJogo() {
   numeroSecreto = numeroAleatorio();
   tentativas = 1;
   exibirMensagemInicial();
   document.getElementById('reiniciar').setAttribute('disabled',true);
}