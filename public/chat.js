const socket = io("/");

const userName = document.getElementById("username");
const loginBtn = document.getElementById("submitUsername");

loginBtn.addEventListener("click", () => {
   const { value } = userName;
   console.log(value);
})