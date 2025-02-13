function showSurprise() {
    document.getElementById("message").innerHTML = "แปปเดียวเวลาก็ผ่านไป 3 เดือนแล้วเรารักเธอมากกว่าที่เธอคิดนะ ขอบคุณที่เกิดมาให้รักนะครับ  💖💖";
    document.getElementById("loveSong").play();
    createHearts();
}

function createHearts() {
    const heartContainer = document.querySelector(".hearts");
    
    for (let i = 0; i < 20; i++) {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 2 + 3 + "s";
        heartContainer.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
}
