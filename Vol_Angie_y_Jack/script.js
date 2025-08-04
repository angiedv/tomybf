
let noClickCount = 0;

function playSong(src) {
    const player = document.getElementById("audioPlayer");
    player.src = src;
    player.style.display = "block";
    player.play();
}

function yesClicked() {
    document.getElementById("response").innerHTML = "💚 Yo también te amo muchísimo 💚<br><img src='stickers/si.png' width='120'>";
}

function noClicked() {
    noClickCount++;
    const noBtn = document.getElementById("noBtn");
    const yesBtn = document.getElementById("yesBtn");
    if (noClickCount >= 3) {
        noBtn.style.display = "none";
        document.getElementById("response").innerHTML = "<img src='stickers/no.png' width='120'>";
    } else {
        noBtn.style.transform = `scale(${1 - noClickCount * 0.2})`;
        yesBtn.style.transform = `scale(${1 + noClickCount * 0.2})`;
    }
}
