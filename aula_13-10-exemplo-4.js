
const data = new Date("August 3, 2020 06:15:00");
const hora = data.getHours();

if (hora < 12) {
    console.log ("Bom dia!");
} else {
    console.log("Boa tarde!");
    console.log("Boa noite!");

}