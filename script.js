let signUp = document.querySelector("#signup-form");
let input = document.querySelectorAll("input");
let errerMessage = document.createElement("p");
let errorBox = document.querySelector(".error");

signUp.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  let toggle = false;
  let token = "";
  let userDetails = {};
const char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  input.forEach((item) => {
    if (!item.value) {
      errerMessage.innerText = "Error : All the fields are mandatory";
      errorBox.append(errerMessage);
      return;
    }
    toggle = true;
    userDetails[item.name] = item.value;
  });

  if (userDetails.password != userDetails.cPassword) {
    errerMessage.innerText = "Password and Confirm Password Should be same";
    errorBox.append(errerMessage);
    return;
  }

  for (let i = 0; i < 16; i++) {
    token += char[Math.floor(Math.random() * char.length)];
  }
  userDetails['token'] = token;

  if(toggle){
    localStorage.setItem(userDetails.email, JSON.stringify(userDetails));
  }
}

input.forEach((item) => {
  item.addEventListener("input", (e) => {
    errerMessage.innerText = "";
  });
});



// function handleSubmit(e) {
//   e.preventDefault();

//   let fullName = document.querySelector("#fullName").value;
//   let email = document.querySelector("#email").value;
//   let password = document.querySelector("#password").value;
//   let cPassword = document.querySelector("#cPassword").value;

//   console.log(fullName, email, password, cPassword);

//   if (!fullName && !email && !password && !cPassword) {
//     errerMessage.innerText = "Error : All the fields are mandatory";
//     errorBox.append(errerMessage);
//     return;
//   }

//   if (password != cPassword) {
//     errerMessage.innerText = "Password and Confirm Password Should be same";
//     errorBox.append(errerMessage);
//     return;
//   }

//   let userDetails = {};

//   input.forEach((item) => {
//     userDetails[item.name] = item.value;
//   });
//   console.log(userDetails);

//   //   localStorage.setItem()
// }
