document.addEventListener('DOMContentLoaded', function() {
    const loveExplosion = document.getElementById('loveExplosion');
    const message = document.getElementById('message');
    const bell = document.getElementById('bell');
    const surpriseBtn = document.getElementById('surpriseBtn');
    const photoFrame = document.getElementById('photoFrame');
    
    // Lista de palabras bonitas y apodos románticos
    const romanticWords = [
        "Amor mío",
        "Mi Cielo",
        "Mi vida",
        "Mi Corazón",
        "Mi Princesa",
        "Mi reina",
        "Mi Tesoro",
        "Mi sonrisita de luna",
        "Mi todo",
        "Mi razón de ser",
        "Mi ojitos bonitos",
        "Mi paz",
        "Mi felicidad",
        "Mi complemento",
        "Mi inspiración",
        "Mi fortaleza",
        "Mi sonrisa",
        "Mi destino",
        "Mi dulzura",
        "Mi consuelo",
        "Mi alegría",
        "Mi amor eterno",
        "Mi amor verdadero",
        "Mi amor infinito",
        "Amor de mi vida",
        "Mi amorcito",
        "Mi Niña Bonita",
        "Mi Chiquita",
        "Mi Bebé"
    ];

    // Función para crear corazones flotantes
    function createHearts() {
        for (let i = 0; i < 20; i++) {
            const heart = document.createElement('div');
            heart.innerHTML = '❤️';
            heart.classList.add('heart');
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.top = Math.random() * 100 + 'vh';
            heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
            heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
            document.body.appendChild(heart);
            
            setTimeout(() => {
                heart.remove();
            }, 5000);
        }
    }
    
    // Función para mostrar palabras románticas
    function showRomanticWords() {
        for (let i = 0; i < 15; i++) {
            const wordElement = document.createElement('div');
            const randomWord = romanticWords[Math.floor(Math.random() * romanticWords.length)];
            
            wordElement.textContent = randomWord;
            wordElement.style.position = 'fixed';
            wordElement.style.left = Math.random() * 85 + 'vw';
            wordElement.style.top = Math.random() * 85 + 'vh';
            wordElement.style.fontSize = (Math.random() * 20 + 16) + 'px';
            wordElement.style.color = getRandomColor();
            wordElement.style.fontWeight = 'bold';
            wordElement.style.zIndex = '1001';
            wordElement.style.textShadow = '1px 1px 3px rgba(0,0,0,0.3)';
            wordElement.style.animation = `float ${(Math.random() * 3 + 2)}s ease-in-out forwards`;
            wordElement.style.cursor = 'default';
            wordElement.style.pointerEvents = 'none';
            
            document.body.appendChild(wordElement);
            
            setTimeout(() => {
                wordElement.remove();
            }, 3000);
        }
    }
    
    // Función para generar colores aleatorios románticos
    function getRandomColor() {
        const colors = [
            '#ff4081', // Rosa fuerte
            '#e91e63', // Rosa
            '#c2185b', // Rosa oscuro
            '#9c27b0', // Púrpura
            '#673ab7', // Púrpura oscuro
            '#3f51b5', // Azul índigo
            '#2196f3', // Azul
            '#03a9f4', // Azul claro
            '#00bcd4', // Cian
            '#009688', // Verde azulado
            '#4caf50', // Verde
            '#8bc34a', // Verde lima
            '#cddc39', // Lima
            '#ffeb3b', // Amarillo
            '#ffc107', // Ámbar
            '#ff9800', // Naranja
            '#ff5722', // Naranja oscuro
            '#795548', // Marrón
            '#607d8b'  // Azul grisáceo
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    }
    
    // Función para mostrar la explosión de amor
    function showLoveExplosion() {
        loveExplosion.style.opacity = '1';
        loveExplosion.style.pointerEvents = 'auto';
        createHearts();
        
        setTimeout(() => {
            loveExplosion.style.opacity = '0';
            loveExplosion.style.pointerEvents = 'none';
            message.classList.add('visible');
            photoFrame.classList.add('visible');
        }, 3000);
    }
    
    // Evento para la campana
    bell.addEventListener('click', function() {
        bell.style.animation = 'none';
        setTimeout(() => {
            bell.style.display = 'none';
            showLoveExplosion();
        }, 500);
    });
    
    // Evento para la sorpresa adicional
    surpriseBtn.addEventListener('click', function() {
        createHearts();
        showRomanticWords();
    });
});