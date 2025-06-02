const texts = [ //文本//
    "Lazy is keep in life",
    "Why so serious?",
    "Ahh, just a very simple bug. I'll fix it in this century",
    "Why they have girlfriend?",
    "F*ck",
    "Why this shit can't running? I didn't find any problem of this shit",
    "I don't car",
    "No body care you, keep a goblin",
    "You should relized yourself",
    "Money no Money, Braining no Braining, Loving no Loving",


];
const index = Math.floor(Math.random() * texts.length);
document.getElementById("random-text").textContent = texts[index];
