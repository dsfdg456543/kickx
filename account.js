document.addEventListener("DOMContentLoaded", function () {
  const storedUser = JSON.parse(localStorage.getItem("user"));

  if (storedUser) {
    document.getElementById("accountName").value = storedUser.username || "";
    document.getElementById("accountEmail").value = storedUser.email || "";
    document.getElementById("accountPassword").value =
      storedUser.password || "";
    document.getElementById("accountPhone").value = storedUser.phone || "";
    document.getElementById("accountAddress").value = storedUser.address || "";
  } else {
    alert("No account data found. Please sign up or log in.");
    window.location.href = "signup.html";
  }
});

function updateAccount() {
  const updatedUser = {
    username: document.getElementById("accountName").value,
    email: document.getElementById("accountEmail").value,
    password: document.getElementById("accountPassword").value,
    phone: document.getElementById("accountPhone").value,
    address: document.getElementById("accountAddress").value,
  };

  localStorage.setItem("user", JSON.stringify(updatedUser));

  alert("Account details updated successfully!");
}
