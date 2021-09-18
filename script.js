var age = 19;
var isFemale = true;
var driverStatus = "bob";
var firstName = "Bram";
var totalAmount = 120;

if (age >= 18 && age < 26) {
    console.log("Je mag naar binnen met 50% korting");
} else if (age >= 18 && age >= 26) {
    console.log("Je mag naar binnen!");
} else {
    console.log("Nope, je mag niet naar binnen");
}

if (isFemale) {
    console.log("Je ticket zegt dat je een vrouw bent!");
} else {
    console.log(
        "Helaas je hebt aangegeven op je ticket dat je een man bent, je mag niet naar binnen"
    );
}

if (firstName == "Bram" || firstName == "Sarah") {
    console.log("Je heet Bram of Sarah, dus je krijgt een gratis biertje!");
} else {
    console.log("Geen gratis bier helaas!");
}

if (totalAmount >= 25 && totalAmount < 50) {
    console.log("Je krijgt gratis (vega)bitterballen!")
} else if (totalAmount >= 50 && totalAmount < 100) {
    console.log("Je krijgt gratis een portie nachos!")
} else if (totalAmount >= 100) {
    console.log("Voor jou een gratis fles champagne!")
}