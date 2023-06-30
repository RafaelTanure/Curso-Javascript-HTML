<div wm-slider>
    <p>
        <img src="http://files.cod3r.com.br/curso-web/imagem1.jpg" alt="Muro da Cidade" width="513" height="342"
            title="Muro da cidade por Tarso Bessa">
    </p>

    <p>
        <img src="http://files.cod3r.com.br/curso-web/imagem2.gif" alt="Intro cod3r" height="342">
    </p>

    <p class="circular">
        <img src="http://files.cod3r.com.br/curso-web/imagem3.png" alt="Rio de Janeiro" height="342">
    </p>

    <p class="Texto">
        <img src="http://files.cod3r.com.br/curso-web/avatar.jpg" alt="Avatar" height="50">Lorem, ipsum dolor
        sit amet consectetur adipisicing elit. Nostrum vero rerum in commodi odit quia placeat, soluta tenetur, laborum
        repellat pariatur iusto nihil odio officiis quam atque veritatis, laudantium temporibus? Lorem ipsum dolor sit
        amet
        consectetur adipisicing elit. Adipisci iste, accusantium voluptates veritatis deleniti maxime ullam in accusamus
        ea
        pariatur voluptatem? Quaerat illum laboriosam voluptate voluptatibus vitae quis numquam qui?
    </p>

    <p class="cidade"></p>
    <p>
        <picture>
            <!-- Utilizamos a tag picture para espandir a imgagem e minimizar quando mudamos de resolução conseguimos utilizar 2 tipor de imagens. -->
            <source srcset="http://files.cod3r.com.br/curso-web/logo-larga.png" media=" (min-width: 600px)">
            <img src="http://files.cod3r.com.br/curso-web/logo-estreita.png" alt="Logo">
        </picture>
    </p>
</div>

<style>
    p {
        position: absolute;
        display: none;
    }

    .circular {
        width: 513px;
        background-color: #444;
    }

    .texto {
        width: 400px;
    }

    .texto img {
        margin-right: 10px;
    }

    .cidade {
        width: 513px;
        height: 342px;
        background-image: url('http://files.cod3r.com.br/curso-web/imagem4.jpg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: 200%;
    }
</style>

<script>
    function mover(elem, inicio, fim, passo, callback) {
        const novoInicio = inicio - passo
        if (novoInicio >= fim) {
            elem.style.left = novoInicio + 'px'
            setTimeout(() => mover(elem, novoInicio, fim, passo, callback), 7)
        } else {
            callback()
        }
    }
    //   const p = document.querySelector('[wm-slider] > p')
    // p.style.display = 'block';
    //mover(p, 1500, -520, 5, () => {
    //  console.log('Terminou !!!!');
    // })

    //Criamos uma função principal chamada Slider dispara a configuração do slider
    function slider() {
        const elementos = document.querySelectorAll('[wm-slider] > p') // Utilizamos o querySelectorAll para  pegar todos os elementos p / o query retorna um node List
        const slides = Array.from(elementos) // Aqui transformamos os elementos em um array de slides
        exibirSlide(slides, slides[0]) // Criamos uma nova função, passamos os slides d0 indice 0 Aqui startamos o processo 
    }
    function exibirSlide(slides, slide) { // Criamos uma função recursiva para fazer  mover
        slide.style.display = 'block' // deixamos o slide visível 

        const inicio = innerWidth //Aqui pegamos a largura interna da pagina 
        const fim = -slide.clientWidth // aqui pegamos - a largura da tag p,o final da área da tag p 

        slide.style.left = `${inicio}px` // Começa a partir desse ponto o movimento 

        mover(slide, inicio, fim, 5, () => { // Criamos a função mover para contar a velocidade em que o slide sera passado 

            //slide.style.display = none
            exibirSlide(slides, getProximo(slides, slide)) // Aqui fizemos o looping e pegando o proximo e voltando para o primeiro de forma ciclica Chamamos a função GetProximo
        })
    }

    function getProximo(lista, atual) { //Aqui criamos uma função que recebe a lista e o atual e me dê o próximo elemento e entra em looping infinitamente
        const i = lista.indexOf(atual) + 1 
        return i < lista.length ? lista[i] : lista[0] // Se o i for maior que o tamanho e for menor que o indice i retorna o indice 0 
    }
    slider() // aqui Startamos chamamos a função total a fução slider 
</script>
