function converteKelvin (temperatura) {
    var conversoes = [
        {
            valor: (1.8 * (temperatura - 273) + 32).toFixed(2),
            escala:'Fahrenheit (°F)'
        },
        {
            valor: (temperatura - 273).toFixed(2),
            escala:'Celsius (°C)'
        }
    ];
    return conversoes;
}

function converteFahrenheit (temperatura) {
    var conversoes = [
        {
            valor: ((temperatura - 32)/1.8 + 273).toFixed(2),
            escala:'Kelvin (K)'
        },
        {
            valor: ((temperatura - 32)/1.8).toFixed(2),
            escala:'Celsius (°C)'
        }
    ];
    return conversoes;
}

function converteCelsius (temperatura) {
    var conversoes = [
        {
            valor: (temperatura + 273).toFixed(2),
            escala:'Kelvin (K)'
        },
        {
            valor: ((temperatura * 1.8) + 32).toFixed(2),
            escala:'Fahrenheit (°F)'
        }
    ];
    return conversoes;
}

function pegaDados () {
    var dados = [];
    dados['temperatura'] = parseFloat(document.getElementById('temperatura').value);
    dados['escala'] = document.getElementById('escala').value;
    return dados;
}

function exibeResultados (conversoes) {
    var outputsValor = document.querySelectorAll('.resultado-valor');
    var outputsEscala = document.querySelectorAll('.resultado-escala');
    for (let i = 0; i < conversoes.length; i++) {
        const conversao = conversoes[i];
        const outputValor = outputsValor[i];
        outputValor.innerHTML = conversao.valor;
        const outputEscala = outputsEscala[i];
        outputEscala.innerHTML = conversao.escala;
    }
}

function alteraCorDeFundo(temperaturaCelsius) {
    var divResultados = document.querySelector('#resultados');
    if(temperaturaCelsius < 25) {
        divResultados.style.backgroundImage = "linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)";
    } else if (temperaturaCelsius >= 25 && temperaturaCelsius <= 30) {
        divResultados.style.backgroundImage = "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)";
    } else {
        divResultados.style.backgroundImage = "linear-gradient(120deg, #f6d365 0%, #fda085 100%)";
    }
}

function converterFormulario () {
    var dados = pegaDados();
    if (dados['escala'] == 'kelvin') {
        var conversoes = converteKelvin(dados['temperatura']);
        exibeResultados(conversoes);
        alteraCorDeFundo(conversoes[1].valor);
    } else if (dados['escala'] == 'fahrenheit') {
        var conversoes = converteFahrenheit(dados['temperatura']);
        exibeResultados(conversoes);
        alteraCorDeFundo(conversoes[1].valor);
    } else if (dados['escala'] == 'celsius') {
        var conversoes = converteCelsius(dados['temperatura']);
        exibeResultados(conversoes);
        alteraCorDeFundo(dados['temperatura']);
    }
}

var inputTemperatura = document.querySelector('#temperatura');
var inputEscala = document.querySelector('#escala');
var bubbleTemperatura = document.querySelector('#temperatura-selecionada');
bubbleTemperatura.innerHTML = inputTemperatura.value;
converterFormulario();

inputTemperatura.addEventListener("input", function() {
    bubbleTemperatura.innerHTML = inputTemperatura.value;
    converterFormulario();
});

inputEscala.addEventListener("change", converterFormulario);
