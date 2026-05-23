async function searchUser() {
  const name = document.getElementById("nameInput").value;

  const response = await fetch(`/users/search?name=${name}`);

  const users = await response.json();

  const resultDiv = document.getElementById("result");

  resultDiv.innerHTML = "";

  if (users.length === 0) {
    resultDiv.innerHTML = "<p>No users found</p>";
    return;
  }

  users.forEach(user => {
    resultDiv.innerHTML += `
      <div class="user-card">
        <p><strong>ID:</strong> ${user.id}</p>
        <p><strong>Name:</strong> ${user.name}</p>
      </div>
    `;
  });
}