function signUp() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const user = {
    username: username,
    password: password,
  };

  localStorage.setItem("user", JSON.stringify(user));

  alert("Sign up successful! Redirecting to login page...");

  window.location.href = "login.html";
}
