function yesClicked() {
    document.getElementById("message").innerHTML =
        "Yayyy! 💕 I knew it! 😍";
}

function moveNo() {
    let x = Math.random() * 200 - 100;
    let y = Math.random() * 200 - 100;

    document.getElementById("noBtn").style.transform =
        `translate(${x}px, ${y}px)`;
}


