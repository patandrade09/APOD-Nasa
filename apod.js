let pesquisar = document.querySelector('button');
let data = document.getElementById('data')


pesquisar.addEventListener('click', function() {

    let apod = `https://api.nasa.gov/planetary/apod?api_key=okPTxlusDSgdOBfrEcgjTGDSLVBeu1wm6Zh6tVpI&date=${data.value}`;
    let requisicao = new XMLHttpRequest();
    requisicao.open('GET', apod);
    requisicao.onload = function() {

        let imagemObj = JSON.parse(requisicao.response);
        let imagemDia = document.getElementById("imagem-dia")
        let video = document.getElementById('video-dia')
        let explicacao = document.getElementById('sobre-img')

        explicacao.innerText = imagemObj.explanation

        if (imagemObj.media_type != "video") {

            imagemDia.setAttribute("src", imagemObj.url)
            imagemDia.style.display = 'flex'
            video.style.display = 'none'


        } else {

            video.setAttribute("src", imagemObj.url)
            imagemDia.style.display = 'none'
            video.style.display = 'flex'

        }

    }
    requisicao.send();

})

padrao()

function padrao() {

    let apod = `https://api.nasa.gov/planetary/apod?api_key=okPTxlusDSgdOBfrEcgjTGDSLVBeu1wm6Zh6tVpI`;

    let requisicao = new XMLHttpRequest();
    requisicao.open('GET', apod);
    requisicao.onload = function() {

        let imagemObj = JSON.parse(requisicao.response);
        let imagemDia = document.getElementById("imagem-dia")
        let video = document.getElementById('video-dia')
        let explicacao = document.getElementById('sobre-img')

        explicacao.innerText = imagemObj.explanation

        if (imagemObj.media_type != "video") {

            imagemDia.setAttribute("src", imagemObj.url)
            data.setAttribute("max", imagemObj.date)
            imagemDia.style.display = 'flex'
            video.style.display = 'none'

        } else {

            video.setAttribute("src", imagemObj.url)
            imagemDia.style.display = 'none'
            video.style.display = 'flex'

        }
    }
    requisicao.send();
}