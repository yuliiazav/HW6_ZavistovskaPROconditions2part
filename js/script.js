let emailValid = "admin@test.io";
let passwordValid = "admin1234";

let emailQuestion = prompt("What is your email address?").trim();
 while (emailQuestion !== emailValid) {
     alert ("The email is incorrect. Try again!");
     emailQuestion = prompt("What is your email address?");
 }

let passwordQuestion = prompt("What is your password?").trim();
 while (passwordQuestion !== passwordValid) {
     alert ("The password is not correct!Try again!");
     passwordQuestion = prompt("What is your password?");
 }

alert("You have successfully logged in! Welcome!");

 //  або з умовою як нижче
 // if (emailQuestion === emailValid && passwordQuestion === passwordValid) {
 //     alert("You have successfully logged in! Welcome!");
 // }

