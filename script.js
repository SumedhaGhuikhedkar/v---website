function yesClicked() {
    document.getElementById("message").innerHTML =
        "💖 Achha hua u said YES.. hehe nhi to kuch bhi ho skta tha aapke sath 💖<br>" +
        "Thankyou MINI...I lovee uuu soo much🌹";

    document.getElementById("yesBtn").style.display = "none";
    document.getElementById("noBtn").style.display = "none";
}


function moveNo() {
    const noBtn = event.target;
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

