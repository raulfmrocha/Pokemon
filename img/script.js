var formulario = document.querySelector('form')

formulario.addEventListener('submit', function(e){
    //Bloqueia o refresh da pag
    e.preventDefault()
    //URL da pesquisa
    let urlForm = "https://pokeapi.co/api/v2/pokemon/";
    //Valor do input name
    let nome = document.getElementById("name")
    //concatenar a URL com o input name
    urlForm = urlForm + this.name.value 
    //Transformar os valores em minusculo
    urlForm = urlForm.toLocaleLowerCase()

    //ID content
    let resposta = document.getElementById('content')

    //Id imgpokemon
    let imagem = document.getElementById('imgPokemon')

    //Resposta em HTML
    let html = ''

    fetch(urlForm)
        .then(resposta => resposta.json())
        .then(function (data){
            console.log(data)
            html = 'Nome: ' + maiuscula(data.name) + '<br>'
            html = html + 'Type: ' + maiuscula(data.types[0].type.name)
            resposta.innerHTML = html

            imagem.innerHTML = "<img src ='" + data.sprites.front_default + "'><img src ='" + data.sprites.front_default +  "'>"       
        })
        .catch(function (err) {
            if(err == 'unexpected token N in JSON at position 0'){
                html = 'Pokemon não encontrado!'
            } else{
                html = 'Erro:' + err
            }
        })

        function maiuscula(val){
            return val[0].toUpperCase() + val.substr(1)
        }
})