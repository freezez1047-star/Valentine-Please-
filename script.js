let yesSize = 1;
let noAttempts = 0;

// Create floating hearts background
function createFloatingHearts() {
    const heartBg = document.getElementById('heartBg');
    const hearts = ['💕', '💖', '💗', '💓', '💝'];
    
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 5 + 's';
        heart.style.animationDuration = (10 + Math.random() * 10) + 's';
        heartBg.appendChild(heart);
    }
}

// Move No button and grow Yes button
function moveButton() {
    const noBtn = document.getElementById('noBtn');
    const yesBtn = document.getElementById('yesBtn');
    const container = document.getElementById('buttonsContainer');
    
    // Get container dimensions
    const containerRect = container.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();
    
    // Calculate maximum positions
    const maxX = containerRect.width - btnRect.width - 40;
    const maxY = containerRect.height - btnRect.height - 40;
    
    // Random new position
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;
    
    // Move the button
    noBtn.style.left = newX + 'px';
    noBtn.style.top = newY + 'px';
    
    // Grow Yes button
    noAttempts++;
    yesSize += 0.15;
    yesBtn.style.transform = `scale(${yesSize})`;
    
    // Make Yes button more prominent with attempts
    if (noAttempts > 3) {
        yesBtn.style.animation = 'heartbeat 0.5s infinite';
    }
    
    // Change No button text based on attempts
    const noTexts = ['No', 'Are you sure?', 'Really?', 'PLEASE ??', 'Pretty please?', 'Woman please ?', 'Please samhi :(', 'Just click Yes! 🥺'];
    if (noAttempts < noTexts.length) {
        noBtn.textContent = noTexts[noAttempts];
    }
    
    return false;
}

// Show letter page
function showLetter() {
    const questionPage = document.getElementById('questionPage');
    const letterPage = document.getElementById('letterPage');
    
    // Create rose background
    createRoseBackground();
    
    // Hide question, show letter
    questionPage.classList.add('hidden');
    letterPage.classList.add('active');
    
    // Celebration confetti
    createConfetti();
}

// Create rose background
function createRoseBackground() {
    const rosesBg = document.getElementById('rosesBg');
    const roses = ['🌹', '🤍'];
    
    for (let i = 0; i < 30; i++) {
        const rose = document.createElement('div');
        rose.className = 'rose';
        rose.textContent = roses[i % 2];
        rose.style.left = (Math.random() * 100) + '%';
        rose.style.top = (Math.random() * 100) + '%';
        rose.style.transform = `rotate(${Math.random() * 360}deg)`;
        rosesBg.appendChild(rose);
    }
}

// Confetti celebration
function createConfetti() {
    const confettiColors = ['💕', '💖', '💗', '💓', '💝', '❤️', '🌹', '✨', '⭐'];
    const body = document.body;
    
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.top = '-50px';
            confetti.style.fontSize = '30px';
            confetti.style.zIndex = '9999';
            confetti.textContent = confettiColors[Math.floor(Math.random() * confettiColors.length)];
            confetti.style.pointerEvents = 'none';
            
            const duration = 3 + Math.random() * 2;
            confetti.style.animation = `fall ${duration}s linear forwards`;
            
            body.appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
            }, duration * 1000);
        }, i * 30);
    }
}

// Add heartbeat animation to CSS if not already there
const style = document.createElement('style');
style.textContent = `
    @keyframes heartbeat {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.2); }
    }
`;
document.head.appendChild(style);

// Initialize when page loads
createFloatingHearts();
