const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

const form = document.querySelector(".booking-form");
const message = document.querySelector("#bookingMessage");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    message.textContent = "Thank you! Your booking request has been received.";
    form.reset();
});

const reviews = [
    {
        text: "Perfect place for studying. The coffee is smooth and the atmosphere feels calm.",
        author: "— Student Customer"
    },
    {
        text: "The online booking system saves time during lunch breaks.",
        author: "— Young Professional"
    },
    {
        text: "The brunch is fresh and the staff are friendly. I would definitely come again.",
        author: "— Local Resident"
    },
    {
        text: "The membership rewards make me want to return more often.",
        author: "— Coffee Lover"
    },
    {
        text: "Warm design, clear menu and easy navigation. The website feels professional.",
        author: "— First-time Visitor"
    },
    {
        text: "It feels premium but still comfortable. A good place for weekend brunch.",
        author: "— Brunch Customer"
    },
    {
        text: "The website makes the café look trustworthy and easy to visit.",
        author: "— Local Visitor"
    },
    {
        text: "The menu is clear and the booking process is simple.",
        author: "— Weekend Visitor"
    },
    {
        text: "A nice local café with a warm brand feeling.",
        author: "— Local Resident"
    }
];

const bubbleArea = document.querySelector(".bubble-area");

const positions = [
    { left: "1%", top: "25px" },
    { left: "27%", top: "0px" },
    { left: "54%", top: "35px" },
    { right: "1%", top: "85px" },
    { left: "8%", top: "235px" },
    { left: "36%", top: "250px" },
    { right: "8%", top: "280px" },
    { left: "62%", top: "190px" }
];

let positionIndex = 0;
let reviewIndex = 0;
let activePositions = [];

function createReviewBubble() {
    const activeBubbles = document.querySelectorAll(".review-bubble");

    if (activeBubbles.length >= 5) {
        return;
    }

    let selectedPosition = null;
    let selectedPositionIndex = null;

    for (let i = 0; i < positions.length; i++) {
        const currentIndex = (positionIndex + i) % positions.length;

        if (!activePositions.includes(currentIndex)) {
            selectedPosition = positions[currentIndex];
            selectedPositionIndex = currentIndex;
            positionIndex = (currentIndex + 1) % positions.length;
            break;
        }
    }

    if (selectedPosition === null) {
        return;
    }

    const review = reviews[reviewIndex];
    reviewIndex = (reviewIndex + 1) % reviews.length;

    const bubble = document.createElement("div");
    bubble.className = "review-bubble";

    bubble.innerHTML = `
    ${review.text}
    <span>${review.author}</span>
  `;

    Object.assign(bubble.style, selectedPosition);

    activePositions.push(selectedPositionIndex);
    bubbleArea.appendChild(bubble);

    setTimeout(() => {
        bubble.classList.add("hide");
    }, 5200);

    setTimeout(() => {
        bubble.remove();
        activePositions = activePositions.filter(index => index !== selectedPositionIndex);
    }, 6200);
}

createReviewBubble();
setTimeout(createReviewBubble, 600);
setTimeout(createReviewBubble, 1200);
setTimeout(createReviewBubble, 1800);
setTimeout(createReviewBubble, 2400);
setInterval(createReviewBubble, 1300);

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {
    question.addEventListener("click", () => {
        const item = question.parentElement;
        item.classList.toggle("open");
    });
});

const newsletterForm = document.querySelector(".newsletter-form");
const newsletterMessage = document.getElementById("newsletterMessage");

if (newsletterForm) {
    newsletterForm.addEventListener("submit", function(event) {
        event.preventDefault();
        newsletterMessage.textContent = "Thank you for subscribing to Urban Brew updates.";
        newsletterForm.reset();
    });
}

const bgMusic = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");
const musicText = document.querySelector(".music-text");
const musicIcon = document.querySelector(".music-icon");

const musicList = [
    "music/coffee-1.mp3"
];

let currentMusic = 0;
let isPlaying = false;

bgMusic.src = musicList[currentMusic];
bgMusic.volume = 0.35;
bgMusic.loop = true;

function startMusic() {
    bgMusic.play()
        .then(() => {
            isPlaying = true;
            musicBtn.classList.add("playing");
            musicIcon.textContent = "Ⅱ";
            musicText.textContent = "Music On";
        })
        .catch(() => {
            console.log("Autoplay was blocked. Waiting for user interaction.");
        });
}

window.addEventListener("load", startMusic);

document.addEventListener("click", () => {
    if (!isPlaying) {
        startMusic();
    }
}, { once: true });

musicBtn.addEventListener("click", (event) => {
    event.stopPropagation();

    if (isPlaying) {
        bgMusic.pause();
        isPlaying = false;
        musicBtn.classList.remove("playing");
        musicIcon.textContent = "♪";
        musicText.textContent = "Coffee Music";
    } else {
        startMusic();
    }
});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.15});document.querySelectorAll('section').forEach(s=>{s.classList.add('fade-section');io.observe(s)});const lb=document.getElementById('lightbox');const lbimg=document.getElementById('lightbox-img');document.querySelectorAll('.gallery-grid img').forEach(i=>i.addEventListener('click',()=>{lb.classList.add('show');lbimg.src=i.src;}));if(lb)lb.addEventListener('click',()=>lb.classList.remove('show'));const toast=document.createElement('div');toast.className='toast';document.body.appendChild(toast);if(newsletterForm){newsletterForm.addEventListener('submit',()=>{toast.textContent='✓ Successfully Subscribed';toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),2500);});}