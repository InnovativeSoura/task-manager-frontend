const API_URL = "https://project-auth-api-vvvk.onrender.com";

/* Register */

async function registerUser() {

  const name = document.getElementById("registerName").value;

  const email = document.getElementById("registerEmail").value;

  const password = document.getElementById("registerPassword").value;

  const response = await fetch(`${API_URL}/api/auth/register`, {
    method: "POST",

    headers: {
      "Content-Type": "application/json"
    },

    body: JSON.stringify({
      name,
      email,
      password
    })
  });

  const data = await response.json();

  alert(data.message);
}

/* Login */

async function loginUser() {

  const email = document.getElementById("loginEmail").value;

  const password = document.getElementById("loginPassword").value;

  const response = await fetch(`${API_URL}/api/auth/login`, {
    method: "POST",

    headers: {
      "Content-Type": "application/json"
    },

    body: JSON.stringify({
      email,
      password
    })
  });

  const data = await response.json();

  if (data.token) {

    localStorage.setItem("token", data.token);

    document.getElementById("message").innerText =
      "Login Successful";

  } else {

    alert(data.message);
  }
}

/* Logout */

function logoutUser() {

  localStorage.removeItem("token");

  document.getElementById("message").innerText =
    "Logged Out";
}