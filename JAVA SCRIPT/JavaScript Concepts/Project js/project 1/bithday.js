// DOM Element Selectors
const landingScreen = document.getElementById('landing-screen');
const startBtn = document.getElementById('start-btn');
const panelScreen = document.getElementById('panel-screen');
const finalScreen = document.getElementById('final-screen');

const btnLights = document.getElementById('btn-lights');
const btnMusic = document.getElementById('btn-music');
const btnBalloons = document.getElementById('btn-balloons');
const btnMessage = document.getElementById('btn-message');

const fairyLights = document.getElementById('fairy-lights');
const bgMusic = document.getElementById('bg-music');
const curtainLeft = document.getElementById('curtain-left');
const curtainRight = document.getElementById('curtain-right');

// 1. Landing Button click logic (Reveals Panels)
startBtn.addEventListener('click', () => {
    landingScreen.classList.add('hidden');
    panelScreen.classList.remove('hidden');
    panelScreen.classList.add('fade-in');
});

// 2. Turn on Lights Logic
btnLights.addEventListener('click', () => {
    fairyLights.style.opacity = '1';
    btnLights.disabled = true;
});

// 3. Play Music Logic
btnMusic.addEventListener('click', () => {
    bgMusic.play().catch(error => {
        console.log("Audio playback waiting for browser permission:", error);
    });
    btnMusic.disabled = true;
});

// // 4. Fly Balloons Logic (Generates 30 Random Balloons)
// btnBalloons.addEventListener('click', () => {
//     btnBalloons.disabled = true;
//     const colors = ['#ff2a74', '#ff70a6', '#ff97b7', '#ffbe0b', '#00f3ff', '#b5179e', '#e63946'];
    
//     for (let i = 0; i < 30; i++) {
//         createBalloon(colors);
//     }
// });

// function createBalloon(colors) {
//     const balloon = document.createElement('div');
//     balloon.classList.add('balloon');

//     // Setup random features
//     const randomColor = colors[Math.floor(Math.random() * colors.length)];
//     const randomLeft = Math.random() * 100; // Left position in view width %
//     const randomSize = Math.random() * (60 - 35) + 35; // Size between 35px & 60px
//     const duration = Math.random() * (9 - 5) + 5; // Speed between 5s & 9s
//     const delay = Math.random() * 2; // Staggered entry delay

//     // Assign styles
//     balloon.style.backgroundColor = randomColor;
//     balloon.style.color = randomColor; // Match tie knot color
//     balloon.style.left = `${randomLeft}vw`;
//     balloon.style.width = `${randomSize}px`;
//     balloon.style.height = `${randomSize * 1.2}px`;
    
//     // Creating random unique animation name to avoid collision
//     const swayAnimationName = `sway-${Math.floor(Math.random() * 1000)}`;
//     const swayDistance = Math.random() * (40 - 15) + 15; // Left-Right sway distance

//     // Injecting keyframes dynamically inside a style tag
//     const styleSheet = document.createElement("style");
//     document.head.appendChild(styleSheet);
    
//     const keyframes = `
//         @keyframes floatUp-${swayAnimationName} {
//             0% { transform: translateY(0); opacity: 0.85; }
//             85% { opacity: 0.85; }
//             100% { transform: translateY(-120vh); opacity: 0; }
//         }
//         @keyframes sway-${swayAnimationName} {
//             0%, 100% { transform: translateX(0); }
//             50% { transform: translateX(${swayDistance}px); }
//         }
//     `;
//     styleSheet.innerHTML = keyframes;

//     // Apply multiple animations (Floating up + Swaying left/right)
//     balloon.style.animation = `
//         floatUp-${swayAnimationName} ${duration}s linear ${delay}s forwards, 
//         sway-${swayAnimationName} 3s ease-in-out ${delay}s infinite alternate
//     `;

//     document.body.appendChild(balloon);

//     // Garbage collector: Automatically remove elements from memory after flight finishes
//     setTimeout(() => {
//         balloon.remove();
//         styleSheet.remove();
//     }, (duration + delay) * 1000);
// }

// // 4. Fly Balloons (Dynamically creating elements)
// function flyBalloons() {
//     const container = document.getElementById('balloonContainer');
//     const colors = ['#ff2e63', '#08d9d6', '#eaeaea', '#ffde7d', '#f9a826'];

//     // 30 Balloons generate karne ke liye loop
//     for (let i = 0; i < 30; i++) {
//         const balloon = document.createElement('div');
//         balloon.classList.add('balloon');
        
//         // Random placement, color aur speed background me float karne ke liye
//         balloon.style.left = Math.random() * 100 + 'vw';
//         balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
//         balloon.style.animationDelay = Math.random() * 3 + 's';
//         balloon.style.animationDuration = (Math.random() * 3 + 4) + 's'; // 4-7 seconds
        
//         container.appendChild(balloon);
//     }

//     document.getElementById('sequenceTitle').innerText = "Almost there...";
//     document.getElementById('btnBalloons').classList.add('hidden-element');
//     document.getElementById('btnMessage').classList.remove('hidden-element');
// }

//04
function flyBalloons() {
    const container = document.getElementById('balloonContainer');
    
    // Agar balloonContainer HTML me nahi hai, toh use body me create kar dega safely
    if (!container) {
        const newContainer = document.createElement('div');
        newContainer.id = 'balloonContainer';
        document.body.appendChild(newContainer);
    }
    
    const activeContainer = document.getElementById('balloonContainer');
    const colors = ['#ff2e63', '#08d9d6', '#eaeaea', '#ffde7d', '#f9a826', '#ff82a9'];

    // 40 colorful balloons loop se fly karenge
    for (let i = 0; i < 40; i++) {
        const balloon = document.createElement('div');
        balloon.classList.add('balloon');
        
        // Random properties injection
        const randomX = Math.random() * 100; // Left positions spanning width
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        const delay = Math.random() * 2; // Starts within 2 seconds interval
        const duration = (Math.random() * 3 + 4); // Animation time 4 to 7 seconds

        balloon.style.left = `${randomX}vw`;
        balloon.style.backgroundColor = randomColor;
        balloon.style.boxShadow = `inset -7px -7px 10px rgba(0,0,0,0.4), 0 0 15px ${randomColor}88`; // Glow effect
        
        // CSS Animation attachment explicitly injection
        balloon.style.animation = `floatUp ${duration}s linear ${delay}s forwards`;
        
        // DOM me append karna
        activeContainer.appendChild(balloon);

        // Animation khatam hone ke baad DOM se balloon clean karna taaki memory load na badhe
        setTimeout(() => {
            balloon.remove();
        }, (duration + delay) * 1000);
    }

    // Next step button toggle logic
    document.getElementById('sequenceTitle').innerText = "Almost there...";
    document.getElementById('btnBalloons').classList.add('hidden-element');
    document.getElementById('btnMessage').classList.remove('hidden-element');
}

// 5. Grand Finale: Curtain Reveal & Show Message Logic
btnMessage.addEventListener('click', () => {
    // Curtains block the screen tightly for a split second first
    curtainLeft.classList.remove('left');
    curtainRight.classList.remove('right');
    
    setTimeout(() => {
        // Swap panels in background while curtains are closed
        panelScreen.classList.add('hidden');
        finalScreen.classList.remove('hidden');
        finalScreen.classList.add('fade-in');

        // Cinematic separation smooth trigger
        curtainLeft.classList.add('left');
        curtainRight.classList.add('right');
    }, 400); // 400ms delay matches screen transition smoothly
});

// music
let hideBtn = document.getElementById("hideBtn");
let player = document.getElementById("youtube-player");

hideBtn.addEventListener("click", () => {
    if(player.style.display === "none"){
        player.style.display = "block";
        hideBtn.innerText = "Hide Player";
    }else{
        player.style.display = "none";
        hideBtn.innerText = "Show Player";
    }
});