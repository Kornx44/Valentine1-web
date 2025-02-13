function showSurprise() {
    document.getElementById("message").innerHTML = "แปปเดียวเวลาก็ผ่านไป 3 เดือนแล้วเรารักเธอมากกว่าที่เธอคิดนะ ขอบคุณที่เกิดมาให้รักนะครับ  💖💖";
    document.getElementById("loveSong").play();
    createHearts();
    
    // Hide the "See more" button and show the back button
    document.querySelector('button[onclick="showSurprise()"]').style.display = 'none';
    document.getElementById('backButton').style.display = 'block';
    
    // Store the original message (optional, but good practice)
    const originalMessage = document.getElementById('message').innerHTML;
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

function goBack() {
    // Show the "See more" button and hide the back button
    document.querySelector('button[onclick="showSurprise()"]').style.display = 'block';
    document.getElementById('backButton').style.display = 'none';
    
    // Restore the original message
    document.getElementById('message').innerHTML = 'ขอให้วันนี้เป็นวันที่เต็มไปด้วยความรักและความสุขนะครับ! 😘';
    
    // Reset any other changes made by showSurprise()
    // ... add other reset code if needed ...
}
