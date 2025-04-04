function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const storedUser = JSON.parse(localStorage.getItem("user"));

  if (
    storedUser &&
    storedUser.username === username &&
    storedUser.password === password
  ) {
    alert("Login successful! Redirecting to home page...");

    window.location.href = "home.html";
  } else {
    alert("Invalid username or password.");
  }
}
