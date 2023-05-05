// [X] Iniciar o app
// [X] Pegar os dados do usuário
// [X] Verificar inputs vazio
// [X] Calcular a area do tringulo
// [X] Mostrar o resultado para o usuário

let app = ()=>{
    let form = document.querySelector(".form");
    
    form.addEventListener("submit", (event)=>{
        event.preventDefault();

        getData()
    })

    let getData = ()=>{
        let base = (document.querySelector("#base")).value;
        let altura = (document.querySelector("#altura")).value;
        if(base == "" || altura == ""){
            alert("Preencha todos os dados para calcular")
        }else{
            if(isNaN(parseInt(base)) || isNaN(parseInt(altura))){
                alert("Digite um número para calcular")
            }else{
                calc(base, altura)
            }
        }
    }

    let calc = (a, b)=>{
        let result = (a * b) / 2
        showResultToUser(result);
    }

    let showResultToUser = (value)=>{
        let p = document.querySelector("#result");

        p.innerHTML = value
    }
}

app();