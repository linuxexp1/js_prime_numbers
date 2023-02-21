let es_primo= (numero)=>{
    let condicion = true
    for (let i = 2; i < numero; i++) {
        if (numero%i == 0) {
            condicion=false
            break            
        }
    }
    return condicion
}
let vector_de_primos= (numero)=>{
    let vector = []
    for (let i = 2; i <= numero; i++) {
        if (es_primo(i)) vector.push(i)            
    }
    return vector
}

let vector_de_factores= (numero)=>{
    let vector = []
    if (es_primo(numero)) 
        vector.push(numero)
    else {
        for (let i = 2; i < numero; i++) {
            if (numero%i == 0) vector.push(i)            
        }
    }
    return vector
}
let alerta_invalido = ()=>{
    alert("Numero invalido.. Reintente")
}

let listar_factores = function() {
    let valor = document.getElementById('input_id').value        
    if (valor <2) alerta_invalido()
    else alert(vector_de_factores(valor))
}
let listar_primos = function() {
    let valor = document.getElementById('input_id').value        
    if (valor <2) alerta_invalido()
    else alert(vector_de_factores(valor))
}

let chequea_primo = function() {
    let valor = document.getElementById('input_id').value    
    if (valor <2) alerta_invalido()
    else alert(es_primo(valor))
}

const input_es_primo = document.getElementById("btn_chequea_primo");
const input_lista_primos = document.getElementById("btn_lista_primos");
const input_factores_primos = document.getElementById("btn_factores_primos");

input_es_primo.addEventListener("click", chequea_primo);
input_lista_primos.addEventListener("click", listar_primos);
input_factores_primos.addEventListener("click", listar_factores);
