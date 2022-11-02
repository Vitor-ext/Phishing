
function handler(event) {
    event.preventDefault();

    let movie = document.querySelector('.forminput').value;

    //console.log(movie);   // Teste Unitario

    if (movie) {
        
        const _url = `https://www.omdbapi.com/?s=${movie}&apikey=658f2b62`;     // Aplicar interpolação
        // Utilizar API com chave gerada no site.  

        const _option = {
            method: 'GET',
            mode: 'cors',
            redirect: 'follow',
            cache: 'default'
        }


        fetch(_url, _option)
            .then(function(response){

                // Tratar Erros
                if(!response.ok) throw new Erroe('Erro ao executar requisição!');

                // Retornar objeto no formato JSON
                return response.json();
            }
        )

        // receber dados da API (data recebe dados)
        .then(function(data) {
            //console.log(data) // teste em relação ao consumo da API

            let newContent = "";
            for(let i =1; i < data.Search.length; i++) {        // Condição para printar todos os filmes na tela
                newContent += `<li class="app-movies-all_card">`;
                newContent += `<figure class= "app-movies-all_figure">`;
                newContent += `<img class= "app-movies-all_img"> scr="${data.Search[i].Poster}"`;
                newContent += `</figure`;
                newContent += `legend class="app-movies-all_legend>`;
                newContent += `<span class="app-movies-all-year">${data.Search.Year}</span>`;
                newContent += `h2 class="app-movies-all_title>${data.Search.Title}</h2>`;
                newContent += `</legend>`;
                newContent += `</li>`;
            }

            document.getElementById('movies').innerHTML = newContent;

        })  

 
    } else {
        alert('Campo de Pesquisa Vazio, Por Favor Digite Algo!');
    }
}


window.onload = () => {
    const submit = document.querySelector('.formsubmit');
    submit.addEventListener('click', handler);
}