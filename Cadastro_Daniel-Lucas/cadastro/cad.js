let nomeLoja = document.getElementById("Nome da Loja");
let email = document.getElementById("Email");
let senha = document.getElementById("Senha");
let nicho = document.getElementById("Nicho");
let descricao = document.getElementById("Descricao");

if(!localStorage.getItem("proximoUsuario"))
{
    localStorage.setItem("proximoUsuario", 2);
}

if(!localStorage.getItem("USUARIOS"))
{   
    let usuarios = [
        {
            "nome": "Pizzaria Flash",
            "email" : "luiz12@gmail.com",
            "senha": "12345",
            "nicho": "Comidas",
            "descricao": "Pizzaria Flash se localiza no bairro Barreiro em Belo Horizonte e está no mercado com uma incrível variedade de sabores de pizza há 5 anos. Trabalham com delivery e contratos para rodízios em eventos."
        },

        {
            "nome": "Doces do marcão",
            "email" : "nara31@gmail.com",
            "senha": "12345",
            "nicho": "Comidas",
            "descricao": "A loja Doces do Marcão está localizada no bairro São Gabriel-Belo Horizonte, atende todos os tipos de festas/decorações e possuem os melhores doces goumert e bombons decorados da região."
        }
    
    ]
    localStorage.setItem("USUARIOS", JSON.stringify(usuarios))
}

function novoUsuario(){
    let id=localStorage.getItem("proximoUsuario");
    let usuarios=JSON.parse(localStorage.getItem("USUARIOS"));

    let novoUsuario = {
        "nome": nomeLoja.value,
        "email" : email.value,
        "senha": senha.value,
        "nicho": nicho.options[nicho.selectedIndex].value,
        "descricao": descricao.value
    }

    usuarios[id] = novoUsuario;
    console.log(usuarios);
    localStorage.setItem("USUARIOS", JSON.stringify(usuarios));
    localStorage.setItem("proximoUsuario", parseInt(id)+1);

    console.log(localStorage.getItem(1))
    console.log(JSON.parse(localStorage.getItem(1)));
}