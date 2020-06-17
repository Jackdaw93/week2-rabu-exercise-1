function myName() {
  let name1 = document.getElementById("name").innerHTML;
  let phone1 = document.getElementById("phone").innerHTML;
  let email1 = document.getElementById("email").innerHTML;
  let pass1 = document.getElementById("password").innerHTML;
}

function showData() {
  let name1 = document.getElementById("name").value;
  let phone1 = document.getElementById("phone").value;
  let email1 = document.getElementById("email").value;
  let pass1 = document.getElementById("password").value;
  alert(`
  Nama Saya: ${name1} \n 
  No Hp: ${phone1} \n
  Email: ${email1} \n
  Password: ${pass1}
  `);
}

const button = document.getElementById("show");
button.addEventListener("click", showData);
