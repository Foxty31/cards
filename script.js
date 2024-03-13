Cards()
 async function Cards(){
     let produtos = await fetch("Arquivo.json").then(data => {return data.json()})

     let Tipos = Object.getOwnPropertyNames(produtos);
     allcards.innerHTML = null
     Tipos.forEach(tipo => {
         let allProdutos = document.createElement("section");
         allProdutos.className = "produtosInicio"
         
         let produtoInicio = document.createElement("div");
         produtoInicio.className = "produtoInicio"

// for each para o andar nos items de um tipo cadastrado!
            produtos[tipo].forEach(item => {
//Aqui você vai criar os cards que apareceram no inicio
                let itemInicio = document.createElement("div");
                itemInicio.className = "divCardInicio"

                let tituloCard = document.createElement("h1");
                tituloCard.className = "tituloInicio"
                tituloCard.textContent = item.nome;

                let imagemCardInicio = document.createElement("img");
                imagemCardInicio.className = "imagemCardInicio"
                imagemCardInicio.src = item.Imagem;

//adiciona dentro do produto inicio que vai ficar dentro da section
             produtoInicio.appendChild(itemInicio);
             itemInicio.appendChild(tituloCard);
             itemInicio.appendChild(imagemCardInicio)
         })
         allProdutos.appendChild(produtoInicio);

          allcards.appendChild(allProdutos);
      })
  } 
