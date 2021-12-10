var tamanhoFrase = $("#tamanho-frase");

var tempoJogo = $("#tempo");
var tempoInicial = tempoJogo.text();

var campo = $("#campo-digitacao");
var corpo = $("#corpo-site")

// not working yet
var seletor = $("#seletor-frases")
var seletor = $(".seletor-frases").text();
var numPalavras = seletor.split(" ").length;
tamanhoFrase.text(numPalavras);

frases = new Array();
frases[0] = "Um ninho de mafagafos tinha sete mafagafinhos. Quem desmafagar esses mafagafinhos bom desmagafigador será."
frases[1] = "O Tempo perguntou ao tempo quanto tempo o tempo tem, o Tempo respondeu ao tempo que o tempo tem tanto tempo quanto tempo, tempo tem."
frases[2] = "O peito do pé de Pedro é preto. Quem disser que o peito do pé de Pedro é preto, tem o peito do pé mais preto do que o peito do pé de Pedro."
frases[3] = "O original não se desoriginaliza! O original não se desoriginaliza! O original não se desoriginaliza! Se o desoriginalizássemos, original não seria!"
frases[4] = "Se a liga me ligasse, eu também ligava a liga. Mas a liga não me liga, eu também não ligo a liga."


frases = frases.sort()


$("#seletor-frases").text(frases[0]);




// working...
campo.on("input", function(){
    var frase = campo.val();
    var nCaracteresDigitados = frase.length;
    $("#caracteres-digitados").text(nCaracteresDigitados);

    var nPalavrasDigitadas = frase.split(" ").length;
    $("#palavras-digitadas").text(nPalavrasDigitadas);
});

function iniciar() {
    campo.one("focus", function() {
    corpo.attr("disabled", true)
        var cronometro = setInterval(function() {
            var tempoRestante = tempoJogo.text();
            if(tempoRestante <= 0) {
                campo.attr("disabled", true)
                clearInterval(cronometro)
                nome = $("#nome").val()
                palavrasDigitadas = $("#palavras-digitadas").text()
                pontuacao = palavrasDigitadas/tempoInicial * 60
                $("#tabela-placar").append('<tr><td>'+nome+'</td><td>'+pontuacao+'</td></tr>')
            }else{
                tempoRestante--;
                tempoJogo.text(tempoRestante)
            }
        }, 1000);
    }) 
}

iniciar();

$("#botao-reset").on("click", function () {
    campo.attr("disabled", false);
    campo.val("");
    $("#caracteres-digitados").text("0");
    $("#palavras-digitadas").text("0");
    $("#tempo").text(tempoInicial);
    $("#nome").val("");
    frases = frases.sort()
    iniciar();
});

/*$("#botao-enviar").on("click", function () {
    campo.attr("disabled", true);
    clearInterval(cronometro)
    nome = $("#nome").val()
    palavrasDigitadas = $("#palavras-digitadas").text()
    pontuacao = palavrasDigitadas/tempoInicial * 60
    $("#tabela-placar").append('<tr><td>'+nome+'</td><td>'+pontuacao+'</td></tr>')
});*/

//not working yet
$("#limpar-placar").on("click", function () {
    
})
