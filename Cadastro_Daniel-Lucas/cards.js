let htmlCards = document.getElementById("Cards")
let stringCards = ""
let usuarios = JSON.parse(localStorage.getItem("USUARIOS"))

for(let i = 0; i < usuarios.length; i++){
    loja = usuarios[i];
    console.log(loja);
    if(loja.nicho == nichoSelecionado){
        stringCards += `
        
            <div class="col">
                <div class="card" style="width: 18rem;">
                    <a onclick="guardarloja('${loja.nome}')" class="lojaa">
                        <img src="../imagens/${loja.nicho}.jpg" class="card-img-top" alt="Logo" style="width: 98%; width: 300px; height: 300px;">
                        <div class="card-body">
                            <h4 class="card-title"><b class="fonte">${loja.nome}</b></h4>
                            <p class="card-text fonte">${loja.nicho}</p>
                        </div>
                    </a>
                </div>
            </div>
            
        `
    }    
}

htmlCards.innerHTML+=stringCards