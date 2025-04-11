//---- For 2) [Browse available pets display]
class Pet {
  //class with all of the information about pet
  constructor(
    user,
    animal,
    breed,
    age,
    gender,
    alongDog,
    alongCat,
    alongChildren,
    comments,
    ownerName,
    ownerEmail
  ) {
    this.user = user;
    this.animal = animal;
    this.breed = breed;
    this.age = age;
    this.gender = gender;
    this.alongDog = alongDog;
    this.alongCat = alongCat;
    this.alongChildren = alongChildren;
    this.comments = comments;
    this.ownerName = ownerName;
    this.ownerEmail = ownerEmail;
  }
}

//The array containing all of the pets (I added two to test the code)
let arrPets = [];

function availablePets(arrPets) {
  for (var i = 0; i < arrPets.length; i++) {}
}

//Validation for the find a dog/cat page
function validation_findPet() {
  if (
    //if theres an empty field
    document.forms["findPetForm"]["animal"].value == "" ||
    document.forms["findPetForm"]["breed"].value == "" ||
    document.forms["findPetForm"]["age"].value == "" ||
    document.forms["findPetForm"]["gender"].value == ""
  ) {
    alert("Please fill out all of the form");
    return false;
  }
}

//Validation of the give away a pet form
function validation_GiveawayPet() {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (
    document.forms["giveawayPet"]["animal"].value == "" ||
    document.forms["giveawayPet"]["breed"].value == "" ||
    document.forms["giveawayPet"]["age"].value == "" ||
    document.forms["giveawayPet"]["gender"].value == "" ||
    document.forms["giveawayPet"]["along-dog"].value == "" ||
    document.forms["giveawayPet"]["along-cat"].value == "" ||
    document.forms["giveawayPet"]["along-children"].value == "" ||
    document.forms["giveawayPet"]["comments-area"].value == "" ||
    document.forms["giveawayPet"]["name"].value == "" ||
    document.forms["giveawayPet"]["email"].value == ""
  ) {
    alert("Please fill out all of the form");
    return false;
  } else if (!regex.test(document.forms["giveawayPet"]["email"].value)) {
    alert("The email is not the correct format.");
    return false;
  }
}

function validation_account() {
  //regex taken from https://www.reddit.com/r/regex/comments/104ew67/clarification_on_azaz09/
  const regexUsername = /^[A-Za-z0-9]+$/;

  //regex inspired by https://gist.github.com/frizbee/5318c77d2084fa75cd00ea131399581a
  const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,}$/;

  if (!regexUsername.test(document.forms["accountForm"]["username"].value)) {
    alert("The username is not the correct format.");
    return false;
  } else if (
    !regexPassword.test(document.forms["accountForm"]["password"].value)
  ) {
    alert("The password is not the correct format.");
    return false;
  }
}
