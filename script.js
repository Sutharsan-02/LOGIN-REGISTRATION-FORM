async function login(e) {
  e.preventDefault(); // Corrected method name

  var username = document.getElementById("uname").value;
  var password = document.getElementById("password").value;
  const data = {
    username: username,
    password: password
  };
  loginUrl = 'http://localhost:3000/signin';
  try{
  const response = await  fetch(loginUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  })
  const responseData = await response.json();

  if (response.ok) {
    alert(responseData.message);
  } else {
    alert(responseData.error);
  }} catch (error) {
    console.error('Error:', error);
    alert('An error occurred. Please try again.');
  }
  }
  async function reg() {
    var email = document.getElementById('email').value;
    var pw = document.getElementById('password').value;
    var rpw = document.getElementById('repassword').value;
    var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    var passwordregex = regularExpression.test(pw);
  
    if (passwordregex) {
      if (pw == rpw) {
        try {
            const regdatas = {
                email: email,
                password: pw
            };
            var signupUrl = 'http://localhost:3000/signup';

            const response = await fetch(signupUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(regdatas)
            });
            
            if (!response.ok) {
                throw new Error('Failed to register');
            }

            const text = await response.text();
            console.log(text);
            alert("Registered Successfully");
            window.location.reload();
        } catch (error) {
            console.error("Error during registration:", error);
            alert("Failed to register");
        }
      } else {
        alert("Password mismatch");
      }
    } else {
      var alertMessage = document.getElementById("alert");
      alertMessage.innerText = "Password must contain at least one number, one alphabet, one symbol, and be at least 8 characters long";
    }
}

  