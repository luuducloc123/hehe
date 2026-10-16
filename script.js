
const gift = document.getElementById("gift");
const openBtn = document.getElementById("openBtn");
const message = document.getElementById("message");
const description = document.getElementById("description");

openBtn.addEventListener("click", function () {
    gift.classList.add("open");

    openBtn.textContent = "Món quà dành cho em(con mồn lèo ) ❤️";
    description.textContent = "Bất ngờ nho nhỏ của anh đây...";

    setTimeout(function () {
        gift.style.display = "none";
        openBtn.style.display = "none";
        description.style.display = "none";
        message.classList.remove("hidden");
    }, 650);
});

function createHeart() {
    const heart = document.createElement("span");
    heart.className = "heart";
    heart.textContent = ["❤️", "💕", "💗", "💖"][
        Math.floor(Math.random() * 4)
    ];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (4 + Math.random() * 4) + "s";

    document.getElementById("hearts").appendChild(heart);

    setTimeout(function () {
        heart.remove();
    }, 8000);
}

setInterval(createHeart, 700);
