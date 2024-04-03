window.onload = function() {
    const visitorCount = document.getElementById('visitor-count');
    let visitors = 0;

    // Simular el incremento de visitas cada segundo
    const visitorInterval = setInterval(() => {
        visitors += Math.floor(Math.random() * 3); // Incrementar entre 0 y 9 visitantes aleatorios
        visitorCount.textContent = visitors;
    }, 1000); // Cada 1 segundo (1000 milisegundos)
};