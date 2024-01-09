function obterInformacoesRede() {
    const loadingIcon = document.querySelector('.loading');
    loadingIcon.style.display = 'inline-block';

    fetch('https://api64.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            const ip = data.ip;
            document.getElementById('endereco-ip').innerText = ip;
            loadingIcon.style.display = 'none';
        })
        .catch(error => {
            console.log(error);
            loadingIcon.style.display = 'none';
        });

    const dns = window.location.hostname;
    document.getElementById('dns').innerText = dns;

    const redesLocais = ['192.168.1.1', '192.168.1.2']; // Simulação de redes locais
    document.getElementById('redes-locais').innerText = redesLocais.join(', ');

    const geradorSpan = document.querySelector('.gerador');
    geradorSpan.innerText = gerarNumeros();
}

function gerarNumeros() {
    let numeros = '';
    for (let i = 0; i < 15; i++) {
        numeros += Math.floor(Math.random() * 10);
    }
    return numeros;
}

window.onload = obterInformacoesRede;
