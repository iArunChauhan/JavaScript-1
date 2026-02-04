const cards = document.getElementsByClassName("card");

let name = document.getElementById("name");
let type = document.getElementById("type");

for (let card of cards) {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "scale(1.1)";
        card.style.background = "#4CAF50";
        card.style.color = "white";

            name.textContent = "Arun Kumar"; 
        type.textContent = "Backend Developer";    
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "scale(1)";
        card.style.background = "#f1f1f1";
        card.style.color = "black";
    });


     card.addEventListener("mouseleave", () => {
        name.textContent = "Aryan Gupta"; 
        type.textContent = "Frontened Developer";    
    });

   
}