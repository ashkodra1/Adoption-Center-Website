//---- For 2) [Browse available pets display]
class Pet {
    //class with all of the information about pet
    constructor(
      type,
      breed,
      gender,
      age,
      alongDog,
      alongCat,
      forFamily,
      info,
      currentOwnerName,
      currentOwnerEmail,
      picture
    ) {
      this.type = type;
      this.breed = breed;
      this.gender = gender;
      this.age = age;
      this.alongDog = alongDog;
      this.alongCat = alongCat;
      this.forFamily = forFamily;
      this.info = info;
      this.currentOwnerName = currentOwnerName;
      this.currentOwnerEmail = currentOwnerEmail;
      this.picture = picture;
    }
  }
  
  //The array containing all of the pets (I added two to test the code)
  let arrPets = [
    new Pet(
      "Dog",
      "Mix breed",
      "Female",
      "5 years",
      true,
      false,
      true,
      "Picky eater",
      "John Doe",
      "JohnDoe@mail.com",
      "https://wl-brightside.cf.tsp.li/resize/728x/jpg/485/a29/d5d80f5095a03b5636e96c1072.jpg"
    ),
    new Pet(
      "Cat",
      "Maine Coone",
      "Male",
      "10 months",
      false,
      true,
      false,
      "Can do tricks",
      "Jane Doe",
      "JaneDoe@mail.com",
      "https://consumer-cms.petfinder.com/sites/default/files/images/content/Maine%20Coon%20Cat%204_0.jpg"
    ),
    new Pet(
      "Cat",
      "Persian",
      "Female",
      "2 years",
      true,
      true,
      true,
      "Indoor cat",
      "John Smith",
      "JohnSmith@mail.com",
      "https://upload.wikimedia.org/wikipedia/commons/8/81/Persialainen.jpg"
    ),
  ];
  
  function availablePets() {
    for (var i = 0; i < arrPets.length; i++) {
      document.getElementById("content_Pets").innerHTML +=
        "<div  class = 'content_info'><table><caption>" +
        arrPets[i].type +
        '</caption><tr><td><img src="' +
        arrPets[i].picture +
        '" alt="' +
        arrPets[i].type +
        '" height="145" width="142"/></td>' +
        "<td><ul><li>" +
        arrPets[i].breed +
        "</li>" +
        "<li>" +
        arrPets[i].gender +
        "</li>" +
        "<li>" +
        arrPets[i].age +
        " old</li>" +
        "<li>" +
        (arrPets[i].alongDog
          ? "Gets along with dogs"
          : "Doesn't get along with dogs") +
        "</li>" +
        "<li>" +
        (arrPets[i].alongCat
          ? "Gets along with cats"
          : "Doesn't get along with cats") +
        "</li>" +
        "<li>" +
        (arrPets[i].forFamily
          ? "Suitable for families with small children"
          : "Not suitable for families with small children") +
        "</li></ul></td>" +
        "<td><ul><li>Additional info: " +
        arrPets[i].info +
        "</li>" +
        "<li>Current owner: " +
        arrPets[i].currentOwnerName +
        "</li>" +
        "<li>Contact: " +
        arrPets[i].currentOwnerEmail +
        "</li></ul></td></tr></table>" +
        '<div class = "content_input"><input type="button" value="Interested"></input></div></div>';
    }
  }
  
  //Validation for the find a dog/cat page
  function validation_findPet() {

    if ( //if theres an empty field
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

  function validation_createAccount(){
    const regexUsername = /^[A-Za-z0-9]+$/;
    const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,}$/;

    if (!regexUsername.test(document.forms["accountForm"]["username"])) {
      alert("The username is not the correct format.");
      return false;
    }elseif (!regexPassword.test(document.forms["accountForm"]["password"])){
      alert("The password is not the correct format.");
      return false;
    }
  }
  