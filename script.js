let signUp = document.querySelector("#signup-form");
let input = document.querySelectorAll("input");
let errerMessage = document.createElement("p");
let errorBox = document.querySelector(".error");

signUp.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  let token = "";
  let userDetails = {};

  input.forEach((item) => {
    if (!item.value) {
      errerMessage.innerText = "Error : All the fields are mandatory";
      errorBox.append(errerMessage);
      return;
    }
    userDetails[item.name] = item.value;
  });

  if (userDetails.password != userDetails.cPassword) {
    errerMessage.innerText = "Password and Confirm Password Should be same";
    errorBox.append(errerMessage);
    return;
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
