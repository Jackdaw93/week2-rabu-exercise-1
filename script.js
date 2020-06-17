function showData() {
  let name1 = document.getElementById("name").value;
  let phone1 = document.getElementById("phone").value;
  let email1 = document.getElementById("email").value;
  let pass1 = document.getElementById("password").value;

  /*Alert */
  alert(`
  Nama Saya: ${name1}
  No Hp: ${phone1}
  Email: ${email1}
  Password: ${pass1}
  `);
}

const button = document.getElementById("show");
button.addEventListener("click", showData);
