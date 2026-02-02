

const form = document.getElementById("userForm")

const output = document.getElementById("output")

let users = JSON.parse(localStorage.getItem("users")) || []

renderUsers()


form.addEventListener("submit", function (elem) {

    elem.preventDefault();

    const name = document.getElementById("name").value

    const email = document.getElementById("email").value

    if (name === "" || email === "")
    {

        return 
    }
    const user = { name, email }

    users.push(user)

    localStorage.setItem("users", JSON.stringify(users));

    renderUsers();
    form.reset();

})


function renderUsers() {
    output.innerHTML = "";

    users.forEach((user) => {
        const div = document.createElement("div");
        div.className = "card";
        div.innerHTML = `
      <p><strong>Name:</strong> ${user.name}</p>
      <p><strong>Email:</strong> ${user.email}</p>
    `;
        output.appendChild(div);

    });
}