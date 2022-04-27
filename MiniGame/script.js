var total = 0;


//Criando balão
function criarBalao(){
    var balao = document.createElement("div");
    balao.setAttribute("class", "balao");
    
    //gerar numero aleatorio
    var x = Math.floor(Math.random() * 600);
    var y = Math.floor(Math.random() * 400);
    
    balao.setAttribute(
        "style", 
        "left:" + x +"px;" + 
        "top:" + y + "px;" );
        
    balao.setAttribute("onclick", "estourar(this)");
    document.body.appendChild(balao);
}
    
//Estourar balão
function estourar(objeto){
    document.body.removeChild(objeto);
    //contangem de score
    total++;
    var score = document.getElementById('total');
    score.innerHTML = "Balões estourados: " + total;
}
    
//Carregar jogo
function carregarJogo(){
    // a cada 1 segundo cria 1 balão
    setInterval(criarBalao, 1000);
}
