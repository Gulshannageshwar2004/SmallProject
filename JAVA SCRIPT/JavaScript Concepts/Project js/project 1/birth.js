// Step 1 se Step 2 par jaane ke liye
function goToStep2() {
    document.getElementById('step1').classList.remove('active');
    document.getElementById('step2').classList.add('active');
}

// 1. Turn On Lights
function turnOnLights() {
    const lights = document.getElementById('fairyLights');
    lights.style.opacity = '1';
    
    // Title badlein aur agla button dikhayein
    document.getElementById('sequenceTitle').innerText = "Music makes it better...";
    document.getElementById('btnLights').classList.add('hidden-element');
    document.getElementById('btnMusic').classList.remove('hidden-element');
}

// 2. Play Music
function playMusic() {
    const audio = document.getElementById('bgMusic');
    audio.play().catch(error => console.log("Audio autoplay blocked or failed:", error));

    document.getElementById('sequenceTitle').innerText = "Let the colors fly!";
    document.getElementById('btnMusic').classList.add('hidden-element');
    document.getElementById('btnBalloons').classList.remove('hidden-element');
}

// 3. Fly Balloons (Dynamically creating elements)
function flyBalloons() {
    const container = document.getElementById('balloonContainer');
    const colors = ['#ff2e63', '#08d9d6', '#eaeaea', '#ffde7d', '#f9a826'];

    // 30 Balloons generate karne ke liye loop
    for (let i = 0; i < 30; i++) {
        const balloon = document.createElement('div');
        balloon.classList.add('balloon');
        
        // Random placement, color aur speed background me float karne ke liye
        balloon.style.left = Math.random() * 100 + 'vw';
        balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        balloon.style.animationDelay = Math.random() * 3 + 's';
        balloon.style.animationDuration = (Math.random() * 3 + 4) + 's'; // 4-7 seconds
        
        container.appendChild(balloon);
    }

    document.getElementById('sequenceTitle').innerText = "Almost there...";
    document.getElementById('btnBalloons').classList.add('hidden-element');
    document.getElementById('btnMessage').classList.remove('hidden-element');
}

// 4. Show Message (Curtain Animation Reveal)
function showMessage() {
    // Buttons screen ko chupayein
    document.getElementById('step2').classList.remove('active');
    
    // Curtain screen ko activate karein
    const curtainContainer = document.getElementById('step3');
    curtainContainer.style.display = 'block';
    curtainContainer.classList.add('active');

    // Chote delay ke baad curtains ko open karein
    setTimeout(() => {
        document.getElementById('leftCurtain').classList.add('open-left');
        document.getElementById('rightCurtain').classList.add('open-right');
        
        // Card ko fade-in karein
        document.getElementById('birthdayCard').style.opacity = '1';
    }, 300);
}

// 5. Show Photo Gallery
function showGallery() {
    // Message card ko wipe out karke grid display karein
    document.getElementById('birthdayCard').classList.add('hidden-element');
    document.getElementById('gallerySection').classList.remove('hidden-element');
}