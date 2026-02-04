function yesClicked() {
    document.getElementById("message").innerText =
        "Yayyy! 💕 I knew you’d say YES 😍";
}

function moveNo() {
    const noBtn = event.target;
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
}
