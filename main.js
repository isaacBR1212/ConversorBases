function bigIntParaBinario(numero) {
    if (numero === 0n) return "0";
    
    let binario = "";
    while (numero > 0n) {
        binario = (numero % 2n) + binario;
        numero = numero / 2n;
    }
    
    return binario;
}

function bigIntToParaHexadecimal(numero) {
    if (numero === 0n) return "0";
    
    const hexChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
    
    let hexadecimal = "";
    while (numero > 0n) {
        let resto = Number(numero % 16n);  // Convertendo para número normal
        hexadecimal = hexChars[resto] + hexadecimal;
        numero = numero / 16n;
    }
    
    return hexadecimal;
}



var button = document.getElementById("button").addEventListener("click", function() {

var baseInicial = parseInt(document.getElementById("base_inicial").value)
var baseFinal = parseInt(document.getElementById("base_final").value)
var valor = document.getElementById("valor").value
var resultadoElemento = document.getElementById("resultado")

valorfinal = "";

const validarBase = (numero, base) => {
    if (base === 2) {
        return /^[0-1]+$/.test(numero) //Testa se o valor digitado no padrão escolhido

    } else if (base === 5) {
        return /^[0-4]+$/.test(numero)

    } else if (base === 10) {
        return /^[0-9]+$/.test(numero)

    } else if (base === 16) {
        return /^[0-9A-Fa-f]+$/.test(numero)

    } else {
        return false
    }
};


// function que Tranforma binario para decimal
const binarioPraDecimal = (binario) => {
    let decimal = 0;
    let comprimento = binario.length

    for (let i = 0; i < comprimento; i++) {
        let binarioPego = parseInt(binario[i]) //pega o numero na posição i do binario
        let potencia = comprimento - 1 - i // começa a ler cada numero para calcular o total

        decimal += binarioPego * (2 ** potencia);
    }

    return decimal; // retorna o resultado
}

const base5PraDecimal = (numero) => {
    let decimal = 0;
    let comprimento = numero.length

    for(let i = 0; i < comprimento; i++) {
        let base5Pego = parseInt(numero[i])
        let potencia = comprimento - 1 - i

        decimal += base5Pego * (5 ** potencia)
    }

    return decimal

    
}

const hexadecimalPraDecimal = (numero) => {
    let decimal = 0;
    let comprimento = numero.length

    for(let i = 0; i < comprimento; i++) {
        let hexaPego = parseInt(numero[i], 16)
        let potencia = comprimento - 1 - i

        decimal += hexaPego * (16 ** potencia);

    }

    return decimal
}


const convertePraDecimal = (numero, baseInicial) => {
    if (baseInicial === 2) {
        return binarioPraDecimal(numero) 

    } else if (baseInicial === 5) {
        return base5PraDecimal(numero)

    } else if (baseInicial === 10) {
        return parseInt(numero)

    } else if (baseInicial === 16) {
        return hexadecimalPraDecimal(numero)

    } else {
        return parseInt(numero)
    }
}




if (!validarBase(valor, baseInicial)) {
    resultadoElemento.innerText = "Numero invalido para a base inicial escolhida"
    return;
}

let numeroDecimal = convertePraDecimal(valor, baseInicial);

if (baseFinal == 10) {
    resultado = numeroDecimal.toString()

} else if (baseFinal === 2) {
    resultado = bigIntParaBinario(BigInt(numeroDecimal))

} else if (baseFinal === 5) {

    let base5 = [];
    while (numeroDecimal > 0) {
        base5.push(numeroDecimal % 5) //Push adiciona mais elementos no final da Array
        numeroDecimal = Math.floor(numeroDecimal / 5)

    }
    resultado = base5.reverse().join('') //Primeiramente inverte a ordem dos numeros e depois junta os valores de um Array tirando a virgula

} else if (baseFinal === 16) {
    resultado = bigIntToParaHexadecimal(BigInt(numeroDecimal))

} else {
    return;
}

  resultadoElemento.innerText = "Resultado: " + resultado


});
















