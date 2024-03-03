async function login(e) {
  e.preventDefault(); // Corrected method name

  var username = document.getElementById("uname").value;
  var password = document.getElementById("password").value;
  const data = {
    username: username,
    password: password
  };
  loginUrl = 'http://localhost:3000/signin';

  const response = await  fetch(loginUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  })
  const res = await response.json();
  alert(res.message);
  }
function reg() {
  var pw = document.getElementById('password').value;
  var rpw = document.getElementById('repassword').value;
  if (pw !== rpw) { 
//do nothing
}
}