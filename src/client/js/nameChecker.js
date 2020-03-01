function checkForName(urlVal) {
  // console.log("::: Running checkForName :::", inputText);
  // let names = ["Picard", "Janeway", "Kirk", "Archer", "Georgiou"];

  // if (names.includes(inputText)) {
  //   alert("Welcome, Captain!");
  // }

  const error = document.querySelector(".error-msg");
  const urlValidator = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;

  function hideMsg() {
    error.classList.remove("show");
    error.classList.add("hide");
  }

  function showMsg() {
    error.classList.remove("hide");
    error.classList.add("show");
  }

  if (urlValidator.test(urlVal)) {
    hideMsg();
  } else {
    showMsg();
  }
}

export { checkForName };
