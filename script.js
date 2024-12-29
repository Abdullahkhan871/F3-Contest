let checkToken = JSON.parse(localStorage.getItem("userDetails"));


  // Sign up
if(window.location.pathname == "/index.html"){


    if (checkToken && checkToken.token) {
      window.location.href = "/profile.html";
    }


  let signUp = document.querySelector("#signup-form");
  let input = document.querySelectorAll("input");
  let errerMessage = document.createElement("p");
  let errorBox = document.querySelector(".error");
  signUp.addEventListener("submit", handleSubmit);
  function handleSubmit(e) {
    e.preventDefault();
    let toggle = 0;
    let token = "";
    let userDetails = {};
    const char =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    input.forEach((item) => {
      if (item.value) {
                toggle++;
                userDetails[item.name] = item.value;
      }
        console.log(item.value);
        errerMessage.innerText = "Error : All the fields are mandatory";
        errorBox.append(errerMessage);
        errerMessage.style.color = "red";
    });

    if ((userDetails.password != userDetails.cPassword) && (userDetails.password != " " && userDetails.cPassword !='')) {
      errerMessage.innerText = "Password and Confirm Password Should be same";
      errorBox.append(errerMessage);
      return;
    }

    for (let i = 0; i < 16; i++) {
      token += char[Math.floor(Math.random() * char.length)];
    }
    userDetails["token"] = token;

    if (toggle >= 4) {
      localStorage.setItem("userDetails", JSON.stringify(userDetails));
      errerMessage.innerText = "Successfully Signed Up!";
      errerMessage.style.color = 'green';
      errorBox.append(errerMessage);

      // redirecting to another page

      setTimeout(() => {
        window.location.href = "/profile.html";
      }, 5000);
    }
  }

  input.forEach((item) => {
    item.addEventListener("input", (e) => {
      errerMessage.innerText = "";
    });
  });
}





// profile script

if(window.location.pathname == '/profile.html'){


  if(checkToken && checkToken.token){
  //  check why this is not working its redirecting again again

  let h2 = document.querySelectorAll("h2");
  let logout = document.querySelector("#logout");
  h2.forEach((item) => {
    if (item.id == "userName") {
      item.innerText = `Full Name: ${checkToken.fullName}`;
    } else if (item.id == "userEmail") {
      item.innerText = `Full Name: ${checkToken.email}`;
    } else if (item.id == "userPassword") {
      item.innerText = `Full Name: ${checkToken.password}`;
    }
  });

  logout.addEventListener("click", handleLogout);

  function handleLogout() {
    localStorage.removeItem("userDetails");
    window.location.href = "index.html";
  }
}


else{
  window.location.href = 'index.html'
}
}