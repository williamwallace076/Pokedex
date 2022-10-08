/* quando clicar no pokemon da lisatagem temos que esconder o cartao do pokemon aberto e mostrar o cartao correspondente ao que foi selecionado na listagem 

pra isso vamos precisar utilizar dois elementos 

1 - listagem 
2 - Cartão pokemon 

precisamos criar duas variaveis js para trabalhar com os elementos da tela 

criar os eventos de "on click",feito pelo usuaro na listagem de pokemons 

ao usuario clicar nos pokemons 

-remover a classe "aberto" apenas do cartao que esta aberto

-pegar o id do pokemon clicado e mostrar o cartao correspondente a ele 

-remover a classe ativa que muda a cor do pokemon na lisatgem

-adicionar a classe ativa no item da lista selecionado

*/

const listaSelecaoPokemons = document.querySelectorAll(".pokemon")
// console.log(listaSelecaoPokemons)
const pokemonsCard = document.querySelectorAll(".cartao-pokemon")
const listaAudioPokemonParaAbrir = document.querySelectorAll(".audios")

listaSelecaoPokemons.forEach(pokemon => {

    pokemon.addEventListener('click', () => {
        
        const cartaoPokemonAberto = document.querySelector('.aberto')

        cartaoPokemonAberto.classList.remove('aberto')
        
        const idPokemonSelecionado = pokemon.attributes.id.value

        const cartaoPokemonParaAbrir = document.getElementById('cartao-' + idPokemonSelecionado)

        cartaoPokemonParaAbrir.classList.add('aberto')

        const botaoPokemonAtivo = document.querySelector('.ativo')

        botaoPokemonAtivo.classList.remove('ativo')
        
        const idBotaoPokemonSelecionado = pokemon.attributes.id.value

        const botaoPokemonParaAbrir = document.getElementById( idBotaoPokemonSelecionado)
        console.log(botaoPokemonParaAbrir)

        botaoPokemonParaAbrir.classList.add('ativo')

        //adicionando audio so clicar nos botoes
        
       if(botaoPokemonParaAbrir.id === "pikachu"){
           const audioSelecionado = document.getElementById("audio-pikachu")
           function stop(){
            const pausedGengarPikachu = document.getElementById("audio-gengar")
        pausedGengarPikachu.pause()
        pausedGengarPikachu.currentTime = 0
        const pausedGyaradosPikachu = document.getElementById("audio-gyarados")
        pausedGyaradosPikachu.pause()
        pausedGyaradosPikachu.currentTime = 0
        const pausedCharmanderPikachu = document.getElementById("audio-charmander")
        pausedCharmanderPikachu.pause()
        pausedCharmanderPikachu.currentTime = 0
        const pausedBulbosaurPikachu = document.getElementById("audio-bulbasaur")
        pausedBulbosaurPikachu.pause()
        pausedBulbosaurPikachu.currentTime = 0
        const pausedDragonitePikachu = document.getElementById("audio-dragonite")
        pausedDragonitePikachu.pause()
        pausedDragonitePikachu.currentTime = 0
        }
        stop()

           audioSelecionado.play()
           
       }else if(botaoPokemonParaAbrir.id === "bulbasaur"){
        const audioSelecionado = document.getElementById("audio-bulbasaur")
        function stop(){
            const pausedGengarBulbasaur = document.getElementById("audio-gengar")
        pausedGengarBulbasaur.pause()
        pausedGengarBulbasaur.currentTime = 0
        const pausedGyaradosBulbasaur = document.getElementById("audio-gyarados")
        pausedGyaradosBulbasaur.pause()
        pausedGyaradosBulbasaur.currentTime = 0
        const pausedCharmanderBulbasaur = document.getElementById("audio-charmander")
        pausedCharmanderBulbasaur.pause()
        pausedCharmanderBulbasaur.currentTime = 0
        const pausedPikachuBulbasaur = document.getElementById("audio-pikachu")
        pausedPikachuBulbasaur.pause()
        pausedPikachuBulbasaur.currentTime = 0
        const pausedDragoniteBulbasaur = document.getElementById("audio-dragonite")
        pausedDragoniteBulbasaur.pause()
        pausedDragoniteBulbasaur.currentTime = 0
        }
        stop()

        audioSelecionado.play()

       }else if(botaoPokemonParaAbrir.id === "charmander"){
        const audioSelecionado = document.getElementById("audio-charmander")
        function stop(){
            const pausedGengarCharmander = document.getElementById("audio-gengar")
        pausedGengarCharmander.pause()
        pausedGengarCharmander.currentTime = 0
        const pausedGyaradosCharmander = document.getElementById("audio-gyarados")
        pausedGyaradosCharmander.pause()
        pausedGyaradosCharmander.currentTime = 0
        const pausedPikachuCharmander = document.getElementById("audio-pikachu")
        pausedPikachuCharmander.pause()
        pausedPikachuCharmander.currentTime = 0
        const pausedBulbosaurCharmander = document.getElementById("audio-bulbasaur")
        pausedBulbosaurCharmander.pause()
        pausedBulbosaurCharmander.currentTime = 0
        const pausedDragoniteCharmander = document.getElementById("audio-dragonite")
        pausedDragoniteCharmander.pause()
        pausedDragoniteCharmander.currentTime = 0
        }
        stop()

        audioSelecionado.play()

       }else if(botaoPokemonParaAbrir.id === "gyarados"){
        const audioSelecionado = document.getElementById("audio-gyarados")
        function stop(){
            const pausedGengarGyarados = document.getElementById("audio-gengar")
        pausedGengarGyarados.pause()
        pausedGengarGyarados.currentTime = 0
        const pausedPikachuGyarados = document.getElementById("audio-pikachu")
        pausedPikachuGyarados.pause()
        pausedPikachuGyarados.currentTime = 0
        const pausedCharmanderGyarados = document.getElementById("audio-charmander")
        pausedCharmanderGyarados.pause()
        pausedCharmanderGyarados.currentTime = 0
        const pausedBulbosaurGyarados= document.getElementById("audio-bulbasaur")
        pausedBulbosaurGyarados.pause()
        pausedBulbosaurGyarados.currentTime = 0
        const pausedDragoniteGyarados = document.getElementById("audio-dragonite")
        pausedDragoniteGyarados.pause()
        pausedDragoniteGyarados.currentTime = 0
        }
        stop()

        audioSelecionado.play()

       }else if(botaoPokemonParaAbrir.id === "gengar"){
        const audioSelecionado = document.getElementById("audio-gengar")
        function stop(){
            const pausedPikachuGengar = document.getElementById("audio-pikachu")
            pausedPikachuGengar.pause()
            pausedPikachuGengar.currentTime = 0
        const pausedGyaradosGengar = document.getElementById("audio-gyarados")
        pausedGyaradosGengar.pause()
        pausedGyaradosGengar.currentTime = 0
        const pausedCharmanderGengar = document.getElementById("audio-charmander")
        pausedCharmanderGengar.pause()
        pausedCharmanderGengar.currentTime = 0
        const pausedBulbasaurGengar = document.getElementById("audio-bulbasaur")
        pausedBulbasaurGengar.pause()
        pausedBulbasaurGengar.currentTime = 0
        const pausedDragoniteGengar = document.getElementById("audio-dragonite")
        pausedDragoniteGengar.pause()
        pausedDragoniteGengar.currentTime = 0
        }
        stop()

        audioSelecionado.play()

       }else if(botaoPokemonParaAbrir.id === "dragonite"){
        const audioSelecionado = document.getElementById("audio-dragonite")
        
        function stop(){
            const pausedGengarDragonite = document.getElementById("audio-gengar")
        pausedGengarDragonite.pause()
        pausedGengarDragonite.currentTime = 0
        const pausedGyaradosDragonite = document.getElementById("audio-gyarados")
        pausedGyaradosDragonite.pause()
        pausedGyaradosDragonite.currentTime = 0
        const pausedCharmanderDragonite = document.getElementById("audio-charmander")
        pausedCharmanderDragonite.pause()
        pausedCharmanderDragonite.currentTime = 0
        const pausedBulbosaurDragonite = document.getElementById("audio-bulbasaur")
        pausedBulbosaurDragonite.pause()
        pausedBulbosaurDragonite.currentTime = 0
        const pausedPikachuDragonite = document.getElementById("audio-pikachu")
        pausedPikachuDragonite.pause()
        pausedPikachuDragonite.currentTime = 0
        }
        stop()

        audioSelecionado.play()

       }
        

        // const audioSelecionado = audioPokemonParaAbrir.getElementById("audio-pikachu")
        

        // audioSelecionado.play()

    })

})



// console.log(listaSelecaoPokemons, pokemonsCard)
