let age = 18
let nationality = "nepali"
if (age >= 18 && nationality == "nepali") {
    console.log("You are eligible to vote.");
}
else if (age >= 18 && nationality != "nepali") {
    console.log("You are not eligible to vote because you are not the citizen of this country.");
}
else {
    console.log("You are not eligible to vote.");
}