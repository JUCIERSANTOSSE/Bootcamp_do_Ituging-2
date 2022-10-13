
const data = new Date("August 3, 2020 19:15:00");
const hora = data.getHours();

if (hora < 12) {
    console.log ("Bom dia!");
} else if (hora >= 12 && hora <18) {
    console.log("Boa tarde!");
} else if (hora >= 18) {
    console.log("Boa noite!");
}