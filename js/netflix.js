function handler(e) {
    e.preventDefault();

    let movie = document.querySelector('.form__input').value;

    //console.log(movie);   // Teste Unitario

    if (movie) {
        
        const _url = `https://www.omdbapi.com/?s=${movie}&apikey=658f2b62`;     // Aplicar interpolação
        // Utilizar API com chave gerada no site.  

        const _options = {
            method: 'GET',
            mode: 'cors',
            redirect: 'follow',
            cache: 'default'
        }


        fetch(_url, _options)
            .then(function(response) {

                // Tratar Erros
                if(!response.ok) throw new Error('Erro ao executar requisição!');

                // Retornar objeto no formato JSON
                return response.json();
            }
        )

        // receber dados da API (data recebe dados)
        .then(function(data) {
            //console.log(data) // teste em relação ao consumo da API

                let newContent = "";
                for(let i = 1; i < data.Search.length; i++) {           // Condição para printar todos os filmes na tela
                    newContent += `<li class="app-movies-all__card">`;
                    newContent += `<figure class="app-movies-all__figure">`;
                    newContent += `<img class="app-movies-all__thumb" src="${data.Search[i].Poster}"/>`;
                    newContent += `</figure>`;
                    newContent += `<legend class="app-movies-all__legend">`;
                    newContent += `<span class="app-movies-all__year">${data.Search[i].Year}</span>`;
                    newContent += `<h2 class="app-movies-all__title">${data.Search[i].Title}</h2>`;
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
    const submit = document.querySelector('.form__submit');
    submit.addEventListener('click', handler);
}
