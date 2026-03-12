function yesClicked() {
    document.getElementById("message").innerHTML =
        "hello girly pop";

    document.getElementById("yesBtn").style.display = "none";
    document.getElementById("noBtn").style.display = "none";
}


function moveNo() {
    const noBtn = event.target;
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
}


